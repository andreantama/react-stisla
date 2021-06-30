
const Button = (props) => {
  const {className, ...others} = props;
  const classValue = props.loading === true ? className+" btn-progress" : className;
  return (
    <input className={classValue} {...others} />
  );
}
export default Button;