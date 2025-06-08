'use client';

// Libraries
import { useState } from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
// Utils
import { InputStyled } from '@/styles/common';
// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { EMPTY_STRING, SCREEN_SOLUTION } from '@/units/constants';
import _size from 'lodash/size';
import _trim from 'lodash/trim';
import { formatCurrency } from '@/units/commonFunction';

const TextFieldWrapper: any = styled(TextField, {
  shouldForwardProp: (prop) =>
    prop !== 'borderColor' &&
    prop !== 'mainbackgroundColor' &&
    prop !== 'textColor' &&
    prop !== 'backgroundColor' &&
    prop !== 'color' &&
    prop !== 'fontSize',
})`
  ${(props) => InputStyled(props)};

  &&.password {
    .MuiInputBase-root.MuiOutlinedInput-root {
      font-size: ${({ type }: any) => (type === 'password' ? 25 : 18)}px;
    }
  }
  margin-top: ${({ mt }: any) => mt || 0}px;
  width: ${({ width }: any) => width} !important;

  .MuiOutlinedInput-notchedOutline {
    font-size: ${({ type }: any) => type === 'password' && '24px'};
  }

  .MuiFormHelperText-root {
    margin-left: 0;
    margin-right: 0;
    color: var(--body-text-color) !important;
  }
`;
const CustomInput = ({
  formik,
  type,
  name,
  value,
  onChange,
  label,
  maxLength,
  placeHolder,
  mt,
  ltop,
  height,
  color,
  mr,
  disabled,
  backgroundColor,
  mb,
  multiline,
  onKeyDown,
  onBlur,
  maxRows,
  rows,
  borderColor,
  radius,
  onMouseDown,
  top,
  isPassword,
  isVerify,
  isVerifyIcon,
  required,
  width,
  minValue,
  maxValue,
  showStartIcon,
  showEndIcon,
  fieldTouched,
  fontSize,
  fieldError,
  maxWidth,
  helperText,
  amount,
  ErrorColor,
  textColor,
  variant = 'outlined',
  step,
  className,
  loading,
  minHeight,
  lineHeight,
  padding,
}: any) => {
  const isMobile = useMediaQuery(SCREEN_SOLUTION.MOBILE);
  const isTablet = useMediaQuery(SCREEN_SOLUTION.TABLET);

  const showError =
    (fieldTouched && fieldError) ||
    (formik?.touched[name] && formik?.errors[name]);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const endAdornment = () => {
    if (isPassword) {
      return (
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge='end'
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      );
    }
    if (isVerifyIcon) {
      return isVerify ? (
        <CheckCircleIcon sx={{ fill: '#1DC894 !important' }} />
      ) : (
        <CancelIcon sx={{ fill: 'var(--error-text-color) !important' }} />
      );
    }
    if (showEndIcon) {
      return showEndIcon;
    }
  };

  const checkNumberInputValidation = (event: any) => {
    if (type !== 'number') return;

    const value = event.target.value;

    // Allow empty value first
    if (value === EMPTY_STRING) {
      return (event.target.value = EMPTY_STRING);
    }

    const numericValue = Number(value);

    // Check both minValue and maxValue
    if (maxValue && minValue) {
      return (event.target.value =
        numericValue <= maxValue && numericValue >= minValue
          ? value
          : formik?.values[name]);
    }

    // Check only maxValue
    if (maxValue) {
      return (event.target.value =
        numericValue <= maxValue ? value : formik?.values[name]);
    }

    // Check only minValue
    if (minValue) {
      return (event.target.value =
        numericValue >= minValue ? value : formik?.values[name]);
    }

    // Check maxLength, if provided
    if (maxLength) {
      return (event.target.value = value.slice(0, maxLength));
    }
  };

  const handleOnChange = (event: any) => {
    let value = event.target.value;
    if (amount) {
      return formatCurrency(value);
    }
    return _size(_trim(value)) !== 0 ? value : EMPTY_STRING;
  };

  const textFieldStyles =
    variant === 'standard'
      ? {
          sx: {
            textAlign: 'center',
            '&.MuiInput-root::after': {
              borderBottom: '3px solid var(--primary-button-background-color)',
            },
            '& .MuiInput-input': {
              textAlign: 'center',
            },
          },
          inputProps: {
            sx: {
              textAlign: 'center',
            },
          },
        }
      : {};

  return (
    <Stack sx={{ width: width || '100%' }} maxWidth={maxWidth}>
      <TextFieldWrapper
        {...textFieldStyles}
        {...formik?.getFieldProps(name)}
        className={clsx(
          isPassword && 'password',
          formik?.values[name] && 'fill',
          className ? className : ''
        )}
        type={showPassword ? 'text' : type}
        name={name}
        fontSize={fontSize || (isMobile ? 14 : 16)}
        color={color || 'primary'}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: radius || 6,
            backgroundColor: backgroundColor
              ? backgroundColor
              : 'var(--input-background-color)',
            height: isMobile ? 43 : height || 56,
            minHeight: minHeight,
            // ltop: isMobile ? '-5px' : ltop || 0,
            alignItems: type === 'textarea' ? 'flex-start' : 'center',
          },
        }}
        // lineHeight={isMobile ? '10px' : lineHeight}
        value={value || formik?.values[name] || ''}
        error={showError ? true : false}
        label={
          label && (
            <Box display={'inline-flex'} gap={'2px'}>
              <span>{label}</span>
              {required ? (
                <Typography
                  // fontSize={14}
                  variant='body1'
                  fontWeight={400}
                  color='var(--error-text-color)'
                >
                  *
                </Typography>
              ) : (
                ''
              )}
            </Box>
          )
        }
        // placeholder={t(placeHolder)}
        placeholder={placeHolder && `${placeHolder}${required ? ' *' : ''}`}
        mt={mt}
        variant={variant === 'standard' ? 'standard' : 'outlined'}
        mr={mr}
        disabled={disabled}
        textColor={textColor}
        backgroundColor={backgroundColor}
        width={width}
        ltop={isMobile ? '-6px' : ltop || 0}
        mb={showError ? 2 : mb}
        multiline={multiline}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        maxRows={maxRows}
        slotProps={
          loading
            ? {
                input: {
                  endAdornment: <CircularProgress size={20} color='inherit' />,
                },
              }
            : {}
        }
        rows={rows}
        borderColor={borderColor}
        radius={radius}
        onInput={checkNumberInputValidation}
        onMouseDown={onMouseDown}
        autoComplete='off'
        onChange={(event: any) => {
          formik?.setFieldValue(name, handleOnChange(event));
          onChange && onChange(event.target.value);
        }}
        inputProps={{
          min: minValue,
          max: maxValue,
          step: step,
          maxLength: maxLength,
        }}
        top={top}
        maxLength={maxLength}
        helperText={helperText}
        InputProps={{
          sx: {
            borderRadius: radius || 6,
            backgroundColor: backgroundColor
              ? backgroundColor
              : 'var(--input-background-color)',
            height: isMobile ? 43 : height || 68,
            minHeight: minHeight,
            // ltop: ltop || 0,
            alignItems: type === 'textarea' ? 'flex-start' : 'center',
          },
          startAdornment: showStartIcon && (
            <InputAdornment
              sx={{
                color: 'var(--placeholder-text-color)',
              }}
              position='start'
            >
              {showStartIcon}
            </InputAdornment>
          ),
          endAdornment: endAdornment(),
        }}
      />
      {showError && (
        <Typography
          variant='caption'
          mb={0.5}
          textAlign={'left'}
          color={ErrorColor || 'var(--error-text-color)'}
        >
          {fieldError || formik?.errors[name]}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomInput;
