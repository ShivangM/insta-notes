from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status, generics
from category.models import Category
from category.serializers import CategorySerializer
import math
from datetime import datetime

class Categorys(generics.GenericAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    '''
        Endpoint: /api/categorys
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

        # Get all categorys and their count.
        categorys = Category.objects.all()
        total_categorys = categorys.count()

        # Filter categorys by search param.
        if search_param:
            categorys = categorys.filter(title__icontains=search_param)

        # Serialize data.
        serializer = self.serializer_class(categorys[start_num:end_num], many=True)

        #Returns response.
        return Response({
            "status": "success",
            "total": total_categorys,
            "page": page_num,
            "last_page": math.ceil(total_categorys / limit_num),
            "categorys": serializer.data
        })

    '''
        Endpoint: /api/departmets
        Method: POST
        Description: Add a category to database.
    '''
    def post(self, request):
        # Serializes data provided.
        serializer = self.serializer_class(data=request.data)

        # Checks if data provided is valid.
        if serializer.is_valid():
            # Saves category if valid.
            serializer.save()
            return Response({"status": "success", "data": {"category": serializer.data}}, status=status.HTTP_201_CREATED)
        else:
            # Returns error response if data is invalid.
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class CategoryDetail(generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    '''
        Method: get_category
        Returns: Category
        Description: Returns category by id from database.
        Params: pk: primary key.
    '''
    def get_category(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk):
        # Retrieves category from database.
        category = self.get_category(pk=pk)

        # Returns error response if category not found.
        if category == None:
            return Response({"status": "fail", "message": f"Category with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Seriialize category data.
        serializer = self.serializer_class(category)
        return Response({"status": "success", "data": {"category": serializer.data}})

    '''
        Endpoint: /api/categorys/:pk
        Method: PATCH
        Description: Update a category in database.
    '''
    def patch(self, request, pk):
        # Retrieves category from database.
        category = self.get_category(pk)

        # Returns error response if category not found.
        if category == None:
            return Response({"status": "fail", "message": f"Category with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Seriialize category data.
        serializer = self.serializer_class(
            category, data=request.data, partial=True)
        
        # Checks if provided details are valid.
        if serializer.is_valid():
            # Update category and returns updated response if details are valid.
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status": "success", "data": {"category": serializer.data}})

        # Returns error response if category is not valid.
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    '''
        Endpoint: /api/categorys/:pk
        Method: DELETE
        Description: Delete a category from database.
    '''
    def delete(self, request, pk):
        # Retrieves category from database.
        category = self.get_category(pk)

        # Returns error response if category does not exists.
        if category == None:
            return Response({"status": "fail", "message": f"Category with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        # Deletes category from database.
        category.delete()

        #Returns response to client
        return Response(status=status.HTTP_204_NO_CONTENT)


