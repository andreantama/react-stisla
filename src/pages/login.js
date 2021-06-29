import React from 'react';

const login = () => {
  return (
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
              <form method="POST" action="#" class="needs-validation" novalidate="">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" type="email" class="form-control" name="email" tabindex="1" required autofocus />
                  <div class="invalid-feedback">
                      Please fill in your email
                  </div>
                </div>
                <div class="form-group">
                    <div class="d-block">
                    	<label for="password" class="control-label">Password</label>
                    </div>
                    <input id="password" type="password" class="form-control" name="password" tabindex="2" required />
                    <div class="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                      Login
                    </button>
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
  )
};
export default login;