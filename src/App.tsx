import { Suspense } from "react";
import { Spinner } from "./components/ui";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center"><Spinner variant="spinner" size="lg" /></div>}>
      <Homepage />
    </Suspense>
  )
}

export default App
