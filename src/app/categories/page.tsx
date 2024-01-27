import CategoryCard from '@/components/explore/CategoryCard';
import { CategoriesFetchedResponse } from '@/domain/entities/Category';
import React from 'react';

const page = async () => {
  const res: CategoriesFetchedResponse = await fetch(
    'http://127.0.0.1:8000/api/categories',
    {
      method: 'GET',
      cache: 'no-cache',
    }
  ).then((res) => res.json());

  const categories = res.categories;

  return (
    <div className="container mx-auto p-10">
      <div className="gap-6 grid grid-cols-4">
        {categories.map((category, idx) => {
          return <CategoryCard category={category} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default page;
