import { useDispatch } from 'react-redux';
import { revertUser } from 'store/actions';

export const useLogout = () => {
  const dispatch = useDispatch();

  return async () => {
    dispatch(revertUser());
    return true;
  };
};
