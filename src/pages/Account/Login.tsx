import { Field, Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import type { ILoginRequestModel } from '../../models/account';
import { Routing } from "../../routes/routing";
import { adminLogin } from '../../store/slices/authSlice';
import { LoginValidationSchema } from "../../validation/account";
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialValues: ILoginRequestModel = {
    email: "admin@gmail.com",
    password: "Admin@123",
  };

  const handleSubmit = async (values: ILoginRequestModel) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
    dispatch(adminLogin({
      id: '1',
      email: "admin@gmail.com",
      phone: "1234567890",
      role: "admin",
      first_name: "Admin",
      last_name: "User",
      is_active: true,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2OTQ4ODQyMDksImV4cCI6MTY5NDg4Nzg4OX0.7n8sHj3lqj8a9e7vKqLhXoG8u2b3n9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z5s9z"
    }))
    navigate(Routing.Dashboard)
  };

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center overflow-hidden relative bg-background'>
      <div className="fixed -bottom-[500px] -left-[500px] max-w-[1000px] w-[1000px] h-[1000px] z-0 opacity-50 animate-rotate-bg"></div>
      <div className="flex justify-center items-center w-full z-10">
        <div className="max-w-[450px] w-full shadow-[0px_18px_50px_-10px_rgba(0,0,0,0.2)] border-none px-[40px] py-[50px] z-10 bg-white rounded-xl">
          <div className="text-center">
            <div className="max-w-[100px] w-full mx-auto flex justify-center">
              <img src="/favicon.svg" alt='' />
            </div>
            <div className="mt-[5px]">
              <p className="text-2xl font-bold">Admin Portal</p>
            </div>
          </div>
          <div className="p-0 mt-[40px] overflow-visible">
            <p className="mb-5 text-center text-xl font-semibold">Login</p>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={LoginValidationSchema}
              validateOnBlur={false}
              validateOnChange={true}
              enableReinitialize={true}
            >
              {({ handleSubmit, values, setFieldValue }) => {
                return (
                  <Form onSubmit={handleSubmit} className='mt-[30px]'>
                    <div className="mb-3 relative">
                      <Field
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        value={values?.email}
                        onChange={(e: any) => setFieldValue("email", e.target.value)}
                        component={CustomInput}
                      />
                    </div>
                    <div className="mb-3 relative">
                      <Field
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        isPasswordToggle={true}
                        value={values?.password}
                        onChange={(e: any) => setFieldValue("password", e.target.value)}
                        component={CustomInput}
                      />
                    </div>
                    <div className="text-right">
                      <p className="hover:cursor-pointer text-secondary-700 text-sm inline-block" onClick={() => navigate(Routing.ForgotPassword)}>
                        Forgot password?
                      </p>
                    </div>
                    <CustomButton fullWidth type="submit" className="mt-5 justify-center">
                      Login
                    </CustomButton>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
