// import { useReadContract, useWriteContract, useAccount } from 'wagmi';
// import POST_ABI from '../abis/DocumentAgreement.json';
// import { Result } from 'ethers/lib/utils.js';
// import { BigNumber } from 'ethers';
// import { PostData } from '../interfaces/typings';

// export function useTotalPublishedPosts(): number | Result | undefined {
//   const totalPublishedPostReader = usePostListReader({
//     functionName: 'totalPublishedPosts',
//     args: [],
//   });
//   const totalPublishedPosts:
//     | Awaited<ReturnType<PostList['totalPublishedPosts']>>
//     | Result
//     | undefined = totalPublishedPostReader.data as
//     | BigNumber
//     | Result
//     | undefined;

//   if (!totalPublishedPosts) return undefined;

//   return parseInt(totalPublishedPosts.toString()) as number;
// }

// export function usePublishedPost(index: number): `0x${string}` | undefined {
//   const publishedPostListReader = usePostListReader({
//     functionName: 'publishedPosts',
//     args: [index],
//   });
//   const publishedPost = publishedPostListReader.data as
//     | `0x${string}`
//     | undefined;

//   if (!publishedPost) return undefined;

//   return publishedPost;
// }

// export function usePostListContract(): PostList {
//   const contract = useAccount({
//     address: process.env.NEXT_PUBLIC_POST_CONTRACT,
//     abi: POST_ABI,
//   });

//   return contract as PostList;
// }

// export function usePostListWriter(
//   functionName: string
// ): ReturnType<typeof useWriteContract> {
//   const contractWrite = useWriteContract({
//     mode: 'recklesslyUnprepared',
//     address: process.env.NEXT_PUBLIC_POST_CONTRACT,
//     abi: POST_ABI,
//     functionName: functionName,
//   });

//   return contractWrite;
// }

// export function usePostListReader({
//   functionName,
//   args,
// }: {
//   functionName: string;
//   args: any[];
// }): ReturnType<typeof useReadContract> {
//   const contractRead = useReadContract({
//     address: process.env.NEXT_PUBLIC_POST_CONTRACT,
//     abi: POST_ABI,
//     functionName: functionName,
//     args: args,
//     watch: true,
//   });

//   return contractRead;
// }

// export function usePost(contractAddress: string): Post {
//   const contract = useAccount({
//     address: contractAddress,
//     abi: POST_ABI,
//   });

//   return contract as Post;
// }

// export function usePostWriter({
//   contractAddress,
//   functionName,
// }: {
//   functionName: string;
//   contractAddress: `0x${string}`;
// }): ReturnType<typeof useWriteContract> {
//   const contractWrite = useWriteContract({
//     address: contractAddress,
//     abi: POST_ABI,
//     functionName: functionName,
//     mode: 'recklesslyUnprepared',
//   });

//   return contractWrite;
// }

// export const usePostData = (contractAddress: `0x${string}`) => {
//   const {
//     data: documentHash,
//     isError: isDocumentHashError,
//     isLoading: isDocumentHashLoading,
//   } = useReadContract({
//     address: contractAddress,
//     abi: POST_ABI,
//     functionName: 'documentHash',
//   });

//   const {
//     data: terms,
//     isError: isTermsError,
//     isLoading: isTermsLoading,
//   } = useReadContract({
//     address: contractAddress,
//     abi: POST_ABI,
//     functionName: 'terms',
//   });

//   const {
//     data: owner,
//     isError: isOwnerError,
//     isLoading: isOwnerLoading,
//   } = useReadContract({
//     address: contractAddress,
//     abi: POST_ABI,
//     functionName: 'owner',
//   });

//   return {
//     documentHash,
//     terms,
//     owner,
//   } as PostData;
// };
