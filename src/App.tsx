import { Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import Spinner from "./layout/Spinner";
import AppRouting from "./routes/AppRouting";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Toaster position="top-right" />
        <AppRouting />
      </Suspense>
    </Provider>
  )
}

export default App
