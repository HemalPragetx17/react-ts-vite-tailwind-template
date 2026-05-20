import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";``
import Spinner from "./layout/Spinner";
import AppRouting from "./routes/AppRouting";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <ToastContainer limit={3} autoClose={1000} className="toaster" hideProgressBar={false} />
        <AppRouting />
      </Suspense>
    </Provider>
  )
}

export default App
