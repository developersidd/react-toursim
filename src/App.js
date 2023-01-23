import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AdminPrivate from "./components/AdminPrivate/AdminPrivate";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/Private/PrivateRoute';
import Signup from './components/Signup/Signup';
import FirebaseMongodbProvider from './Context/FirebaseMongodbProvider';
import About from './Pages/About';
import AddATour from './Pages/AddATour';
import Home from './Pages/Home';
import ManageAllOrders from './Pages/ManageAllOrders';
import MyOrders from './Pages/MyOrders';
import TourDetails from './Pages/TourDetails';
import Tours from './Pages/Tours';
function App() {
  
  return (
    <div>
      <FirebaseMongodbProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour" element={<Tours />} />

            {/*  Private Route Starts */}
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="my_orders" element={<MyOrders />} />
              <Route path="tour_details/:id" element={<TourDetails />} />
            </Route>
            {/*  Private Route Ends */}
            
            {/* Admin Routes Starts  */}
            <Route path="/*" element={<AdminPrivate />}>
              <Route path="add_a_tour" element={<AddATour />} />
              <Route path="manage_all_orders" element={<ManageAllOrders />} />
              <Route path="make_admin" element={<MakeAdmin />} />
            </Route>
            {/* Admin Routes Ends  */}

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
          <Footer />
        </Router>
      </FirebaseMongodbProvider>
    </div>
  );
}

export default App;