import { Input } from 'antd';
import React from 'react';

interface Props {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const UrlInput = ({ handleInput, handleSearch } : Props) => {
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return <Input.Search placeholder="Url" onKeyDown={handleEnter} onInput={handleInput} onSearch={handleSearch} />;
};
export default UrlInput;
