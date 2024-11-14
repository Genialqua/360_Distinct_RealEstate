import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store';

// Importing components for the routes
import ContactPage from './screens/contactUs';
import CompletedProjects from './screens/completedProjects';
import AlexAndBillEstate from './screens/alex_bill';
import RealEstateInfo from './screens/aboutUs';
import Apartments from './screens/ab_details';
import OngoingProjects from './screens/ongoingProjects';
import HomePage from './screens/HomePage';
import BlogPage from './screens/BlogPage'; // Add BlogPage import
import BlogDetail from './screens/BlogDetail'; // Add BlogDetail import

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="contactUs" element={<ContactPage />} />
        <Route path="completedProjects" element={<CompletedProjects />} />
        <Route path="alex-and-bill-estate" element={<AlexAndBillEstate />} />
        <Route path="aboutUs" element={<RealEstateInfo />} />
        <Route path="AlexandBillApartments" element={<Apartments />} />
        <Route path="ongoingProjects" element={<OngoingProjects />} />
        <Route path="blog" element={<BlogPage />} /> {/* Blog page route */}
        <Route path="blog/:id" element={<BlogDetail />} /> {/* Blog detail route */}
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();