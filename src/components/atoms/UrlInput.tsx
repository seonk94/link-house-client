import { Input } from 'antd';
import React from 'react';

interface Props {
  value: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const UrlInput = ({ handleInput, handleSearch, value } : Props) => <Input.Search placeholder="Input url" type="url" onInput={handleInput} value={value} onSearch={handleSearch} />;
export default UrlInput;
