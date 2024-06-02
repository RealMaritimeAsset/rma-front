'use client';
import BaseForm from '@/components/form/base-form';
import { TitleHeading } from '@/components/layout/heading';
import React, { ChangeEvent, useCallback, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function CreateRwaForm() {
  const [formData, setFormData] = useState({
    recipient: '',
    mainId: '',
    subIdAmounts: '',
    tokenAmounts: '',
    tokenUris: '',
    ipfs_id: '',
    sold_amount: '',
    name: '',
    network: '',
    user_id: '',
    company: ''
  });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await axios.post(``, formData);
    toast.success('You Successfully minted your RWA~ 🎉');
    console.log('response', response);
    console.log('create form: ', formData);
    router.push('/market');
  };
  return (
    <>
      <TitleHeading className="mt-5" title="Create New RWA " />
      <div className="w-full flex justify-center">
        <BaseForm onSubmit={onSubmit} className="w-9/12">
          <div className="flex">
            <div className="flex-1  gap-3">
              <div className=" font-semibold ml-3 text-xl">Recipient</div>
              <input
                value={formData.recipient}
                onChange={handleChange}
                name="recipient"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Real Cruise Ship"
              />
              <div className=" font-semibold ml-3 text-xl">MainId</div>
              <input
                value={formData.mainId}
                onChange={handleChange}
                name="mainId"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="10"
              />
              <div className=" font-semibold ml-3 text-xl">SubIdAmounts</div>
              <input
                value={formData.subIdAmounts}
                onChange={handleChange}
                name="subIdAmounts"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Korea"
              />
              <div className=" font-semibold ml-3 text-xl">TokenAmounts</div>
              <input
                value={formData.tokenAmounts}
                onChange={handleChange}
                name="tokenAmounts"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Daehan"
              />
              <div className=" font-semibold ml-3 text-xl">TokenUris</div>
              <input
                value={formData.tokenUris}
                onChange={handleChange}
                name="tokenUris"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g cargo ship"
              />
              <div className=" font-semibold ml-3 text-xl">Ipfs_id</div>
              <input
                value={formData.ipfs_id}
                onChange={handleChange}
                name="ipfs_id"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 500000"
              />
              <div className=" font-semibold ml-3 text-xl">Sold_amount</div>
              <input
                value={formData.sold_amount}
                onChange={handleChange}
                name="sold_amount"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g A large cargo ship"
              />
              <div className=" font-semibold ml-3 text-xl">Name</div>
              <input
                value={formData.name}
                onChange={handleChange}
                name="name"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g https://90435dc40a621a9fa78ca7622125cd00.ipfscdn.io/ipfs/bafybeid6doxb7mhfwwbbptcrmd4n3r3ofel3l22mvywvup5qyzb6xqhrai/0"
              />
              <div className=" font-semibold ml-3 text-xl">Network</div>
              <input
                value={formData.network}
                onChange={handleChange}
                name="network"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="XYZ Shipbuilders"
              />
              <div className=" font-semibold ml-3 text-xl">User_id</div>
              <input
                value={formData.user_id}
                onChange={handleChange}
                name="user_id"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 10,000,000"
              />
              <div className=" font-semibold ml-3 text-xl">Company</div>
              <input
                value={formData.company}
                onChange={handleChange}
                name="company"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 2025-06-30 00:00:00"
              />
            </div>
          </div>
        </BaseForm>
      </div>
    </>
  );
}
