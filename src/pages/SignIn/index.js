// Import FirebaseAuth and firebase.
import classNames from "classnames/bind";
import { initializeApp } from "firebase/app";
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import "firebase/compat/auth";
import { React, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import { setUser } from "../../components/Layout/components/Header";
import styles from "./signIn.scss";

const cx = classNames.bind(styles);

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBY4nhI4SxJxSH4kNYvX83Ju7VNi1xED9U",
  authDomain: "rtcweb-2a484.firebaseapp.com",
  projectId: "rtcweb-2a484",
  storageBucket: "rtcweb-2a484.appspot.com",
  messagingSenderId: "638136845838",
  appId: "1:638136845838:web:4e632b06d62c1e7b759e5f",
  measurementId: "G-WF4TMC1EF1",
};
//firebase.initializeApp(config);

const app = initializeApp(config);
export const auth = getAuth(app);

const EmailProvider = new EmailAuthProvider();
const GGprovider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
// Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: 'redirect',
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: '/',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
// };

const signinGoogle = () => {
  signInWithPopup(auth, GGprovider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signinFacebook = () => {
  signInWithPopup(auth, FacebookProvider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signinEmail = () => {
  signInWithPopup(auth, EmailProvider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setIsSignedIn(user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div className={cx("wrapper")}>
        <h1 className={cx("text-center")}>Please sign in</h1>
        {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
        <div className={cx("list-method")}>
          <ul className={cx("items-center")}>
            <button className={cx("email-login-button")} onClick={signinEmail}>
              <div className={cx("inner-button")}>
                <img
                  className={cx("button-icon")}
                  src={require("../../assets/icon/mailIcon.webp")}
                  width="26px"
                  height="26px"
                />
                <div className={cx("space")}> </div>
                Log in with Email
              </div>
            </button>
            <GoogleLoginButton onClick={signinGoogle} />
            <FacebookLoginButton onClick={signinFacebook} />
          </ul>
        </div>
      </div>
    );
  } else {
    setUser();
    return (
      <div>
        <Navigate to="/" />
        <p>{auth.currentUser.displayName}, You are now signed-in!</p>

        <button onClick={() => auth.signOut()}>Sign-out</button>
      </div>
    );
  }
}

export default SignInScreen;
