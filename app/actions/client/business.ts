// // import { ethers } from 'ethers';
// // import { abi } from '../interface/abi'; // 컴파일된 Solidity 계약의 ABI와 바이트코드 파일
// // import { bytecode } from '../interface/bytecode';

// // export const deployRwaContract = async (
// //   address: string,
// //   name: string,
// //   symbol: string,
// //   stablecoin_address: string
// // ) => {
// //   console.log('Deploying contract for address:', address);

// //   // 이더리움 공급자를 설정합니다. (예: MetaMask)
// //   const provider = new ethers.providers.Web3Provider((window as any).ethereum);
// //   const signer = provider.getSigner();

// //   // 계약 팩토리를 생성합니다.
// //   const DLTFactory = new ethers.ContractFactory(abi, bytecode, signer);

// //   // 계약을 배포합니다.
// //   try {
// //     const contract = await DLTFactory.deploy(
// //       name, // 예: name
// //       symbol, // 예: symbol
// //       address, // admin address
// //       stablecoin_address // stablecoin address
// //     );

// //     // 계약이 배포될 때까지 기다립니다.
// //     await contract.deployed();

// //     console.log('Contract deployed at address:', contract.address);
// //     return contract.address;
// //   } catch (error) {
// //     console.error('Error deploying contract:', error);
// //     throw new Error('Failed to deploy contract');
// //   }
// // };

// import { ethers } from 'ethers';
// import { abi } from '../interface/abi'; // 컴파일된 Solidity 계약의 ABI와 바이트코드 파일
// import { bytecode } from '../interface/bytecode';

// export const deployRwaContract = async (
//   name: string,
//   symbol: string,
//   address: string,
//   stablecoin_address: string
// ) => {
//   console.log('Deploying contract for address:', address);
//   console.log('Deploying contract for symbol:', symbol);
//   console.log('Deploying contract for name:', name);
//   console.log('Deploying contract for stablecoin_address:', stablecoin_address);

//   // 이더리움 공급자를 설정합니다. (예: MetaMask)
//   const provider = new ethers.providers.Web3Provider((window as any).ethereum);
//   const signer = provider.getSigner();

//   // 계약 팩토리를 생성합니다.
//   const DLTFactory = new ethers.ContractFactory(abi, bytecode, signer);

//   // 계약을 배포합니다.
//   try {
//     const contract = await DLTFactory.deploy(
//       name, // 예: name
//       symbol, // 예: symbol
//       address, // admin address
//       stablecoin_address // stablecoin address
//     );

//     // 계약이 배포될 때까지 기다립니다.
//     await contract.deployed();

//     console.log('Contract deployed at address:', contract.address);
//     return contract.address;
//   } catch (error) {
//     console.error('Error deploying contract:', error);
//     throw new Error('Failed to deploy contract');
//   }
// };

import { ethers } from 'ethers';
import { abi } from '../interface/abi'; // 컴파일된 Solidity 계약의 ABI와 바이트코드 파일
import { bytecode } from '../interface/bytecode';

export const deployRwaContract = async (
  name: string,
  symbol: string,
  address: string,
  stablecoin_address: string
) => {
  console.log('Deploying contract for address:', address);
  console.log('Deploying contract for symbol:', symbol);
  console.log('Deploying contract for name:', name);
  console.log('Deploying contract for stablecoin_address:', stablecoin_address);

  // 이더리움 공급자를 설정합니다. (예: MetaMask)
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // 계약 팩토리를 생성합니다.
  const DLTFactory = new ethers.ContractFactory(abi, bytecode, signer);

  // 계약을 배포합니다.
  try {
    const contract = await DLTFactory.deploy(
      name, // 예: name
      symbol, // 예: symbol
      address, // admin address
      stablecoin_address // stablecoin address
    );

    // 계약이 배포될 때까지 기다립니다.
    await contract.deployed();

    console.log('Contract deployed at address:', contract.address);
    return contract.address;
  } catch (error) {
    console.error('Error deploying contract:', error);
    throw new Error('Failed to deploy contract');
  }
};
