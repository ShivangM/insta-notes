import React from 'react';

type Props = {
  terms: string;
};

const Terms = ({ terms }: Props) => {
  return <div className="mb-6">{terms}</div>;
};

export default Terms;
