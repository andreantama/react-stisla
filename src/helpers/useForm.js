import React, {useState, useEffect} from "react";
import Validator from "Validator";

const useForm = (initialValues) => {
  const [value, setValue] = useState(initialValues.req);
  const [errors, setErrors] = useState(false);
  const validator = Validator.make(value, initialValues.rules);
  return [
      value, 
      (e) => {
        setValue({
          ...value,
          [e.target.name]: e.target.value
        });
      }, 
      () => {
        if(validator.fails()) {
          const errors = validator.getErrors();
          setErrors(errors);
          return true;
        } else {
          setErrors(false);
          return false;
        }
      },
      errors,
    ];
}
export default useForm;