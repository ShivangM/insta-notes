import { useEffect, useState } from 'react';

const useCurrencyConversion = () => {
  //To-Do: Move this to a custom hook
  const [ethConversionRate, setEthConversionRate] = useState<number>(1);

  useEffect(() => {
    const fetchETHRatesHandler = async () => {
      try {
        const res = await fetch(
          'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
          {
            cache: 'no-cache',
          }
        ).then((res) => res.json());

        setEthConversionRate(1 / res.USD);
      } catch (error) {
        console.error('Error fetching ETH rates:', error);
      }
    };

    // Initial call
    fetchETHRatesHandler();

    // Set up interval to call the function every 1 second
    const intervalId = setInterval(fetchETHRatesHandler, 10000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const convertUsdToETH = (inr: number) =>
    (inr * ethConversionRate).toPrecision(10);

  return { convertUsdToETH };
};

export default useCurrencyConversion;
