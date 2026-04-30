import LoginForm from "../../Components/Layout/LoginLayout/LoginForm";
import Footer from "../../Components/Layout/HomeLayout/Footer";
import LoginHeader from "../../Components/Layout/LoginLayout/LoginHeader";

export default function Login() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="flex-shrink-0">
        <LoginHeader />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center bg-[#F8F9F5] px-4">
        <LoginForm />
      </div>

      {/* Footer */}
      <div className="flex-shrink-0">
        <Footer />
      </div>

    </div>
  );
}