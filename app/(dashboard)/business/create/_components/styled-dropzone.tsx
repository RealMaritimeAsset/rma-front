import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const StyledDropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // 파일을 드롭했을 때 수행할 작업
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // 폼 제출 시 수행할 작업
    console.log('Form Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-400 rounded p-5 text-center mt-4  py-2 px-4 "
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StyledDropzone;
