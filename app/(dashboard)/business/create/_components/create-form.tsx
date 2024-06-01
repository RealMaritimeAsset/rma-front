'use client';
import BaseForm from '@/components/form/base-form';
import TextInput from '@/components/form/field/text-input';
import { TitleHeading } from '@/components/layout/heading';
import { Input } from '@nextui-org/react';
import React, { ChangeEvent, useState } from 'react';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    period: ''
  });
  const onSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('create form: ', formData);
  };
  return (
    <>
      <TitleHeading title="Create New RWA" />
      <BaseForm onSubmit={onSubmit}>
        <div className=" font-semibold text-lg">Name</div>
        <TextInput labelPlacement="inside" />
        <div className=" font-semibold text-lg">Amount</div>
        <TextInput labelPlacement="outside-left" />
        <div className=" font-semibold text-lg">Period</div>
        <TextInput labelPlacement="outside" />
      </BaseForm>
    </>
  );
}
