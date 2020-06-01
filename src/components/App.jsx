import React from 'react';
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
