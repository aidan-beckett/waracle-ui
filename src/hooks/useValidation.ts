import { useState } from 'react';

export type Rules = {
  [key: string]: ((value: any) => string | false)[];
};

type State = {
  [key: string]: any;
};

export type Errors = {
  [key: string]: string;
};

export default function useValidation(
  rules: Rules,
  state: State
): [Errors, boolean, () => void] {
  const [errors, updateErrors] = useState<Errors>({});
  const [hasErrors, updateHasErrors] = useState(false);

  const newErrors = { ...errors };
  let newHasErrors = false;

  function validate() {
    for (let rule in rules) {
      if (state[rule] === undefined) continue;

      for (let validator of rules[rule]) {
        let result = validator(state[rule]);
        if (result) {
          newErrors[rule] = result;
          newHasErrors = true;
        } else {
          newErrors[rule] = '';
        }
      }
    }

    updateErrors(newErrors);
    updateHasErrors(newHasErrors);
  }

  return [errors, hasErrors, validate];
}
