'use client';
import BaseForm from '@/components/form/base-form';
import TextInput from '@/components/form/field/text-input';
import { TitleHeading } from '@/components/layout/heading';
import { Input } from '@nextui-org/react';
import React, { ChangeEvent, useCallback, useState } from 'react';
import StyledDropzone from './styled-dropzone';
import { useDropzone } from 'react-dropzone';

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    period: ''
  });
  const onDrop = useCallback((acceptedFiles: any) => {
    // 파일을 드롭했을 때 수행할 작업
    console.log('!!', acceptedFiles[0].path);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('create form: ', formData);
  };
  return (
    <>
      <TitleHeading className="mt-5" title="Create New RWA " />
      <div className="w-full flex justify-center">
        <BaseForm onSubmit={onSubmit} className=" bg-slate-300 w-11/12">
          <div className="flex">
            <div className="flex-1 bg-sky-200 gap-3">
              <div className=" font-semibold text-xl">Name</div>
              <input className="w-8/12 m-3 p-2 rounded-xl" />
              <div className=" font-semibold text-xl">Amount</div>
              <input className="w-8/12 m-3 p-2 rounded-xl" />
              <div className=" font-semibold text-xl">Period</div>
              <input className="w-8/12 m-3 p-2 rounded-xl" />
            </div>

            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-400 rounded p-5 text-center mt-4  py-2 px-4 flex-1"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </div>
        </BaseForm>
      </div>
    </>
  );
}
