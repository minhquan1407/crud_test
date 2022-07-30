import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ActivationEmail from "../auth/ActivationEmail";
import ForgotPassword from "../auth/ForgotPassword";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ResetPassword from "../auth/ResetPassword";
import TutorialTable from "../components/TutorialTable";
import CardProduct from "../features/manyToMany/components/CardProduct";
// import AddProductUnit from "../features/manyToMany/pages/AddProductUnit";
import ShowAllProductUnit from "../features/manyToMany/pages/showAllProductUnit";
import ProductUnitById from "../features/manyToMany/pages/showProductUnit/ProductUnitById";
import AllUnit from "../features/manyToMany/pages/UnitList/AllUnit";
import ProductDetail from "../features/oneToMany/pages/ProductDetail";
import ShowCategory from "../features/oneToMany/pages/ShowCategory";
import NotFound from "../utils/NotFound/NotFound";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  const auth = useSelector((state) => state.isLogged);
  return (
    <>
      <Routes>
        <Route path="/tutorials" element={<TutorialTable />} />
        <Route path="/category/:id" element={<ProductDetail />} />
        <Route path="/productUnit" element={<ShowAllProductUnit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgotPassword"
          element={auth === true ? <NotFound /> : <ForgotPassword />}
        />
        <Route
          path="/user/reset/:accessToken"
          element={auth === true ? <NotFound /> : <ResetPassword />}
        />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
        />
        <Route
          path="/productUnitById"
          element={
            <PrivateRoute>
              <ProductUnitById />
            </PrivateRoute>
          }
        />
        <Route
          path="/fetchAllUnit"
          element={
            <PrivateRoute>
              <AllUnit />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <ShowCategory />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
export default AppRoutes;
