'use client'
import React from 'react';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
}

export function Magnetic({ children }: MagneticProps) {
  return (
    <div className="inline-flex">
      {children}
    </div>
  );
}
