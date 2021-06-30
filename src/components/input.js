const Input = (props) => {
  const {label, className, errors, ...others} = props;
  const classValue = errors ? className+' is-invalid' : className;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={classValue}
        {...others}
      />
      {errors ? (
        <div className="invalid-feedback">{errors}</div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Input;
