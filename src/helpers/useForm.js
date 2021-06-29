import React, {useState, useEffect} from "react";
import Validator from "Validator";

const useForm = (initialValues) => {
  const [value, setValue] = useState(initialValues.req);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    const validator = Validator.make(value, initialValues.rules);
    if (validator.fails()) {
      const errors = validator.getErrors();
      setErrors(errors);
    } else {
      setErrors(false);
    }
  }, [value]);
  return [value, (e) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value
      });
  }, errors];
}
export default useForm;