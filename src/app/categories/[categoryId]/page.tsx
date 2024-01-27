import React from 'react';

type Props = {
  params: {
    categoryId: string;
  };
};

const page = async ({ params: { categoryId } }: Props) => {
  return <div>{categoryId}</div>;
};

export default page;
