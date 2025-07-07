import React from 'react';

export function Card({ children, className = '', ...props }) {
  return <div {...props} className={`border rounded-lg ${className}`}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function CardTitle({ children, className = '', ...props }) {
  return <h4 {...props} className={`text-xl font-semibold mb-2 ${className}`}>{children}</h4>;
}