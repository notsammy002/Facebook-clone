import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import styles from "./login.module.css";
import SignupModel from "../components/SignupModel";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <>
      <div className={styles.logindiv}>
        <div className={styles.banner}>
          <h1>facebook</h1>
          <p>
            Facebook helps you connect and share
            <br />
            with the people in your life.
          </p>
        </div>
        <div>
          <Card sx={{ maxWidth: 400, height: 370, m: "auto", boxShadow: 10 }}>
            <CardActions>
              <CardContent>
                <LoginForm />
                <Link to="/login/forgot_password">Forgotten password?</Link>
                <hr />
                <SignupModel />
              </CardContent>
            </CardActions>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
