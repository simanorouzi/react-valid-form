import * as React from 'react';
import useValid from '../Hooks/use-validate';

const ValidByHook = () => {
  const {
    inputValue: nameValue,
    inputIsTouched: nameIsTouched,
    inputIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useValid((inputValue) => inputValue !== '');

  const {
    inputValue: lastnameValue,
    inputIsTouched: lastnameIsTouched,
    inputIsValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    resetInput: resetLastname,
  } = useValid((inputValue) => inputValue !== '');

  const {
    inputValue: emailValue,
    inputIsTouched: emailIsTouched,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useValid((inputValue) => inputValue !== '' && inputValue.includes('@'));

  const formIsValid = nameIsValid && lastnameIsValid && emailIsValid;

  const nameInputChangeHandler = (event) => {
    nameChangeHandler(event);
  };

  const nameInputBlurHandler = () => {
    nameBlurHandler();
  };

  const lastnameInputChangeHandler = (event) => {
    lastnameChangeHandler(event);
  };

  const lastnameInputBlurHandler = () => {
    lastnameBlurHandler();
  };

  const emailInputChangeHandler = (event) => {
    emailChangeHandler(event);
  };

  const emailInputBlurHandler = () => {
    emailBlurHandler();
  };

  const formSubmitHandler = () => {
    resetName();
    resetLastname();
    resetEmail();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          className={nameHasError ? 'invalid' : ''}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      <div>
        <label>Lastname:</label>
        <input
          type="text"
          className={lastnameHasError ? 'invalid' : ''}
          onChange={lastnameInputChangeHandler}
          onBlur={lastnameInputBlurHandler}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          className={emailHasError ? 'invalid' : ''}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && <label>Email is invalid</label>}
      </div>
      <div>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default ValidByHook;
