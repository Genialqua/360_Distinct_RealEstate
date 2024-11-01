import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/styles/bootstrap.custom.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux'; // Added import for Redux Provider
import store from './store'; // Ensure store is imported

// Importing components for the routes
import ContactPage from './screens/contactUs';
import CompletedProjects from './screens/completedProjects';
import AlexAndBillEstate from './screens/alex_bill';
import RealEstateInfo from './screens/aboutUs';
import Apartments from './screens/ab_details';
import OngoingProjects from './screens/ongoingProjects'; // Corrected component name
import HomePage from './screens/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} /> {/* This sets HomePage as the default route */}
        <Route path="contactUs" element={<ContactPage />} /> {/* Changed to relative path */}
        <Route path="completedProjects" element={<CompletedProjects />} /> {/* Changed to relative path */}
        <Route path="alex-and-bill-estate" element={<AlexAndBillEstate />} /> {/* Changed to relative path */}
        <Route path="aboutUs" element={<RealEstateInfo />} /> {/* Changed to relative path */}
        <Route path="AlexandBillApartments" element={<Apartments />} /> {/* Changed to relative path */}
        <Route path="ongoingProjects" element={<OngoingProjects />} /> {/* Changed to relative path */}
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}> {/* Wrapped RouterProvider with Provider */}
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();