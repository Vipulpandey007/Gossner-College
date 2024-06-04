import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const Layout = ({ children }) => {
  return (
    <div class="bg-[#151c2c] text-white m-0 p-0">
      <Sidebar />
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
