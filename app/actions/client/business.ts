import { ethers } from 'ethers';
import { abi } from '../interface/abi'; // 컴파일된 Solidity 계약의 ABI와 바이트코드 파일
import { bytecode } from '../interface/bytecode';

export const deployRwaContract = async (
  name: any,
  symbol: any,
  adminAddress: any,
  stablecoinAddress: any,
  business_name: any
) => {
  console.log('Deploying contract for address:', adminAddress);
  console.log('Deploying contract for symbol:', symbol);
  console.log('Deploying contract for name:', name);
  console.log('Deploying contract for stablecoin_address:', stablecoinAddress);
  console.log('business_name', business_name);
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
      adminAddress, // admin address
      stablecoinAddress // stablecoin address
    );

    // 계약이 배포될 때까지 기다립니다.
    await contract.deployed();

    console.log('Contract deployed at address:', contract.address);
    const business_ca = contract.address;

    console.log('business_ca', business_ca);
    // Mypage API 호출
    const mypageResponse = await fetch(
      `http://localhost:3000/api/v1/mypage/${adminAddress}`
    );
    if (!mypageResponse.ok) {
      throw new Error('Failed to fetch mypage data');
    }
    const mypageData = await mypageResponse.json();

    console.log('mypageData', mypageData);

    // Register company API 호출
    const registerCompanyBody = {
      id: mypageData.res[0].id,
      business_name: business_name,
      business_ca: business_ca,
      address: adminAddress
    };

    console.log('registerCompanyBody', registerCompanyBody);

    console.log(
      'JSON.stringify(registerCompanyBody)',
      JSON.stringify(registerCompanyBody)
    );
    const registerCompanyResponse = await fetch(
      'http://localhost:3000/api/v1/register-company',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerCompanyBody)
      }
    );

    if (!registerCompanyResponse.ok) {
      throw new Error('Failed to register company');
    }

    return contract.address;
  } catch (error) {
    console.error('Error deploying contract:', error);
    throw new Error('Failed to deploy contract');
  }
};
