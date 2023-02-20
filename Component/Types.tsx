export type enteredValueType = {
  name: string;
  email: string;
};

export type isValidType = {
  name: boolean;
  email: boolean;
};

export type inputStateType = {
  value: string;
  isTouched: boolean;
};

export type actionType = {
  type: string;
  value: any;
};
