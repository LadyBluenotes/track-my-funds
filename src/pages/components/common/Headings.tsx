import React, { FC, ReactNode } from "react";

export interface HeadingProps {
  level: number;
  color: string;
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ level, color, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const h1 = `mb-4 text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-${color}`;

  const h2 = `mb-4 text-4xl lg:text-5xl tracking-tight font-bold text-${color}`;

  const h3 = `mb-2 text-3xl lg:text-4xl font-bold text-${color}`;

  const h4 = `mb-2 text-2xl lg:text-3xl font-bold text-${color}`;

  const h5 = `mb-2 text-xl lg:text-2xl font-bold text-${color}`;

  const h6 = `mb-2 text-lg lg:text-xl font-bold text-${color}`;

  const className =
    level === 1
      ? h1
      : level === 2
      ? h2
      : level === 3
      ? h3
      : level === 4
      ? h4
      : level === 5
      ? h5
      : h6;

  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
