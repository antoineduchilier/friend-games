'use client';

import 'flag-icons/css/flag-icons.min.css';
import { useState } from 'react';
import styles from './Select.module.css';

type Option = {
  value: string;
  label: string;
  flag: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ options, value, onChange }: SelectProps) => {
  const [open, setOpen] = useState(false);

  const selected = options.find((option) => option.value === value);

  return (
    <div className={styles['select']}>
      <button type="button" onClick={() => setOpen(!open)} className={styles['select-button']}>
        <span className={`fi ${selected?.flag}`} />
        {selected?.label}
      </button>

      {open && (
        <div className={styles['options']}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={styles['option-button']}
            >
              <span className={`fi ${option.flag}`} />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
