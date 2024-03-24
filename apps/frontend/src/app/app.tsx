import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Router from './router';
import './app.module.scss';


// export const UserContext = React.createContext({
//   user: {
//     firstName: null,
//     lastName: null,
//     id: null,
//     joinDate: null,
//     email: null,
//     userType: 'Reader',
//     picture: null,
//     name: null,
//     roles: ['None'],
//   },
//   setUser: (user: any) => { },
// });

export function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;