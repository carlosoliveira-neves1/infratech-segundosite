import React from 'react';

export function Button({ children, asChild, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, props);
  }
  return <button {...props}>{children}</button>;
}