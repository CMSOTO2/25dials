import React from 'react';

export const handleEnterKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement> | React.KeyboardEvent<SVGElement>,
  func: Function
) => {
  if (e.key === 'Enter') {
    func();
  }
};
