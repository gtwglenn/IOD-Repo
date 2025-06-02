import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from '../pages/AboutPage';
import LoginForm from '../pages/LoginForm';
import DashboardPage from '../pages/DashboardPage';
import PostsPage from '../pages/PostsPage';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginForm />} />

      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />

      <Route path="/dash" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />

      <Route path="/posts" element={
        <ProtectedRoute>
          <PostsPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}