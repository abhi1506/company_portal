import "./App.css";
import About from "./pages/about/about";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import FooterComponent from "./pages/footer/footerComponent";
import Header from "./pages/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Platform from "./pages/platform/platform";
import Contact from "./pages/contacts/contact";
import Career from "./pages/career/career";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./pages/home/whatsppIcon";
import TermsAndPrivacyPage from "./pages/termsPrivacy/termsAndPrivacyPage";
import { ThemeProviders } from "./pages/Theme/themeProvider";
import "./pages/Theme/theme.css";
import { createContext, useState, useEffect } from "react";

import Dashboard from "./layouts/dashboard";
import Team from "./pages/Admin/team";
import ProfileView from "./pages/Admin/profileview";
import ResetPassword from "./pages/Admin/resetPassword";
import Geography from "./components/geography";
import Line from "./components/line";
import Bar from "./components/bar";
import Pie from "./components/pie";
import Form from "./pages/Admin/form";
import ContactInformation from "./pages/Admin/contact";
import Invoice from "./pages/Admin/inovice";
import CalendarComponent from "./layouts/calendar/calender";
import Faq from "./pages/Admin/faqAdmin/faqAdmin";
import AdminLayout from "./layouts/adminLayout";
import NotFound from "./layouts/notFound";
import JobForm from "./pages/Admin/jobForm";
import JobManagement from "./pages/Admin/job/jobManagement";
import FeedbackInformation from "./pages/Admin/feedbackInformatio";
import TeamForm from "./pages/Admin/teamForm";
import EmployeeDataGrid from "./pages/Admin/employeeTable";
import EmployeeForm from "./pages/Admin/employeeForm";
import EmployeeInvoiceForm from "./pages/Admin/invoiceForm";
import HomeUpdated from "./pages/home/homeUpdated";
import ServicePage from "./pages/service/servicePage";
import ChangePassword from "./pages/Admin/changePassword";
import { useSelector } from "react-redux";
import MobileAppDevelopmentPage from "./components/mobileapp/mobileApp";
import ResponsiveWebDesign from "./components/responsiveWeb/responsiveWebDesign";
import CloudServices from "./components/cloudService/cloudServices";
import CustomSoftwareDevelopment from "./components/customSoftwareDevelopment/customSoftwareDevelopment";
import AiMl from "./components/dataAnalytics/aiMl";
import DataAnalytics from "./components/dataAnalytics/dataAnalytics";
import EnterpriseSolutions from "./components/enterpriseSolutions/enterpriseSolutions";
import DevOpsSolutions from "./components/cloudService/devOpsSolutions";
import DigitalMarketingService from "./components/digitalMarketingService/digitalMarketingService";
import ContentWriting from './components/digitalMarketingService/contentWritingService'
import CareerTable from "./pages/Admin/careerTable";
import CreateWebsite from "./components/createWebsite/createWebsite";
import IphoneComponent from "./components/iPhoneApp/iPhoneApp";
import AndroidDevelopment from "./components/androidApp/androidDevelopment";
import ContentWritingService from "./components/contentWriting/contentWritingService";
import SearchEngine from "./components/searchEngine/searchEngine";
import CloudMigration from "./components/cloudMigration/cloudMigration";
import BusinessSolutionsPage from "./components/businessSolution/businessSolution";
import CloudSolutionsPage from "./components/cloudService/cloudSolution";
import MobileAppDevelopment from "./components/mobileapps/mobileApp";
import ProductSpreads from "./components/spreads/productSpreads";
import HybridApp from "./components/hybridApp/hybridApp";
import WebDevelopment from "./components/webDevelopment/webDevelopment";
import RequestForQuotation from "./pages/Admin/quotationTable";
import BusinessLanding from "./components/business/business";
import CRMComponent from "./components/business/crmComponent";
import ERPComponent from "./components/business/erpComponent";

