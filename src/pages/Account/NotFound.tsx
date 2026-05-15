import { Link } from "react-router-dom"
import CustomButton from "../../components/button/CustomButton"

const NotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white px-6 py-10 shadow-xl sm:px-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <div className="flex items-center justify-center">
              <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            404
          </h1>
          <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900">Page not found</h3>
          <p className="mt-2 text-base text-gray-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <CustomButton onClick={() => window.history.back()} variant="bordered" size="lg" className="w-full">
            Go Back
          </CustomButton>
          <Link to="/" className="w-full">
            <CustomButton size="lg" className="w-full">
              Return to Dashboard
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
