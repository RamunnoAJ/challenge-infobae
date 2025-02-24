import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import axios from "axios";
import { BASE_URL } from "./base";

export async function getPosts() {
  try {
    const firestoreSnap = await getDocs(collection(db, "posts"));
    if (!firestoreSnap.empty) {
      return firestoreSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }

    const response = await axios.get(`${BASE_URL}/posts?limit=20`);
    const posts = response.data.posts;

    for (const post of posts) {
      const postRef = doc(db, "posts", post.id.toString());
      await setDoc(postRef, {
        body: post.body,
        tags: post.tags,
        userId: post.userId,
      });
    }

    const newPosts = await getDocs(collection(db, "posts"));
    return newPosts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching or persisting posts:", error);
    return [];
  }
}
