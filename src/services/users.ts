import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import axios from "axios";
import { BASE_URL } from "./base";

export async function getUsers() {
  try {
    const firestoreSnap = await getDocs(collection(db, "users"));
    if (!firestoreSnap.empty) {
      return firestoreSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }

    const response = await axios.get(`${BASE_URL}/users?limit=20`);
    const users = response.data.users;

    for (const user of users) {
      const userRef = doc(db, "users", user.id.toString());
      await setDoc(userRef, {
        name: user.firstName + " " + user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        image: user.image,
        role: user.role,
      });
    }

    const newUsers = await getDocs(collection(db, "users"));
    return newUsers.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching or persisting users:", error);
    return [];
  }
}
