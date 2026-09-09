import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ================= MAIN ================= */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const Amc = lazy(() => import("./pages/Amc"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));

/* ================= HARDWARE ================= */

const Hardware = lazy(() => import("./pages/Hardware/Hardware"));
const DesktopLaptop = lazy(() => import("./pages/Hardware/DesktopLaptop"));
const Servers = lazy(() => import("./pages/Hardware/Servers"));
const Peripherals = lazy(() => import("./pages/Hardware/Peripherals"));

/* ================= SOFTWARE ================= */

const Software = lazy(() => import("./pages/Software/Software"));
const EnterpriseSoftware = lazy(
  () => import("./pages/Software/EnterpriseSoftware")
);
const BusinessApplications = lazy(
  () => import("./pages/Software/BusinessApplications")
);
const CloudSolutions = lazy(() => import("./pages/Software/CloudSolutions"));

/* ================= SECURITY ================= */

const Security = lazy(() => import("./pages/Security/Security"));
const Surveillance = lazy(() => import("./pages/Security/Surveillance"));
const Cybersecurity = lazy(() => import("./pages/Security/Cybersecurity"));
const AccessControl = lazy(() => import("./pages/Security/AccessControl"));

/* ================= NETWORKING ================= */

const Networking = lazy(() => import("./pages/Networking/Networking"));
const StructuredCabling = lazy(
  () => import("./pages/Networking/StructureCabling")
);
const WirelessNetworks = lazy(
  () => import("./pages/Networking/WirelessNetwork")
);
const NetworkSecurity = lazy(
  () => import("./pages/Networking/NetworkSecurity")
);

/* ================= SCROLL MANAGER ================= */

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/* ================= LOADING FALLBACK ================= */

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-white">
      <div className="h-6 w-6 rounded-full border-2 border-slate-300 border-t-[#f26522] animate-spin" />
    </div>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* ================= MAIN ================= */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/news-events"
            element={<NewsEvents />}
          />

          {/* ================= HARDWARE ================= */}

          <Route
            path="/hardware"
            element={<Hardware />}
          />

          <Route
            path="/hardware/desktop-laptop"
            element={<DesktopLaptop />}
          />

          <Route
            path="/hardware/desktops"
            element={
              <Navigate
                to="/hardware/desktop-laptop"
                replace
              />
            }
          />

          <Route
            path="/hardware/servers"
            element={<Servers />}
          />

          <Route
            path="/hardware/peripherals"
            element={<Peripherals />}
          />

          {/* ================= SOFTWARE ================= */}

          <Route
            path="/software"
            element={<Software />}
          />

          <Route
            path="/software/enterprise"
            element={<EnterpriseSoftware />}
          />

          <Route
            path="/software/business-applications"
            element={<BusinessApplications />}
          />

          <Route
            path="/software/cloud"
            element={<CloudSolutions />}
          />

          {/* ================= SECURITY ================= */}

          <Route
            path="/security"
            element={<Security />}
          />

          <Route
            path="/security/surveillance"
            element={<Surveillance />}
          />

          <Route
            path="/security/cybersecurity"
            element={<Cybersecurity />}
          />

          <Route
            path="/security/access-control"
            element={<AccessControl />}
          />

          {/* ================= NETWORKING ================= */}

          <Route
            path="/networking"
            element={<Networking />}
          />

          <Route
            path="/networking/structured-cabling"
            element={<StructuredCabling />}
          />

          <Route
            path="/networking/wireless"
            element={<WirelessNetworks />}
          />

          <Route
            path="/networking/security"
            element={<NetworkSecurity />}
          />

          {/* ================= AMC ================= */}

          <Route
            path="/amc"
            element={<Amc />}
          />

          <Route
            path="/career"
            element={<Career />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}