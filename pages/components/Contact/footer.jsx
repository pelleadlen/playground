import { TimeZone } from "./timeZone";

export const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="flex flex-row justify-between ml-6 mr-6">
        <TimeZone />
        <div>
          <h3 className="text-2xl text-gray-400">SOCIALS</h3>
          <div className="text-white text-2xl underline flex gap-6 ">
            <a href="https://www.linkedin.com/in/pelle-adl%C3%A9n-b76709223/">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/pell.ux/">Instagram</a>
            <a href="mailto:pelleadlen@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
