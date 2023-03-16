import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/esm/Container";
import "./App.scss";
import Header from "./components/Header.jsx";
import TutorialTable from "./components/TutorialTable";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleRefresh } from "./redux/actions/authAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh());
    }
    //mỗi lần Refresh F5 lại thì nó sẽ add cái data account lại cho taeqwewqeqeqw
  }, []);
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
}

export default App;
