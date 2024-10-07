import Base from "../components/Base";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  return (
    <Base>
      <NavBar showSignIn={false} />
      <LoginCard />
      <Footer showGetStarted={false} />
    </Base>
  );
};

export default LoginPage;
