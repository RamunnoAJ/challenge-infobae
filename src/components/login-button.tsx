import { signInWithGoogle } from "../hooks/useGoogleAuth";
import { useAuth } from "../context/auth-context";

export default function LoginButton() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          <p>Welcome, {user.displayName}</p>
          <button
            className="px-4 py-2 rounded-lg font-medium bg-orange-200 hover:bg-orange-300 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 rounded-lg font-medium bg-orange-200 hover:bg-orange-300 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={async () => {
            try {
              await signInWithGoogle();
            } catch (error) {
              console.error("Login failed", error);
            }
          }}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}
