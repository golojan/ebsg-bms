import React from 'react';
import FormControl from '@mui/material/FormControl';

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const TextBox = (props: Props) => {
  const { placeholder, value, onChange, required } = props;
  return (
    <>
      <FormControl fullWidth>
        <input
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          required={required}
          type="text"
          placeholder={placeholder}
          value={value}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl font-semibold text-black dark:text-white dark:bg-darkblack-500 dark:border-darkblack-500"
          onChange={onChange}
        />
      </FormControl>
    </>
  );
};

export default TextBox;
