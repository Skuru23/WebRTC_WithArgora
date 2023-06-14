import classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../../../Button";
import styles from "./Header.module.scss";
import { auth } from "../../../../pages/SignIn";

const cx = classNames.bind(styles);

var currentUser = false;

export const setUser = () => {
  currentUser = true;
};

function Header() {
  const navigate = useNavigate();

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img
              src="https://www.gstatic.com/devrel-devsite/prod/v693c51561ffcdff9e6200b7e4cd9c2bdcde516af6b265b56d58924d489006b90/webrtc/images/lockup.svg"
              height="42"
              width="118"
              alt="WebRTC"
            />
          </Link>
        </div>

        {currentUser ? (
          <div className={cx("current-user")}>
            <div className={cx("actions")}>
              <Button
                outline
                onClick={() => {
                  auth.signOut();
                  currentUser = false;
                  navigate("/");
                }}
              >
                Log out
              </Button>

              <img
                className={cx("user-avatar")}
                src={auth.currentUser.photoURL}
                height="42"
                alt="userPhoto"
              />
            </div>
          </div>
        ) : (
          <div className={cx("actions")}>
            <Button primary to="/signin">
              Sign In
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
