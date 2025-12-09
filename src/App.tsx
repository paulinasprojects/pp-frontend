import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home-page';
import SignIn from '@/pages/sign-in';
import SignUp from '@/pages/sign-up';
import PatientDashboard from '@/pages/patient-dashboard';
import DoctorDashboard from '@/pages/doctor-dashboard';
import AdminDashboard from '@/pages/admin-dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />
      <Route path='/patient-dashboard' element={<PatientDashboard />} />
      <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
