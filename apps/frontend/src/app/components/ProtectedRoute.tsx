import React, { ReactNode, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = AuthCheck();
    return () => unsubscribe();
  }, []);

  const AuthCheck = () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate('/home');
      }
    });
  };

  if (loading) return <p>...loading</p>

  return <>{children}</>
};

export default ProtectedRoute;







