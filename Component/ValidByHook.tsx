import * as React from 'react';
import useValid from '../Hooks/use-validate';

const ValidByHook = () => {
  const emptyValidation = (inputValue) => inputValue !== '';
  const emailValidation = (inputValue) =>
    inputValue !== '' && inputValue.includes('@');

  const {
    inputValue: nameValue,
    inputIsTouched: nameIsTouched,
    inputIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useValid(emptyValidation);

  const {
    inputValue: lastnameValue,
    inputIsTouched: lastnameIsTouched,
    inputIsValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    resetInput: resetLastname,
  } = useValid(emptyValidation);

  const {
    inputValue: emailValue,
    inputIsTouched: emailIsTouched,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useValid(emailValidation);

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

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
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
          value={nameValue}
          className={nameHasError ? 'invalid' : ''}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameHasError && <label className="error-message">Name is empty</label>}
      </div>
      <div>
        <label>Lastname:</label>
        <input
          type="text"
          value={lastnameValue}
          className={lastnameHasError ? 'invalid' : ''}
          onChange={lastnameInputChangeHandler}
          onBlur={lastnameInputBlurHandler}
        />
        {lastnameHasError && (
          <label className="error-message">LastName is empty</label>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={emailValue}
          className={emailHasError ? 'invalid' : ''}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && (
          <label className="error-message">Email is invalid</label>
        )}
      </div>
      <div>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default ValidByHook;
