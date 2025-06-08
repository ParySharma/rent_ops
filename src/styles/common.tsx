import { css, keyframes } from '@emotion/react';
export const placeholder = (size?: number, weight?: number) => css`
  &::placeholder {
    font-size: ${size || 14}px;
    font-weight: ${weight || 400};
    color: var(--placeholder-text-color);
    opacity: 1;
  }
`;
export const InputStyled = ({
  color,
  radius,
  error,
  borderColor,
  mb,
  lineHeight,
  backgroundColor,
  ltop,
  textColor,
  iconColor,
  padding,
  fontSize,
}: any) => css`
  &&.MuiFormControl-root {
    margin-bottom: ${mb || 0}px;
    width: 100%;

    label {
      top: ${ltop || '0px'};
    }

    .MuiInputBase-input {
      padding: 0;
      color: ${color || 'var(--input-text-color)'} !important;
      ${placeholder()};
    }

    .MuiOutlinedInput-root,
    .MuiInputLabel-root {
      font-size: ${fontSize || '25px'} !important;
      font-weight: 400;
      line-height: ${lineHeight || '25px'} !important;
      color: var(--placeholder-text-color);
    }

    .MuiInputBase-root.MuiOutlinedInput-root {
      background-color: ${backgroundColor
        ? backgroundColor
        : 'var(--input-background-color)'};
      color: ${error ? 'var(--error-text-color)' : 'var(--input-text-color)'};
      width: 100%;
      padding: 16px;
      font-family: unset;
      ${placeholder()};
    }

    .MuiInputLabel-shrink {
      top: 0 !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${error
        ? 'var(--error-text-color)'
        : borderColor || 'var(--input-border-color)'};
      border-radius: ${radius || 6}px;
    }

    .MuiInputLabel-root.Mui-focused {
      color: ${error
        ? 'var(--error-text-color) !important'
        : textColor || 'var(--primary-button-background-color) !important'};
    }

    .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border-color: ${error
        ? 'var(--error-text-color)'
        : borderColor || 'var(--primary-button-background-color)'};
      border-width: 2px;
    }

    .MuiButtonBase-root.MuiIconButton-root {
      margin-right: -8px;
    }

    svg {
      fill: ${iconColor || 'var(--primary-button-background-color)'};
    }
  }

  /* For WebKit-based browsers (Chrome, Safari) */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  /* For Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield; /* Ensure compatibility with other browsers as well */
  }
`;
