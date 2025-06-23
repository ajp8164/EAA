import { useLogin } from 'lib/useLogin';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/selectors/userSelectors';

export const useRefreshToken = () => {
  const user = useSelector(selectUser);
  const login = useLogin();

  return async () => {
    // Silently login the user to get new tokens.
    if (user.profile && user.credentials) {
      login(user.profile.username, user.credentials.password);
    }
  };
};
