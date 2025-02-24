import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (e) {
    console.error("Google Sign-In error", e);
    throw e;
  }
}
