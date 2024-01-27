'use client';
import useCurrencyConversion from '@/app/hooks/useCurrencyConversion';

type Props = {
  usdPrice: number;
};

const Price = ({ usdPrice }: Props) => {
  const { convertUsdToETH } = useCurrencyConversion();

  return <span>{convertUsdToETH(usdPrice)} ETH</span>;
};

export default Price;
