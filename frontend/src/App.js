import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <>
      <Header />
        <main className="py-3">
          <Container>
            <Outlet/>
          </Container>
        </main>
      <Footer />
    </>
  );
};

export default App;






// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Container } from 'react-bootstrap';
// import { Outlet } from 'react-router-dom';
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// import Header from "./components/Header";
// import Footer from './components/Footer';
// import './index.css';
// //import { logout } from './slices/authSlice';

// const App = () => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       {/* <ToastContainer /> */}
//       <Header />
//       <main className="py-3">
//         <Container>
//           <Outlet />
//         </Container>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default App;

