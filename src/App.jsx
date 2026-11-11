import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/Layout.jsx";
import Home from "./pages/m2-browse/Home.jsx";
import BrowseListings from "./pages/m2-browse/BrowseListings.jsx";
import ListingDetails from "./pages/m2-browse/ListingDetails.jsx";
import Login from "./pages/m1-auth/Login.jsx";
import SignUp from "./pages/m1-auth/SignUp.jsx";
import CheckEmail from "./pages/m1-auth/CheckEmail.jsx";
import ActivateAccount from "./pages/m1-auth/ActivateAccount.jsx";
import ForgotPassword from "./pages/m1-auth/ForgotPassword.jsx";
import VerifyStudent from "./pages/m1-auth/VerifyStudent.jsx";
import Profile from "./pages/m1-auth/Profile.jsx";
import MyRequests from "./pages/m1-auth/MyRequests.jsx";
import OrganizationDashboard from "./pages/m1-auth/OrganizationDashboard.jsx";
import MyListings from "./pages/m3-listings/MyListings.jsx";
import CreateListing from "./pages/m3-listings/CreateListing.jsx";
import EditListing from "./pages/m3-listings/EditListing.jsx";
import SellerListingDetails from "./pages/m3-listings/SellerListingDetails.jsx";
import RequestForm from "./pages/m4-requests/RequestForm.jsx";
import SellerRequests from "./pages/m4-requests/SellerRequests.jsx";
import SellerRequestDetails from "./pages/m4-requests/SellerRequestDetails.jsx";
import AdminLogin from "./pages/m5-admin/AdminLogin.jsx";
import AdminDashboard from "./pages/m5-admin/AdminDashboard.jsx";
import UserManagement from "./pages/m5-admin/UserManagement.jsx";
import UserDetails from "./pages/m5-admin/UserDetails.jsx";
import CategoryManagement from "./pages/m5-admin/CategoryManagement.jsx";
import AdminListings from "./pages/m2-browse/AdminListings.jsx";
import AdminListingDetails from "./pages/m2-browse/AdminListingDetails.jsx";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseListings />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/activate/:userId" element={<ActivateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-student" element={<VerifyStudent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/dashboard" element={<OrganizationDashboard />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/listings/new" element={<CreateListing />} />
        <Route path="/listings/:id/edit" element={<EditListing />} />
        <Route path="/seller/listings/:id" element={<SellerListingDetails />} />
        <Route path="/listings/:id/purchase" element={<RequestForm />} />
        <Route path="/listings/:id/donate" element={<RequestForm />} />
        <Route path="/seller/requests" element={<SellerRequests />} />
        <Route path="/seller/requests/:id" element={<SellerRequestDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/users/:id" element={<UserDetails />} />
        <Route path="/admin/categories" element={<CategoryManagement />} />
        <Route path="/admin/listings" element={<AdminListings />} />
        <Route path="/admin/listings/:id" element={<AdminListingDetails />} />
        <Route path="*" element={<section className="page"><h1>Page not found</h1></section>} />
      </Routes>
    </AppLayout>
  );
}
