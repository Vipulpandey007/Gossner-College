import DefaultLayout from "../../components/Layouts/DefaultLayout";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <DefaultLayout>
        <div>{children}</div>
      </DefaultLayout>
    </div>
  );
};
export default Layout;
