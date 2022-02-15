import { Input } from 'antd';
import React from 'react';

interface Props {
  value: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const UrlInput = ({ handleInput, handleSearch, value }: Props) => (
  <Input.Search
    placeholder="URL 주소를 입력해주세요."
    type="url"
    onInput={handleInput}
    value={value}
    onSearch={handleSearch}
  />
);
export default UrlInput;
