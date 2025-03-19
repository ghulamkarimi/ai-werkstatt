import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className, style }: CardProps) {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`} style={style}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, style }: CardProps) {
  return (
    <div className={`p-4 ${className}`} style={style}>
      {children}
    </div>
  );
}
