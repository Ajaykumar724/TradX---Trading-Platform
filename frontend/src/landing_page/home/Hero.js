import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Hero() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        return; // not logged in; show default hero
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.log("Auth check failed:", err);
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signpage");
  };

  return (
    <div className="container p-5">
      <div className="row">
        <img src="images/media/homeHero.png" alt="Hero Image" />
      </div>

      <div className="row">
        <h1 className="text-center mt-5">Inverst is Everything</h1>
      </div>

      <div className="row">
        <p className="text-center">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
      </div>

      <div className="row text-center mt-4">
        {username ? (
          <>
            <h4>Welcome <span>{username}</span></h4>
            <button className="btn btn-danger fs-5 mt-3" onClick={Logout}>
              LOGOUT
            </button>
          </>
        ) : (
          <Link
            className="btn btn-primary fs-5"
            style={{ width: "25%", margin: "0 auto" }}
            to={"/signpage"}
          >
            Sign up for free
          </Link>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Hero;
