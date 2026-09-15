import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "./pages/Home.jsx";
import Index from "./pages/Index.jsx";
import DoctorLogin from "./pages/DoctorLogin.jsx";
import Registration from "./pages/Registration.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
import UserHome from "./pages/UserHome.jsx";
import DoctorHome from "./pages/DoctorHome.jsx";
import MedicalRecords from "./pages/MedicalRecords.jsx";
import CreateMedicalRecord from "./pages/CreateMedicalRecord.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* User */}
            <Route path="/user-login" element={<Index />} />

            <Route
              path="/register/user"
              element={<Registration role="user" />}
            />

            <Route
              path="/user-profile"
              element={<UserProfile />}
            />

            <Route
              path="/user-home"
              element={<UserHome />}
            />

            {/* Doctor */}
            <Route
              path="/doctor-login"
              element={<DoctorLogin />}
            />

            <Route
              path="/register/doctor"
              element={<Registration role="doctor" />}
            />

            <Route
              path="/doctor-profile"
              element={<DoctorProfile />}
            />

            <Route
              path="/doctor-home"
              element={<DoctorHome />}
            />

            {/* Medical Records */}
            <Route
              path="/medical-records"
              element={<MedicalRecords />}
            />

            <Route
              path="/medical-records/new"
              element={<CreateMedicalRecord />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;