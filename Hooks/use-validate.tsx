import * as React from 'react';
import { actionType, inputStateType } from '../Component/Types';

const initialInput: inputStateType = { value: '', isTouched: false };

const inputReducer = (state: inputStateType, action: actionType) => {
  switch (action.type) {
    case 'inputValue':
      return { value: action.value, isTouched: state.isTouched };
    case 'blur':
      return { value: state.value, isTouched: action.value };
    default:
      return initialInput;
  }
};
const useValidate = (validationType) => {
  const [inputState, inputStateDispatch] = React.useReducer(
    inputReducer,
    initialInput
  );

  const inputIsValid = validationType(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;
  const valueChangeHandler = (event) => {
    inputStateDispatch({ type: 'inputValue', value: event.target.value });
  };
  const inputBlurHandler = () => {
    inputStateDispatch({ type: 'blur', value: true });
  };

  const resetInput = () => {
    inputStateDispatch({ type: 'reset', value: false });
  };
  return {
    inputValue: inputState.value,
    inputIsTouched: inputState.isTouched,
    inputIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useValidate;
