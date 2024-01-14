'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";


export default function Navbar() {
  // Step 1: Check if a token exists in the localStorage
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setisLoggedIn(true);
    }
  }, [token]);

  console.log(isLoggedIn)


  const router = useRouter
  // Step 2: Create a state variable to hold the user's username
  const [username, setUsername] = useState("");

  // Step 3: Set the username when the component mounts
  useEffect(() => {
    // Step 4: Decode the token and extract the username
    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        // Assuming the token contains a field "username" with the username
        if (decodedToken && decodedToken.userId.username) {
          setUsername(decodedToken.userId.username);
        }
      } catch (error) {
        // Handle any decoding errors here (e.g., invalid token)
        console.error("Error decoding token:", error);
      }
    }
  }, [token]);
  const handleLogout = () => {
    localStorage.clear();
    //router.push('/login');
    window.location.href = '/login';

  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">

      {isLoggedIn === true && (
        <Link href={"/add"}>
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Add Topic</span>
          </div>
        </Link>
      )}

      <div>
        {/* Step 5: Conditionally render the elements */}
        {isLoggedIn === true ? (
          <>
            <span className="text-white mr-4">Hello, {username}</span>
            <button onClick={handleLogout} >
              <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Logout
              </div>
            </button>
          </>
        ) : (
          <div className="space-x-2">
            <Link href="/login">
              <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Login
              </div>
            </Link>
            <Link href="/register">
              <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Register
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

