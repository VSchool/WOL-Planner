/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { UserContext } from '../../app';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { createUserData } from '../../api-client/apiModules/users';
import { AuthLayout } from '../../components/authlayout/AuthLayout';
import { NavLink } from 'react-router-dom';

export const Login = () => {
    const [ signIn, setSignIn ] = React.useState<any>([]);
    const {user, setUser} = React.useContext(UserContext);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setSignIn(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            const signInUser = async () => {
                if (signIn) {
                    axios
                        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${signIn.access_token}`, {
                            headers: {
                                Authorization: `Bearer ${signIn.access_token}`,
                                Accept: 'application/json'
                            }
                        })
                        .then(async (res) => {
                            const userData = await createUserData({name: res.data.name, email: res.data.email, picture: res.data.picture});
                            setUser(userData);
                            localStorage.setItem('user', JSON.stringify(userData));
                        })
                        .catch((err) => console.log(err));
                }
            }
            signInUser();
        },
        [ signIn ]
    );
    return (
      <AuthLayout className="h-screen">
        <div className="flex flex-col">
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Sed ut perspiciatis unde{' '}
              <NavLink
                to="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                natus error
              </NavLink>{' '}
              sit voluptatem accusantium.
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-y-8">
          <div>
            <button
              type="submit"
              onClick={() => login()}
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
            >
              <span>
                Sign in with Google <span aria-hidden="true">&rarr;</span>
              </span>
            </button>
          </div>
        </div>
      </AuthLayout>
    );
}