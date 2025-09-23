import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// The Guard
import ProtectedRoute from './ProtectedRoute.jsx';

// Layouts
import DevoteeLayout from '../layouts/DevoteeLayout.jsx';
import AdminLayout from '../layouts/AdminLayout.jsx';
import VolunteerLayout from '../layouts/VolunteerLayout.jsx';

// Import ALL your page components
import HomePage from '../pages/common/HomePage.jsx';
import LoginPage from '../pages/common/LoginPage.jsx';
import TempleTimingsPage from '../pages/common/TempleTimingsPage.jsx';
import ContactUsPage from '../pages/common/ContactUsPage.jsx';
import DevoteeDashboard from '../pages/devotee/DevoteeDashboard.jsx';
import DarshanBookingPage from '../pages/devotee/DarshanBookingPage.jsx';
import RoomBookingPage from '../pages/devotee/RoomBookingPage.jsx';
import DonationsPage from '../pages/devotee/DonationsPage.jsx';
import ComplaintSystemPage from '../pages/devotee/ComplaintSystemPage.jsx';
import VolunteerDashboard from '../pages/volunteer/VolunteerDashboard.jsx';
import CrowdManagementView from '../pages/volunteer/CrowdManagementView.jsx';
import EmergencyControlPanel from '../pages/volunteer/EmergencyControlPanel.jsx';
import MissingPersonsPage from '../pages/volunteer/MissingPersonsPage.jsx';
import LostAndFoundPage from '../pages/volunteer/LostAndFoundPage.jsx';
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import CrowdAnalyticsPage from '../pages/admin/CrowdAnalyticsPage.jsx';
import CrowdPredictionPage from '../pages/admin/CrowdPredictionPage.jsx';
import ManageMissingPersonsPage from '../pages/admin/ManageMissingPersonsPage.jsx';
import ManageLostAndFoundPage from '../pages/admin/ManageLostAndFoundPage.jsx';
import ComplaintManagementPage from '../pages/admin/ComplaintManagementPage.jsx';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route element={<DevoteeLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/timings" element={<TempleTimingsPage />} />
                    <Route path="/contact" element={<ContactUsPage />} />
                    <Route path="/dashboard" element={<DevoteeDashboard />} />
                    <Route path="/darshan-booking" element={<DarshanBookingPage />} />
                    <Route path="/room-booking" element={<RoomBookingPage />} />
                    <Route path="/donations" element={<DonationsPage />} />
                    <Route path="/complaints" element={<ComplaintSystemPage />} />
                </Route>

                {/* Protected Volunteer Routes */}
                <Route element={<ProtectedRoute requiredRole="volunteer" />}>
                    <Route path="/volunteer" element={<VolunteerLayout />}>
                        <Route index element={<VolunteerDashboard />} />
                        <Route path="crowd-management" element={<CrowdManagementView />} />
                        <Route path="emergency" element={<EmergencyControlPanel />} />
                        <Route path="missing-persons" element={<MissingPersonsPage />} />
                        <Route path="lost-found" element={<LostAndFoundPage />} />
                    </Route>
                </Route>

                {/* Protected Admin Routes */}
                <Route element={<ProtectedRoute requiredRole="admin" />}>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="analytics" element={<CrowdAnalyticsPage />} />
                        <Route path="predictions" element={<CrowdPredictionPage />} />
                        <Route path="manage-missing" element={<ManageMissingPersonsPage />} />
                        <Route path="manage-lost-found" element={<ManageLostAndFoundPage />} />
                        <Route path="manage-complaints" element={<ComplaintManagementPage />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;