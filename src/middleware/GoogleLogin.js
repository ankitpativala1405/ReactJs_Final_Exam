import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthCredential,
} from "firebase/auth";
import Cookies from "js-cookie";
import { auth, googleProvider } from "../firebase/firebase";

export const signUpWithGoogle = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const user = result.user;
    console.log("User Info:", user);

    Cookies.set("user", JSON.stringify(user), { expires: 7 });
    Cookies.set("UserName", JSON.stringify(user.uid), { expires: 7 });

    console.log("User ID saved to cookie:", user.uid);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    console.log("Google Token:", token);

    navigate("/");
  } catch (error) {
    console.error("Google Sign-Up Error:", error);
  }
};
