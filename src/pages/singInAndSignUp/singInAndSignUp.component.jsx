import React from "react";

import "./singInAndSignUp.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SingInAndSignUp = () => (
  <div className="singInAndSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SingInAndSignUp;
