import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AccountPage } from '../account/AccountsPage';
import { BlogsPage } from '../blogs/BlogsPage';
import { Home } from '../home/home';
import {About} from '../about/about';
import {Login} from '../login/Login';
import IndividualBlogPage from '../blogs/IndividualBlogPage';
import AdminPage from '../admin/AdminPage';
import { ForgotPassword } from '../forgotPassword/ForgotPassword';
import {SignUp} from "../signup/SignUp"
import { Dashboard } from '../dashboard/Dashboard';
import { Assets } from "../assets/Assets"
import { AssetsInput } from '../assets/AssetsInput';

import ProtectedRoute from '../../components/ProtectedRoute'
export default function Router() {

    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="*" element={<ProtectedRoute><Navigate to="/" /></ProtectedRoute>} />
        <Route path="/forgotpassword" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
        <Route path="/signup" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
        <Route path="/assets/input" element={<ProtectedRoute><AssetsInput /></ProtectedRoute>} />
        {/* <Route path="/assets/update" element={<UpdateAssets />} /> */}
      </Routes>
    );
}