import { MetaMaskProvider as Metamask } from '@metamask/sdk-react'

export default function MetamaskProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Metamask
      debug={false}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: 'rma',
          // url: window.location.href,
        },
      }}
    >
      {children}
    </Metamask>
  )
}
