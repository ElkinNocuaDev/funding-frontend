import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";

function App() {

  return (

    <BrowserRouter>

      <div className="bg-launchpad min-h-screen">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout/>
              </AdminRoute>
            }
          >
            
              <Route index element={<AdminDashboard/>}/>
          
          </Route>

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;