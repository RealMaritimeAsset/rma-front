'use client';
import BaseForm from '@/components/form/base-form';
import TextInput from '@/components/form/field/text-input';
import { TitleHeading } from '@/components/layout/heading';
import { Input } from '@nextui-org/react';
import React, { ChangeEvent, useCallback, useState } from 'react';
import StyledDropzone from './styled-dropzone';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    amount: '',
    type: '',
    country: '',
    company: '',
    name: '',
    price: '',
    description: '',
    uri: '',
    builder: '',
    weight: '',
    expected_date: '',
    imo_number: '',
    expiration: '',
    due_date: '',
    network: ''
  });
  const onDrop = useCallback((acceptedFiles: any) => {
    // 파일을 드롭했을 때 수행할 작업
    console.log('!!', acceptedFiles[0].path);
  }, []);
  const router = useRouter();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const response = await axios.post(
      `http://localhost:3000/api/v1/register-ship-detail`,
      formData
    );
    router.push('create/create-rwa');
    console.log('response', response);
    console.log('create form: ', formData);
  };
  return (
    <>
      <TitleHeading className="mt-5" title="Create New RWA " />
      <div className="w-full flex justify-center">
        <BaseForm onSubmit={onSubmit} className="w-9/12">
          <div className="flex">
            <div className="flex-1  gap-3">
              <div className=" font-semibold ml-3 text-xl">Name</div>
              <input
                value={formData.name}
                onChange={handleChange}
                name="name"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Real Cruise Ship"
              />
              <div className=" font-semibold ml-3 text-xl">Amount</div>
              <input
                value={formData.amount}
                onChange={handleChange}
                name="amount"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="10"
              />
              <div className=" font-semibold ml-3 text-xl">Country</div>
              <input
                value={formData.country}
                onChange={handleChange}
                name="country"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Korea"
              />
              <div className=" font-semibold ml-3 text-xl">Company</div>
              <input
                value={formData.company}
                onChange={handleChange}
                name="company"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Daehan"
              />
              <div className=" font-semibold ml-3 text-xl">Type</div>
              <input
                value={formData.type}
                onChange={handleChange}
                name="type"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g cargo ship"
              />
              <div className=" font-semibold ml-3 text-xl">Price</div>
              <input
                value={formData.price}
                onChange={handleChange}
                name="price"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 500000"
              />
              <div className=" font-semibold ml-3 text-xl">Description</div>
              <input
                value={formData.description}
                onChange={handleChange}
                name="description"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g A large cargo ship"
              />
              <div className=" font-semibold ml-3 text-xl">Uri</div>
              <input
                value={formData.uri}
                onChange={handleChange}
                name="uri"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g https://90435dc40a621a9fa78ca7622125cd00.ipfscdn.io/ipfs/bafybeid6doxb7mhfwwbbptcrmd4n3r3ofel3l22mvywvup5qyzb6xqhrai/0"
              />
              <div className=" font-semibold ml-3 text-xl">Builder</div>
              <input
                value={formData.builder}
                onChange={handleChange}
                name="builder"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="XYZ Shipbuilders"
              />
              <div className=" font-semibold ml-3 text-xl">Weight</div>
              <input
                value={formData.weight}
                onChange={handleChange}
                name="weight"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 10,000,000"
              />
              <div className=" font-semibold ml-3 text-xl">Expected date</div>
              <input
                value={formData.expected_date}
                onChange={handleChange}
                name="expected_date"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 2025-06-30 00:00:00"
              />
              <div className=" font-semibold ml-3 text-xl">IMO Number</div>
              <input
                value={formData.imo_number}
                onChange={handleChange}
                name="imo_number"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 5928394"
              />
              <div className=" font-semibold ml-3 text-xl">Expiration</div>
              <input
                value={formData.expiration}
                onChange={handleChange}
                name="expiration"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g 2030-12-31 00:00:00"
              />
              <div className=" font-semibold ml-3 text-xl">Due date</div>
              <input
                value={formData.due_date}
                onChange={handleChange}
                name="due_date"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Funding due date"
              />
              <div className=" font-semibold ml-3 text-xl">Network</div>
              <input
                value={formData.network}
                onChange={handleChange}
                name="network"
                className="w-8/12 m-3 p-3 rounded-xl bg-[#F6F6F6] text-xl mb-10"
                placeholder="e.g Blockchain Network"
              />
            </div>
          </div>
        </BaseForm>
      </div>
    </>
  );
}
