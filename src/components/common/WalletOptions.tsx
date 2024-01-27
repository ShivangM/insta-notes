import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Connector, useConnect } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ));
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = await connector.getProvider();
        setReady(!!provider);
      } catch (error) {
        console.error('Error fetching provider:', error);
        // Handle errors accordingly
      }
    };

    // Check if it's the client-side before fetching data
    if (typeof window !== 'undefined') {
      fetchData();
    }
  }, [connector]);

  return (
    <button
      disabled={!ready}
      onClick={onClick}
      type="button"
      className="text-gray-900 space-x-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
    >
      <Image
        src={connector.icon!}
        alt={connector.name}
        height={30}
        width={30}
      />
      <span>Connect with {connector.name}</span>
    </button>
  );
}
