import { Field, Form, Formik } from 'formik';
import React from 'react';
// import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { IForgotPasswordEmailModel, IForgotPasswordOTPModel, IForgotPasswordPasswordModel, ILoginResponseModel } from '../../models/account';
import { Routing } from '../../routes/routing';
import accountService from '../../services/account-service';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import { adminLogin } from '../../store/slices/authSlice';
import { ForgotEmailValidationSchema, ForgotOTPValidationSchema, ForgotPasswordValidationSchema } from '../../validation/account';
const ActionType = {
  Email: 'Email',
  Otp: 'Otp',
  Password: 'Password',
} as const;

type ActionType = typeof ActionType[keyof typeof ActionType];

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [actionType, setActionType] = React.useState<ActionType>(ActionType.Email);

  const emailState: IForgotPasswordEmailModel = { email: "admin@gmail.com" };

  const otpState: IForgotPasswordOTPModel = { otp: '123456' };

  const passwordState: IForgotPasswordPasswordModel = {
    password: '',
    confirmPassword: ''
  };

  const handleEmailSubmit = async (values: IForgotPasswordEmailModel) => {
    // await accountService
    //   .forgotPassword(values)
    //   .then((response) => {
    //     const responseData: ILoginResponseModel = response?.data?.data;
    //     if (response?.data?.status) {
          // dispatch(adminLogin(responseData));
          setActionType(ActionType.Otp);
      //   }
      // })
      // .catch((error: Error) => console.log(error?.message));
  };

  const handleOtpSubmit = async (values: IForgotPasswordOTPModel) => {
    // await accountService
    //   .varifyOTP(values)
    //   .then((response) => {
    //     const responseData: ILoginResponseModel = response?.data?.data;
    //     if (response?.data?.status) {
          // dispatch(adminLogin(responseData));
          setActionType(ActionType.Password);
      //   }
      // })
      // .catch((error: Error) => console.log(error?.message));
  };

  const ResendOTP = async () => {
    // await accountService
    //   .resendOTP()
    //   .then((response) => {
    //     const responseData: ILoginResponseModel = response?.data?.data;
    //     if (response?.data?.status) {
          // dispatch(adminLogin(responseData));
      //   }
      // })
      // .catch((error: Error) => console.log(error?.message));
  };

  const handlePasswordSubmit = async (values: IForgotPasswordPasswordModel) => {
    await accountService
      .resetPassword(values)
      .then((response) => {
        if (response?.data?.status) {
          navigate(Routing.Login)
        }
      })
      .catch((error: Error) => console.log(error?.message));
  };


  return (
    <div className='h-screen w-full flex flex-col justify-center items-center overflow-hidden relative bg-background'>
      <div className="fixed -bottom-[500px] -left-[500px] max-w-[1000px] w-[1000px] h-[1000px] z-0 opacity-50 animate-rotate-bg"></div>
      <div className="flex justify-center items-center w-full z-10">
        <div className='max-w-[450px] w-full shadow-[0px_18px_50px_-10px_rgba(0,0,0,0.2)] border-none px-[40px] py-[50px] z-10 bg-white rounded-xl' >
          {/* <IoIosArrowBack className='text-[22px] cursor-pointer' onClick={() => navigate(Routing.Login)} /> */}
          <div className="text-center">
            <div className="max-w-[100px] w-full mx-auto flex justify-center">
              <img src="/favicon.svg" alt='' />
            </div>
            <div className="mt-[5px]">
              <p className="text-2xl font-bold">Admin Portal</p>
            </div>
          </div>

          <div className="p-0 mt-[40px] overflow-visible">
            {actionType === ActionType.Email && (
              <>
                <p className='mb-2 text-center text-xl font-semibold'>Forgot password</p>
                <p className="text-muted text-base text-center text-secondary-700">
                  Enter your register E-mail id to reset your password
                </p>
                <Formik
                  initialValues={emailState}
                  onSubmit={handleEmailSubmit}
                  validationSchema={ForgotEmailValidationSchema}
                  validateOnBlur={false}
                  validateOnChange={true}
                  enableReinitialize={true}
                >
                  {({ values, setFieldValue, handleSubmit }) => {
                    return (
                      <Form onSubmit={handleSubmit} className='mt-[30px]'>
                        <div className="mb-5 relative">
                          <Field
                            name="email"
                            type="email"
                            value={values?.email}
                            label="Email"
                            placeholder="Enter your email"
                            onChange={(value: string) => setFieldValue('email', value)}
                            component={CustomInput}
                          />
                        </div>
                        <CustomButton fullWidth type="submit" className="mt-5 justify-center">
                          Submit
                        </CustomButton>
                      </Form>
                    )
                  }}
                </Formik>
              </>
            )}

            {actionType === ActionType.Otp && (
              <>
                <p className='mb-2 text-center text-xl font-semibold'>Forgot password</p>
                <p className="text-muted text-base text-center text-secondary-700">
                  Enter 6 digit code that you received in your mail
                </p>
                <Formik
                  initialValues={otpState}
                  onSubmit={handleOtpSubmit}
                  validationSchema={ForgotOTPValidationSchema}
                  validateOnBlur={false}
                  validateOnChange={true}
                  enableReinitialize={true}
                >
                  {({ values, setFieldValue, handleSubmit }) => {
                    return (
                      <Form onSubmit={handleSubmit} className='mt-[30px]'>
                        <div className='mt-5'>
                          <Field
                            name="otp"
                            numInputs={6}
                            value={values?.otp}
                            label="OTP"
                            placeholder="Enter OTP"
                            onChange={(value: string) => setFieldValue('otp', value)}
                            component={CustomInput}
                          />
                          <div className="text-right mt-5">
                            <p className="hover:cursor-pointer text-secondary-700 text-sm inline-block" onClick={ResendOTP}>
                              Resend Otp
                            </p>
                          </div>
                          <CustomButton fullWidth type="submit" className="mt-5 justify-center">
                            Submit
                          </CustomButton>
                        </div>
                      </Form>
                    )
                  }}
                </Formik>
              </>
            )}

            {actionType === ActionType.Password && (
              <>
                <p className='mb-2 text-center text-xl font-semibold'>Reset password</p>
                <p className="text-muted text-base text-center text-secondary-700">
                  Reset your password for re-login in your account
                </p>
                <Formik
                  initialValues={passwordState}
                  onSubmit={handlePasswordSubmit}
                  validationSchema={ForgotPasswordValidationSchema}
                  validateOnBlur={false}
                  validateOnChange={true}
                  enableReinitialize={true}
                >
                  {({ values, setFieldValue, handleSubmit }) => {
                    return (
                      <Form onSubmit={handleSubmit} className='mt-[30px]'>
                        <div className="mb-5 relative">
                          <Field
                            type="password"
                            name="password"
                            value={values?.password}
                            label="Password"
                            placeholder="Enter new password"
                            onChange={(value: string) => setFieldValue('password', value)}
                            component={CustomInput}
                          />
                        </div>
                        <div className="mb-4 relative">
                          <Field
                            type="password"
                            name="confirmPassword"
                            value={values?.confirmPassword}
                            label="Confirm Password"
                            placeholder="Confirm new password"
                            onChange={(value: string) => setFieldValue('confirmPassword', value)}
                            component={CustomInput}
                          />
                        </div>
                        <CustomButton fullWidth type="submit" className="mt-5 justify-center">
                          Submit
                        </CustomButton>
                      </Form>
                    )
                  }}
                </Formik>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
