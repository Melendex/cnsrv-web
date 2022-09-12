import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './componets/Header';
import reportWebVitals from './reportWebVitals';
import History from './componets/History';
import Target from './componets/Target';
import Target2 from './componets/Target2';
import Footer from './componets/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header Title='Home' />
      <Target />
      <Target2 />
      <History />
    <Footer />
    
  </React.StrictMode>
);

reportWebVitals();
