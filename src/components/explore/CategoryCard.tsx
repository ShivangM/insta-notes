import { Category } from '@/domain/entities/Category';
import React from 'react';

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
  const { name } = category;
  return <div className="relative p-10 rounded-xl shadow-lg">{name}</div>;
};

export default CategoryCard;
