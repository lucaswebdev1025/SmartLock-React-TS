import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_start/helpers";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid"
        id="kt_login"
      >
        {/* Aside */}
        <div className="d-flex flex-column flex-lg-row-auto bg-primary w-lg-600px pt-15 pt-lg-0" style={{
          backgroundImage: `url(${toAbsoluteUrl(
            "/media/illustrations/auth.png"
          )})`,
        }}>
          {/* Top */}
          <div className="d-flex flex-column-auto flex-column pt-lg-40 text-left">
            {/* begin::Aside Subtitle */}
            <h3 className="fw-bolder fs-2x text-white lh-lg p-15">
              Smart Lock
            </h3>
            {/* end::Aside Subtitle */}
          </div>

          {/* Bottom */}
          <div
            className="d-flex flex-row-fluid bgi-size-contain bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-350px"
          ></div>
        </div>

        {/* Content */}
        <div className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-20 px-10 p-lg-7 mx-auto mw-600px w-100">
          <div className="d-flex flex-column-fluid flex-center py-10">
            <Switch>
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/registration" component={Registration} />
              <Route path="/auth/forgot-password" component={ForgotPassword} />
              <Redirect from="/auth" exact={true} to="/auth/login" />
              <Redirect to="/auth/login" />
            </Switch>
          </div>
          {/* <div className="d-flex justify-content-lg-start justify-content-center align-items-center py-7 py-lg-0">
            <span className="text-primary fw-bolder fs-4 cursor-pointer">
              Terms
            </span>
            <span className="text-primary ms-10 fw-bolder fs-4">Plans</span>
            <span className="text-primary ms-10 fw-bolder fs-4">
              Contact Us
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
