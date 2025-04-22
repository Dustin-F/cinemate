import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <footer className="bg-white  shadow-sm  border-gray-200 dark:bg-gray-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link
              to="https://dustinforsyth.netlify.app/"
              className="hover:underline"
            >
              Dusty Watch™
            </Link>
            . All Rights Reserved.
          </span>
         
        </div>
      </footer>
    </footer>
  );
};
