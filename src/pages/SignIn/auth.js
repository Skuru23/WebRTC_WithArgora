import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../components/Layout/components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyBY4nhI4SxJxSH4kNYvX83Ju7VNi1xED9U",
  authDomain: "rtcweb-2a484.firebaseapp.com",
  projectId: "rtcweb-2a484",
  storageBucket: "rtcweb-2a484.appspot.com",
  messagingSenderId: "638136845838",
  appId: "1:638136845838:web:4e632b06d62c1e7b759e5f",
  measurementId: "G-WF4TMC1EF1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signinGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {


      console.log(result);
      
      <button onClick={setUser}>Continune</button>
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};


