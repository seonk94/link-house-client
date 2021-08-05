import { Input } from 'antd';
import React from 'react';

interface Props {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const UrlInput = ({ handleInput, handleSearch } : Props) => <Input.Search placeholder="Input url" type="url" onInput={handleInput} onSearch={handleSearch} />;
export default UrlInput;
