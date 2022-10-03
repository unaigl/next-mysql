import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <Toaster />
    </>
  );
};

export default Layout;
