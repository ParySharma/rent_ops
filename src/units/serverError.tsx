// Libraries
import { VariantType, useSnackbar } from 'notistack';

export const useErrorToast = (variant: VariantType) => {
  const { enqueueSnackbar } = useSnackbar();
  const showSnackBar = (error: any) => {
    enqueueSnackbar(error, { variant }); // Fix: variant should be inside the second argument
  };
  return showSnackBar;
};

export const useServerToast = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showSnackBar = (error: any) => {
    enqueueSnackbar(
      error?.message ||
        error?.error_code ||
        'Oops! Something went wrong on our end. Please try again later or contact support if the issue persists.',
      { variant: 'error' }
    );
  };
  return showSnackBar;
};
