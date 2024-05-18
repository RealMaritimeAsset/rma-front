import { mappingChainInfo } from '@/configs/chain-config'
import { useMetaMask } from '@/hooks/metamask-hook'
import { WalletType } from '@/store/wallet/wallet-type'
import { useWalletStore } from '@/store/wallet/wallet-store'
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CHAINS } from '@/data/constant'

interface IChainModalProps {
  isOpen: boolean
  onOpenChange: () => void
}

export const ChainModal = ({ isOpen, onOpenChange }: IChainModalProps) => {
  const { walletType, currentChainId } = useWalletStore()
  const { changeChain } = useMetaMask()

  const chainFilter = useMemo(() => {
    return Object.values(CHAINS)
  }, [currentChainId, walletType])

  const chainItemRender = useCallback(
    (onClose: () => void) => {
      return chainFilter.map((chain) => {
        return (
          <Button
            key={chain.chainId}
            className={`flex justify-between items-center space-x-3 py-6 rounded-md ${
              chain.chainId === currentChainId
                ? 'bg-[#0052FF] text-white'
                : 'bg-white hover:bg-slate-100'
            }`}
            disabled={chain.chainId === currentChainId}
            onPress={async () => {
              await changeChain(chain.chainId)
              onClose()
            }}
          >
            <div className="flex space-x-3 items-center">
              <Image
                src={chain.iconPath}
                alt={chain.chainName}
                width={30}
                height={30}
              />
              <p className="font-semibold">{chain.chainName}</p>
            </div>
            {chain.chainId === currentChainId && <div>Connected</div>}
          </Button>
        )
      })
    },
    [chainFilter, changeChain, currentChainId]
  )

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-lg font-semibold text-[#0F1419]flex items-center space-x-3">
              Switch Networks
            </ModalHeader>
            <Divider />
            <ModalBody className=" my-4">
              <>{chainItemRender(onClose)}</>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
