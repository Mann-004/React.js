import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const { logout } = useAuth0()
  const { user } = useAuth0()
  console.log(user)

  return (
    <>
      {
        isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )
      }

    </>
  )
}

export default LoginButton