import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner
} from '@nextui-org/react';
import Image from 'next/image';
import WalletSelector from './wallet-selector';
import { WalletType } from '@/store/wallet/wallet-type';
import { useCallback, useEffect, useState } from 'react';
import { useWalletStore } from '@/store/wallet/wallet-store';
import { useMetaMask } from '@/hooks/metamask-hook';

interface WalletModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function WalletModal({
  isOpen,
  onOpenChange
}: WalletModalProps) {
  const { walletAddress } = useWalletStore();
  const [walletAddressInput, setWalletAddressInput] = useState(
    walletAddress || ''
  );
  const { connect } = useMetaMask();

  const walletContent = useCallback(
    (onClose: () => void) => {
      const walletList = [
        {
          label: 'Metamask',
          type: WalletType.metamask,
          icon: '/icons/metamask-icon.png',
          function: () => connect()
        }
      ];

      return (
        <>
          <ModalHeader className="flex items-center space-x-3">
            <Image src="/icons/logo.png" alt="Logo" width={40} height={32} />
            <p>RMA</p>
          </ModalHeader>
          <ModalBody className=" my-5 ">
            <h1 className="font-semibold text-[#0F1419] text-2xl">
              Connect Wallet
            </h1>
            <p className="font-normal text-sm text-[#5B616E] pb-4">
              Choose how you want to connect. There are several wallet
              providers.
              <span className="text-[#0052FF] ml-1">Sign in another way</span>
            </p>
            <WalletSelector walletList={walletList} onClose={onClose} />
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <p className="text-sm text-[#5B616E]">
              What is a wallet ?{' '}
              <span className="text-[#0052FF] font-semibold cursor-pointer">
                Learn about wallets
              </span>
            </p>
          </ModalFooter>
        </>
      );
    },
    [connect]
  );

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={true}
      className=" p-4 rounded-lg bg-[#F6F6F6] shadow-lg "
    >
      <ModalContent className="px-3 py-8">
        {(onClose) => {
          return walletContent(onClose);
        }}
      </ModalContent>
    </Modal>
  );
}
