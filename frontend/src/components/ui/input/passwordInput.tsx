import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Input from './input';
import { InputProps } from './input.types'; 

const PasswordInput: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
        </button>
      }
    />
  );
};

export default PasswordInput;
