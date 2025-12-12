import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home-page';
import SignIn from '@/pages/sign-in';
import SignUp from '@/pages/sign-up';
import PatientDashboard from '@/pages/patient-dashboard';
import DoctorDashboard from '@/pages/doctor-dashboard';
import AdminDashboard from '@/pages/admin-dashboard';
import AdminDashboardLayout from '@/components/layouts/admin-dashboard-layout';
import Patients from '@/components/admin-dashboard/patients';
import Doctors from '@/components/admin-dashboard/doctors';
import Appointments from '@/components/admin-dashboard/appointments';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/admin-dashboard' element={<AdminDashboardLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="patients" element={<Patients />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointments" element={<Appointments />} />
      </Route>
      <Route path='/patient-dashboard' element={<PatientDashboard />} />
      <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
