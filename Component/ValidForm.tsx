import * as React from 'react';
import { enteredValueType, isValidType } from '../Component/Types';

const ValidForm = () => {
  let formIsValid = false;
  const [enteredValue, setEnteredValue] = React.useState<enteredValueType>({
    name: '',
    email: '',
  });
  const [touchedValue, setTouchedValue] = React.useState<isValidType>({
    name: false,
    email: false,
  });

  const inputIsValid: isValidType = {
    name: enteredValue.name !== '',
    email: enteredValue.email !== '',
  };

  formIsValid = inputIsValid.name && inputIsValid.email;

  const nameChangeHandler = (event) => {
    setEnteredValue({ ...enteredValue, name: event.target.value });
    setTouchedValue({ ...touchedValue, name: true });
  };
  const nameBlurHandler = () => {
    setTouchedValue({ ...touchedValue, name: true });
  };

  const emailChangeHandler = (event) => {
    setEnteredValue({ ...enteredValue, email: event.target.value });
    setTouchedValue({ ...touchedValue, email: true });
  };
  const emailBlurHandler = () => {
    setTouchedValue({ ...touchedValue, email: true });
  };

  const submitFormHandler = () => {
    setEnteredValue({ name: '', email: '' });
    setTouchedValue({ name: false, email: false });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          className={!inputIsValid.name && touchedValue.name ? 'invalid' : ''}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      <div className="valid-error">
        {!inputIsValid.name && <label>name is invalid!</label>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          onChange={emailChangeHandler}
          className={!inputIsValid.email && touchedValue.email ? 'invalid' : ''}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="valid-error">
        {!inputIsValid.email && <label>email is invalid!</label>}
      </div>
      <div>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default ValidForm;
