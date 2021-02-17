import React from "react";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="lhs">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="rhs">
          <div>
            <p className="banner">Try it free 7 days then $20/mo. thereafter</p>
          </div>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Claim your free trial</button>
            <p>
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
