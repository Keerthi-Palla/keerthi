import React from "react";
import "./login.css";
function Login(){
    return (
        <fieldset>
        <form>
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="form2Example1">Email address</label>
              <input type="email" id="form2Example1" class="form-control" />
            </div>
            <br/>
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="form2Example2">Password</label>
              <input type="password" id="form2Example2" class="form-control" />
            </div>
            <br/>
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>
            <br/>
              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
              <br/>
            </div>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">login</button>
            <div class="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
            </div>
          </form>
    </fieldset>
    );
}
export default Login;