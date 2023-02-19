import * as React from 'react';

const useValidate = (validationType) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [inputIsTouched, setInputIsTouched] = React.useState<boolean>(false);
  const inputIsValid = validationType(inputValue);
  const hasError = !inputIsValid && inputIsTouched;
  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const resetInput = () => {
    setInputValue('');
    setInputIsTouched(false);
  };
  return {
    inputValue,
    inputIsTouched,
    inputIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useValidate;
