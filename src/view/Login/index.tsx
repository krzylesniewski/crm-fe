import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <div>
      <Button type="primary">
        <Link to={'/'}>Home</Link>
      </Button>
      <Button type="primary">
        <Link to={'/dashboard'}>Dashboard</Link>
      </Button>
      <h1>Hello in Login form</h1>
    </div>
  );
};

export default LoginComponent;
