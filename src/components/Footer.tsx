import GetStart from "./GetStart";
import LanguageSelection from "./LanguageSelection";

type FooterProps = {
  showGetStarted?: boolean;
};

const Footer: React.FC<FooterProps> = ({ showGetStarted = true }) => {
  return (
    <footer className="content flex flex-col gap-5 py-5 items-center">
      {showGetStarted && (
        <div className="max-w-3xl w-full mb-10 flex flex-col items-center gap-3">
          <p className="text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <GetStart />
        </div>
      )}
      <div className="w-full flex flex-col gap-10 font-medium text-gray-300">
        <p>
          Questions? Call{" "}
          <span className="underline cursor-pointer">000-800-919-1694</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          <div className="footer-links ">FAQ</div>
          <div className="footer-links ">Help Centre</div>
          <div className="footer-links ">Account</div>
          <div className="footer-links ">Media Centre</div>
          <div className="footer-links ">Investor Relations</div>
          <div className="footer-links ">Jobs</div>
          <div className="footer-links ">Ways to Watch</div>
          <div className="footer-links ">Terms of Use</div>
          <div className="footer-links ">Privacy</div>
          <div className="footer-links ">Cookie Preferences</div>
          <div className="footer-links ">Corporate Information</div>
          <div className="footer-links ">Contact Us</div>
          <div className="footer-links ">Speed Test</div>
          <div className="footer-links ">Legal Notices</div>
          <div className="footer-links ">Only on Netflix</div>
        </div>
        <LanguageSelection />
        <p>Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
