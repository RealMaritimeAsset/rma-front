'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Card from '@/components/card/card';
import { useWalletStore } from '@/store/wallet/wallet-store';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import {
  STABLECOIN_CONTRACT_ABI,
  STABLECOIN_CONTRACT_ADDRESS
} from '@/data/\bstable_coin';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const stablecoinContract = new ethers.Contract(
  STABLECOIN_CONTRACT_ADDRESS,
  STABLECOIN_CONTRACT_ABI,
  signer
);

const user = {
  walletAdddress: ''
};

export default function StableCoinPage() {
  const { walletAddress, walletType, isBusiness } = useWalletStore();
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState<string | null>(null);
  const [totalCollateral, setTotalCollateral] = useState<string | null>(null);
  const [latestETHUSD, setlatestETHUSD] = useState<number | null>(null);
  const [totalSupply, settotalSupply] = useState<number | null>(null);
  const [minimumCollateralizationRatio, setminimumCollateralizationRatio] =
    useState<number | null>(null);
  const [liquidationRatio, setLiquidationRatio] = useState<number | null>(null);
  const [liquidationFeePercent, setLiquidationFeePercent] = useState<
    number | null
  >(null);
  const [stablecoinBalance, setStablecoinBalance] = useState<number | null>(
    null
  );
  const [userCollateral, setSserCollateral] = useState<number | null>(null);
  const [liquidationPrice, setLiquidationPrice] = useState<number | null>(null);
  const [governanceTokenBalance, setGovernanceTokenBalance] = useState<
    number | null
  >(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    const fetchAccountAndCollateral = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
          });

          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }

          const totalCollateralBalance =
            await stablecoinContract.getTotalCollateralBalance();
          const ethtotalCollateralBalance = ethers.utils.formatUnits(
            totalCollateralBalance,
            'ether'
          );
          const nowETHUSD = await stablecoinContract.getLatestETHUSD();
          const totalSupply = await stablecoinContract.totalSupply();
          const minimumCollateralizationRatio =
            await stablecoinContract.minimumCollateralizationRatio();
          const liquidationRatio = await stablecoinContract.liquidation_ratio();
          const liquidationFeePercent =
            await stablecoinContract.liqudateFeePercent();

          const stablecoinBalance =
            await stablecoinContract.getStablecoinBalance({
              from: accounts[0]
            });
          const userCollateral = await stablecoinContract.getCollateralBalance({
            from: accounts[0]
          });
          const ethuserCollateral = ethers.utils.formatUnits(
            userCollateral,
            'ether'
          );
          const liquidationPrice =
            await stablecoinContract.getEthLiquidationPrice({
              from: accounts[0]
            });
          const governanceTokenBalance =
            await stablecoinContract.mintedGovernanceToken(accounts[0]);

          setTotalCollateral(ethtotalCollateralBalance);
          setlatestETHUSD(nowETHUSD.toString().slice(0, 4));
          settotalSupply(totalSupply.toNumber());
          setminimumCollateralizationRatio(
            minimumCollateralizationRatio.toNumber()
          );
          setLiquidationRatio(liquidationRatio.toNumber());
          setLiquidationFeePercent(liquidationFeePercent.toNumber());
          setStablecoinBalance(stablecoinBalance.toNumber());
          setSserCollateral(Number(ethuserCollateral));
          setLiquidationPrice(liquidationPrice.toNumber());
          setGovernanceTokenBalance(governanceTokenBalance.toNumber());
        } catch (error) {
          console.error('Error fetching data from contract:', error);
        }
      } else {
        console.error('MetaMask is not installed.');
      }
    };

    fetchAccountAndCollateral();
  }, []);
  const handleOnClick = async () => {
    toast.success('Minting Stablecoin TX confirmed!');

    // TODO 입력한 금액에 대해 컨트랙트로 요청
    console.log('지갑 주소: ', walletAddress, '입력한 금액: ', amount);
    const amountInWei = ethers.utils.parseEther(amount);
    const mint = await stablecoinContract.mintByEth({ value: amountInWei });
    console.log('Transaction sent:', mint);

    // 트랜잭션 결과 기다리기
    const receipt = await mint.wait();
    console.log('Transaction confirmed:', receipt);
    // 사용자 알림
    toast.success('Minting Stablecoin TX confirmed!');
  };

  const handleOnClickRedeem = async () => {
    console.log('first');
    // const redeem = await stablecoinContract.redeemCollateralAndBurn();
    // console.log('Transaction sent:', redeem);

    // 트랜잭션 결과 기다리기
    // const receipt = await redeem.wait();
    // console.log('Transaction confirmed:', receipt);
    // 사용자 알림
    toast.success('Minting Stablecoin TX confirmed!');
  };
  return (
    <div>
      <div className="flex w-full items-center justify-center h-[600px] ">
        <div className="w-[800px] mx-12">
          <div className=" text-5xl font-bold my-3">RMA Stable Coin</div>
          <div className="p-3">
            is a Crypto-collateralized type.
            <br />
            You can deposit the Ether as collateral and issue stablecoins
            equivalent to its current value.
            <br />
            The latest ETH/USD prices are updated through Chainlink's Data Feed,
            <br />
            and liquidations are executed via Automation.
            <br />
            In the event of liquidation, your debt is repaid and the remaining
            Ether is transferred to you after fees.
            <br />
            <br />
            If you issue more than 100 stablecoins, you receive governance
            tokens (1 for every 100 stablecoin)
            <br />
            It allows you to propose changes to the collateral ratio,
            liquidation fee, ratio etc. <br />
          </div>
        </div>
        <div className="border-8 rounded-lg border-stone-100 p-15 w-[600px] mr-6 mb-1">
          <Card>
            <div className="grid grid-cols-2 gap-4 p-3">
              <div>
                <div className=" text-lg font-semibold">
                  Total Eth Collateral
                </div>
                <div className=" text-2xl text-slate-400">
                  {totalCollateral}
                </div>
              </div>
              <div>
                <div className=" text-lg font-semibold">
                  Total Minted Stablecoin
                </div>
                <div className=" text-2xl text-slate-400">{totalSupply}</div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Current ETH/USD</div>
                <div className=" text-2xl text-slate-400">${latestETHUSD}</div>
              </div>
              <div>
                <div className=" text-lg font-semibold">
                  Collateralization Ratio
                </div>
                <div className=" text-2xl text-slate-400">
                  {minimumCollateralizationRatio}%
                </div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Liquidation Ratio</div>
                <div className=" text-2xl text-slate-400">
                  {liquidationRatio}%
                </div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Liquidation Fee</div>
                <div className=" text-2xl text-slate-400">
                  {liquidationFeePercent}%
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-6 justify-end mr-4">
              <input
                type="text"
                id=""
                name=""
                value={amount}
                onChange={handleChange}
                placeholder="Ether to be used as collateral"
                className=" w-full border-2 mr-4"
              />
              <Button
                variant="default"
                className="mr-6"
                onClick={handleOnClick}
              >
                Mint
              </Button>
              <Button
                variant="default"
                className="mr-6"
                onClick={handleOnClickRedeem}
              >
                Redeem
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-full flex justify-center gap-3 p-3 mx-5">
        <div className="flex flex-row border-8 rounded-lg border-stone-100 py-2 ">
          <div className=" p-5  rounded-2xl ">
            <div className=" text-xl text-blue-500 mb-3 font-bold">
              My Stable Coin
            </div>
            <div className="text-2xl font-bold">{stablecoinBalance} USDR</div>
          </div>
          <div className="bg-slate-100 h-full w-1" />
          <div className=" p-5  rounded-2xl ">
            <div className=" text-xl text-blue-500 mb-3 font-bold">
              My Collateral{' '}
            </div>
            <div className="text-2xl font-bold">{userCollateral} ETH</div>
          </div>
          <div className=" bg-slate-100 h-full w-1" />
          <div className=" p-5  rounded-2xl ">
            <div className=" text-xl  text-blue-500 mb-3 font-bold">
              My Liquidation Price
            </div>
            <div className="text-2xl font-bold">{liquidationPrice} ETH/USD</div>
          </div>
          <div className=" bg-slate-100 h-full w-1" />

          <div className=" p-5  rounded-2xl ">
            <div className=" text-xl  text-blue-500 mb-3 font-bold">
              My Governance Token
            </div>
            <div className="text-2xl font-bold">{governanceTokenBalance}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
