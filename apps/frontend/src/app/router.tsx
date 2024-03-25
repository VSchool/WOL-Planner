import { Route, Routes, Navigate } from 'react-router-dom';
import { AccountPage } from './views/account/AccountsPage';
import { Home } from './views/home/home';
import { About } from './views/about/about';
import { Login } from './views/login/Login';
import { ForgotPassword } from './views/forgotPassword/ForgotPassword';
import { SignUp } from "./views/signup/SignUp"
import { Dashboard } from './views/dashboard/Dashboard';
import { Assets } from "./views/assets/Assets"
import { AssetsInput } from './views/assets/AssetsInput';
import ProtectedRoute from './components/ProtectedRoute'
import AdminPage from './views/admin/AdminPage';

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
      <Route path="/forgotpassword" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
      <Route path="/signup" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
      <Route path="/assets/input" element={<ProtectedRoute><AssetsInput /></ProtectedRoute>} />
    </Routes>
  );
}