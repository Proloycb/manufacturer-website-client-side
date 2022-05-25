import Navbar from './pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Home/Purchase';
import Footer from './pages/Shared/Footer/Footer';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment';
import ManageOrders from './pages/Dashboard/ManageOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageProduct from './pages/Dashboard/ManageProduct';
import RequireAdmin from './pages/Login/RequireAdmin';
import useAdmin from './hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
        {!admin ?<Route index element={<MyOrders />} /> : <Route index element={<MyProfile />} />}
          <Route path='review' element={<AddReview />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='manageOrder' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
          <Route path='product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
