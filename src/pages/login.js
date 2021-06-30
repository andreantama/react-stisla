import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import useForm from "../helpers/useForm";
import Button from "../components/button";
import Input from "../components/input";

const Login = () => {
  const [form, setForm, isValid,  errors] = useForm(
    { 
      req: {
        email: '',
        password: '', 
      },
      rules: {
        email: 'required|email',
        password: 'required',
      },
  });
  const [loading, setLoading] = useState(false);
  const storeHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isValid() === false) {
      console.log("Berhasil");
    }
    setLoading(false);
  };
  return (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Login - Admin Panel</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  <div className="section">
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
          <div className="login-brand">

          </div>
          <div className="card card-primary">
            <div className="card-header">
              <h4>Login Page</h4>
            </div>
            <div className="card-body">
              <form onSubmit={storeHandle}>
                <Input 
                  label="Email"
                  type="email"
                  className='form-control'
                  name="email"
                  tabIndex="1"
                  onChange={(e) => setForm(e)}
                  errors={errors.email}
                />
                <Input 
                  label="Password"
                  type="password"
                  className='form-control'
                  name="password"
                  tabIndex="1"
                  onChange={(e) => setForm(e)}
                  errors={errors.password}
                />
                <div className="form-group">
                  <Button className="btn btn-primary btn-lg btn-block" loading={loading} value="Login" type="submit" tabIndex="4" />
                </div>
              </form>
            </div>
          </div>
          <div className="simple-footer">
              Copyright &copy; Politeknik Negeri Banyuwangi 2021
            </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
};
export default Login;