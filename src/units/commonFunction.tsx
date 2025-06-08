export const convertPxToRem = (px: any) => {
  return px / 16;
};
export const formatNumber = (amount: string) => {
  return amount.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const formatCurrency = (amount: string) => {
  let inputValue = String(amount);
  if (inputValue.indexOf('.') >= 0) {
    let decimalPos = inputValue.indexOf('.');
    let leftSide = inputValue.substring(0, decimalPos);
    let rightSide = inputValue.substring(decimalPos);
    leftSide = formatNumber(leftSide);
    rightSide = formatNumber(rightSide);
    rightSide = rightSide.substring(0, 2);
    inputValue = leftSide + '.' + rightSide;
  } else {
    inputValue = formatNumber(inputValue);
    inputValue = inputValue;
  }
  return inputValue;
};
