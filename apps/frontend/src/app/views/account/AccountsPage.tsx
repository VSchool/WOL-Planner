import React, { useEffect, useState } from 'react';
// import { UserContext } from '../../app';
import { isFormValid } from '../../shared/validation';
import { initYourAccountValidationState } from './validation';
import { allFilesForUser, downloadStorageDocument, updateUserData, uploadStorageDocument } from '../../api-client/apiModules/users';
import { Login } from '../login/Login';

export default function AccountPage() {
    return (
        <>
          <div className="px-1 sm:px-4 lg:px-8 h-screen">
            <p>Account page</p>
          </div>
        </>
      );
}