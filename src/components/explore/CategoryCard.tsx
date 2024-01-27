import { Category } from '@/domain/entities/Category';
import Link from 'next/link';
import React from 'react';

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
  const { name, slug, id } = category;
  return (
    <Link
      href={`/categories/${id}`}
      className="relative flex items-center justify-center p-10 rounded-xl shadow-lg"
    >
      {name}
    </Link>
  );
};

export default CategoryCard;
