import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Import your CSS file

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" id="b-img"> 
      <div className="br border border-2 border-dark p-4 bg-white">
        <form>
          <h3 className="text-center">LOGIN PAGE</h3>
          <div className="mb-3">
            <label htmlFor="EMAIL">EMAIL </label>
            <input
              placeholder="example@gmail.com"
              type="email"
              name="Email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PASSWORD">PASSWORD </label>
            <input
              placeholder="*******@123"
              type="password"
              name="password"
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" className="mx-1" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <div>
              <Link to="/forgot">Forgot password?</Link>
            </div>
          </div>
        </form>
        <div className="d-grid">
          <button className="btn btn-dark" type="submit">
            LOGIN
          </button>
        </div>
        <br />
        <div className="mb-3">
          <h10>
            By clicking on Login, I accept the Terms & Conditions & Privacy
            Policy
          </h10>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
