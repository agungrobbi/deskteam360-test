import React from 'react';

export default function Container({
  children,
  type,
  className,
}: Readonly<{
  children: React.ReactNode;
  type?: string;
  className?: string;
}>) {
  return (
    <div
      className={`${type === 'fluid' ? 'container-fluid' : 'container'}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  );
}
