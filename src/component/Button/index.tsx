'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface ButtonStyledProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'outlined' | 'contained';
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  width?: number | string;
  onClick?: () => void;
  borderRadius?: string | number;
  height?: number | string;
  fontSize?: string;
}

const CustomButton = styled(Button)<{
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  width?: number | string;
  borderRadius?: string | number;
  height?: number | string;
  fontSize?: string;
}>(
  ({
    backgroundColor,
    borderColor,
    color,
    width,
    borderRadius,
    height,
    fontSize,
  }) => ({
    backgroundColor,
    borderColor,
    color,
    width,
    borderWidth: borderColor ? 1 : 0,
    borderStyle: borderColor ? 'solid' : undefined,
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: borderRadius || '8px',
    height: height || '40px',
    fontSize: fontSize || '16px',
    '&:hover': {
      backgroundColor,
      opacity: 0.9,
    },
  })
);

const ButtonStyled: React.FC<ButtonStyledProps> = ({
  type = 'button',
  variant = 'contained',
  text,
  backgroundColor,
  borderColor,
  color,
  width,
  onClick,
  borderRadius,
  height,
  fontSize = '16px',
}) => {
  return (
    <CustomButton
      type={type}
      variant={variant}
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      height={height}
      color={
        color as
          | 'inherit'
          | 'primary'
          | 'secondary'
          | 'success'
          | 'error'
          | 'info'
          | 'warning'
          | undefined
      }
      width={width}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {text}
    </CustomButton>
  );
};

export default ButtonStyled;
