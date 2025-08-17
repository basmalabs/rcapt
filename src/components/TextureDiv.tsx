"use client"

import { useTheme } from 'next-themes';

import React from 'react';
import clsx from 'clsx';
import textures, { type texturesType } from '@/styles/textures';

interface TextureDivProps {
  texture?: texturesType;
  children: React.ReactNode;
}

const style = "w-full m-0 p-0"

function TextureDiv( { texture, children }: TextureDivProps ) {
  const { theme } = useTheme();

  if ( !texture ) return <div className={style}>{ children }</div>;

  return (
    <div className={ clsx(
      style,
      theme === "dark" ? textures[ texture ].dark : textures[ texture ].light
    ) }>
      { children }
    </div>
  );
}

export default TextureDiv;
