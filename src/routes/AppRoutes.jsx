import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Login
from '../pages/auth/Login';

import Register
from '../pages/auth/Register';

import Dashboard
from '../pages/dashboard/Dashboard';

import FarmerDashboard
from '../pages/dashboard/FarmerDashboard';

import ApplySeller
from '../pages/seller/ApplySeller';

import SellerApplications
from '../pages/admin/SellerApplications';

import ProtectedRoute
from './ProtectedRoute';
import FarmApprovals
from '../pages/admin/FarmApprovals';

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={
            <Navigate to='/login' />
          }
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/farmer/dashboard'
          element={
            <ProtectedRoute>
              <FarmerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/seller/apply'
          element={
            <ProtectedRoute>
              <ApplySeller />
            </ProtectedRoute>
          }
        />

        <Route
          path='/admin/seller-applications'
          element={
            <ProtectedRoute>
              <SellerApplications />
            </ProtectedRoute>
          }
        />
        <Route
  path='/admin/farm-approvals'
  element={
    <ProtectedRoute>
      <FarmApprovals />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;