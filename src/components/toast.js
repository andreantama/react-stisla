import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {toastActions} from '../store/toast';
import Izitoast from "izitoast";

const Toast = () => {
  const dispatch = useDispatch();
  const toastState = useSelector((state) => state.toastData);

  useEffect(() => {
    console.log(toastState);
    const tempData = toastState;
    
    if(toastState.success !== false) {
      Izitoast.success({
        title: tempData.success.payload.title,
        message: tempData.success.payload.msg,
        position: 'topRight'
      });
    }
    if(toastState.error !== false) {
      Izitoast.error({
        title: tempData.error.payload.title,
        message: tempData.error.payload.msg,
        position: 'topRight'
      });
    }
    if(toastState.info !== false) {
      Izitoast.info({
        title: tempData.info.payload.title,
        message: tempData.info.payload.msg,
        position: 'topRight'
      });
    }
    if(toastState.warning !== false) {
      Izitoast.warning({
        title: tempData.warning.payload.title,
        message: tempData.warning.payload.msg,
        position: 'topRight'
      });
    }
    return () => {
      return dispatch(toastActions.resetNotif());
    }
  }, [toastState]);
  return (
    <>
    </>
  );

}
export default Toast;