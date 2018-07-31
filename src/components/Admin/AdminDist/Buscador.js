import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const Buscador = () => {
  return (
    <div>
          <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: '300px', margin:'20px' }}
    />
    </div>
  );
};

export default Buscador;