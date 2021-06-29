import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import useForm from "../helpers/useForm";
import Button from "../components/button";
import Validator from "Validator";

const Login = () => {
  const [form, setForm, errors] = useForm(
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
    if (errors !== false) {
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
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className={(errors.email) ? 'form-control is-invalid' : 'form-control'} name="email" tabIndex="1" onChange={(e) => setForm(e)} />
                  {(errors.email) ? (
                     <div className="invalid-feedback">
                        {errors.email}
                    </div>
                  ) : ''}
                </div>
                <div className="form-group">
                    <div className="d-block">
                    	<label className="control-label">Password</label>
                    </div>
                    <input type="password" className={(errors.password) ? 'form-control is-invalid' : 'form-control'} name="password" onChange={(e) => setForm(e)} tabIndex="2" />
                    {(errors.password) ? (
                      <div className="invalid-feedback">
                        please fill in your password
                      </div>
                    ) : ''}
                  </div>
                  <div className="form-group">
                    <Button className="btn btn-primary btn-lg btn-block" loading={loading} value="Login" />
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