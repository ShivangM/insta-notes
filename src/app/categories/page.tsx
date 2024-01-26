import CategoryCard from '@/components/explore/CategoryCard';
import React from 'react';
import categories from '../../utils/categories.json';

const page = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="gap-6 grid grid-cols-4">
        {categories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </div>
    </div>
  );
};

export default page;
