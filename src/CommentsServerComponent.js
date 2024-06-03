import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
  } from '@tanstack/react-query'
  import Comments from './comments'
import React, { useContext } from 'react';

export default async function CommentsServerComponent() {
    const queryClient = new QueryClient()
  
    await queryClient.prefetchQuery({
      queryKey: ['posts-comments'],
      queryFn: getComments,
    })
  
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Comments />
      </HydrationBoundary>
    )
  }