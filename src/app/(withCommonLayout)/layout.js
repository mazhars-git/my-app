import Navbar from "../../components/shared/Navbar";
const CommonLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;
