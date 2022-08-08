import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import HeaderNav from 'components/HeaderNav';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import Loader from 'components/Loader';
import { authOperations, authSelectors } from 'redux/auth';

const LoginView = lazy(() => import('pages/LoginView'));
const RegisterView = lazy(() => import('pages/RegisterView'));
const PhoneBookView = lazy(() => import('pages/PhoneBookView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <HeaderNav />
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute exact path="/" redirectTo="/phonebook" restricted>
                <LoginView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/registration"
                redirectTo="/phonebook"
                restricted
              >
                <RegisterView />
              </PublicRoute>
              <PrivateRoute exact path="/phonebook" redirectTo="/" restricted>
                <PhoneBookView />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
