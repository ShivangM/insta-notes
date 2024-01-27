from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status, generics
from posts.models import Post
from posts.serializers import PostSerializer
import math
from datetime import datetime

class Posts(generics.GenericAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    '''
        Endpoint: /api/posts
        Method: GET
        Description: Returns list of all departmets, or based on provided page, limit, search value.
    '''
    def get(self, request):
         # Get page number and limit from request query params.
        page_num = int(request.GET.get("page", 1))
        limit_num = int(request.GET.get("limit", 10))

        # Decide range of objects to send.
        start_num = (page_num - 1) * limit_num
        end_num = limit_num * page_num

        # Get search sting from query params
        search_param = request.GET.get("search")

        # Get all posts and their count.
        posts = Post.objects.all()
        total_posts = posts.count()

        # Filter posts by search param.
        if search_param:
            posts = posts.filter(title__icontains=search_param)

        # Serialize data.
        serializer = self.serializer_class(posts[start_num:end_num], many=True)

        #Returns response.
        return Response({
            "status": "success",
            "total": total_posts,
            "page": page_num,
            "last_page": math.ceil(total_posts / limit_num),
            "posts": serializer.data
        })

    '''
        Endpoint: /api/departmets
        Method: POST
        Description: Add a post to database.
    '''
    def post(self, request):
        # Serializes data provided.
        serializer = self.serializer_class(data=request.data)

        # Checks if data provided is valid.
        if serializer.is_valid():
            # Saves post if valid.
            serializer.save()
            return Response({"status": "success", "data": {"post": serializer.data}}, status=status.HTTP_201_CREATED)
        else:
            # Returns error response if data is invalid.
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class PostDetail(generics.GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    '''
        Method: get_post
        Returns: Post
        Description: Returns post by id from database.
        Params: pk: primary key.
    '''
    def get_post(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk):
        # Retrieves post from database.
        post = self.get_post(pk=pk)

        # Returns error response if post not found.
        if post == None:
            return Response({"status": "fail", "message": f"Post with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Seriialize post data.
        serializer = self.serializer_class(post)
        return Response({"status": "success", "data": {"post": serializer.data}})

    '''
        Endpoint: /api/posts/:pk
        Method: PATCH
        Description: Update a post in database.
    '''
    def patch(self, request, pk):
        # Retrieves post from database.
        post = self.get_post(pk)

        # Returns error response if post not found.
        if post == None:
            return Response({"status": "fail", "message": f"Post with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Seriialize post data.
        serializer = self.serializer_class(
            post, data=request.data, partial=True)
        
        # Checks if provided details are valid.
        if serializer.is_valid():
            # Update post and returns updated response if details are valid.
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status": "success", "data": {"post": serializer.data}})

        # Returns error response if post is not valid.
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    '''
        Endpoint: /api/posts/:pk
        Method: DELETE
        Description: Delete a post from database.
    '''
    def delete(self, request, pk):
        # Retrieves post from database.
        post = self.get_post(pk)

        # Returns error response if post does not exists.
        if post == None:
            return Response({"status": "fail", "message": f"Post with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Deletes post from database.
        post.delete()

        #Returns response to client
        return Response(status=status.HTTP_204_NO_CONTENT)








# Create your views here.
