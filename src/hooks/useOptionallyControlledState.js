import {useState} from 'react';

/**
 * Enables a component state to be either controlled or uncontrolled.
 * @param {Object} opts
 * @param {*} [opts.initialValue]
 * @param {*} [opts.controlledValue]
 * @param {Function} [opts.onChange]
 * @return {Array} `[value, setValue]`
 */
export default function useOptionallyControlledState({
  controlledValue,
  initialValue,
  onChange
}) {
  const isControlled = controlledValue !== undefined;
  const [stateValue, setStateValue] = useState(initialValue);

  if (isControlled && !onChange) {
    throw new Error(
      'When `controlledValue` is provided as a prop, the `onChange` callback should be implemented as well.'
    );
  }

  if (isControlled) {
    return [controlledValue, onChange];
  } else {
    return [
      stateValue,
      (value) => {
        setStateValue(value);
        if (onChange) onChange(value);
      }
    ];
  }
}
