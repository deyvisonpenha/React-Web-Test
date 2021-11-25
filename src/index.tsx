import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import {Quiz} from './pages/Quiz';
import {Score} from './pages/Score';
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="score" element={<Score />} />
      </Routes>
  </BrowserRouter>,
  <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

