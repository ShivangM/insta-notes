import React from 'react';

type Props = {
  params: {
    categoryId: string;
  };
};

const page = ({ params: { categoryId } }: Props) => {
  return <div>{categoryId}</div>;
};

export default page;
