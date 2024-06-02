import { useWalletStore } from '@/store/wallet/wallet-store';
import { Button } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { mappingChainInfo } from '@/configs/chain-config';
import { isContainObjectKey } from '@/lib/object-util';
import { CHAINS } from '@/data/constant';

interface IChainButtonProps {
  onOpen: () => void;
}

export default function ChainButton({ onOpen }: IChainButtonProps) {
  const { currentChainId } = useWalletStore();
  const [client, setClient] = useState(false);

  useEffect(() => setClient(true), []);

  const chain = useMemo(() => {
    return mappingChainInfo(currentChainId);
  }, [currentChainId]);

  if (client) {
    return (
      <Button
        variant="bordered"
        size="lg"
        className={`border-2 text-lg rounded-xl font-semibold h-13 ${
          isContainObjectKey(CHAINS, chain?.chainId)
            ? 'text-black'
            : 'text-red-500'
        }`}
        onPress={onOpen}
      >
        {isContainObjectKey(CHAINS, chain?.chainId) ? (
          <div className="flex space-x-2">
            <Image
              src={chain.iconPath}
              alt={chain.chainName}
              width={20}
              height={20}
            />
            <p>{chain?.chainName}</p>
          </div>
        ) : (
          'Wrong Network'
        )}
      </Button>
    );
  }
}