export const MyContext = createContext();

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/invoice-form" element={<EmployeeInvoiceForm />} />
    <Route path="/team" element={<Team />} />
    <Route path="/career-view" element={<CareerTable />} />
    <Route path="/contacts" element={<ContactInformation />} />
    <Route path="/invoices" element={<Invoice />} />
    <Route path="/form" element={<Form />} />
    <Route path="/emp-view" element={<EmployeeDataGrid />} />
    <Route path="/quot-view" element={<RequestForQuotation />} />
    <Route path="/emp-form" element={<EmployeeForm />} />
    <Route path="/team-form" element={<TeamForm />} />
    <Route path="/job-view" element={<JobManagement />} />
    <Route path="/feedback-view" element={<FeedbackInformation />} />
    <Route path="/job-form" element={<JobForm />} />
    <Route path="/calendar" element={<CalendarComponent />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/line" element={<Line />} />
    <Route path="/geography" element={<Geography />} />
    <Route path="/profile" element={<ProfileView />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const PublicRoutes = () => (
  <Routes>
    {/* Home and Static Pages */}
    <Route path="/" element={<HomeUpdated />} />
    <Route path="/aboutus" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/career" element={<Career />} />
    <Route path="/product" element={<ProductSpreads />} />
    <Route path="/platform" element={<Platform />} />
    <Route path="/termsandprivacy" element={<TermsAndPrivacyPage />} />

    {/* Services Routes */}
    <Route path="/services-2" element={<BusinessSolutionsPage />} />
    <Route path="/services/website-app-development" element={<CreateWebsite />} />
    <Route path="/services/website-solution" element={<WebDevelopment/>} />
    <Route path="/services/ios-app-development" element={<IphoneComponent />} />
    <Route path="/services/web-designe-solution" element={<ResponsiveWebDesign />} />
    <Route path="/services/mobile-solution" element={<MobileAppDevelopment />} />
    <Route path="/services/android-app-development" element={<AndroidDevelopment />} />
    <Route path="/services/hybrid-app-development" element={<HybridApp />} />
    <Route path="/services/software-development-services" element={<CustomSoftwareDevelopment />} />
    <Route path="/services/content-management-system" element={<ContentWritingService />} />
    <Route path="/services/seo-service" element={<SearchEngine />} />
    <Route path="/services/business-solution" element={< BusinessLanding/>} />
    <Route path="/services/cloud-solution-and-data-migration" element={<CloudMigration />} />
    <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
    <Route path="/services/web-designing-solution" element={<ResponsiveWebDesign />} />
    <Route path="/services/website-development" element={<WebDevelopment />} />
    <Route path="/services/cloud-solution" element={<CloudSolutionsPage />} />
    <Route path="/services/digital-marketing-services" element={<DigitalMarketingService />} />
    <Route path="/services/content-writing-service" element={<ContentWriting />} />
    <Route path="/services/responsive-web-designing" element={<ResponsiveWebDesign />} />
    <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
    <Route path="/services/crm-business-solution" element={<CRMComponent />} />
    <Route path="/services/erp-business-solution" element={<ERPComponent />} />

    {/* Solutions and Advanced Features */}
    <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
    <Route path="/cloud-services" element={<CloudServices />} />
    <Route path="/data-analytics" element={<DataAnalytics />} />
    <Route path="/ai-ml" element={<AiMl />} />
    <Route path="/devops-solutions" element={<DevOpsSolutions />} />
    

    {/* 404 Page */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);


function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isAuthenticated,
    error: authError,
    loading: authLoading,
  } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      <ToastContainer />
      <BrowserRouter>
        {isLogin ? (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            </ThemeProvider>
          </ColorModeContext.Provider>
        ) : (
          <ThemeProviders>
            <Header isScrolled={isScrolled} />
            <WhatsappIcon />
            <PublicRoutes />
            <FooterComponent />
          </ThemeProviders>
        )}
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
