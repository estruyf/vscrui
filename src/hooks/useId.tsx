import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export default function useId() {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(uuid());
  }, []);

  return value;
}