import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../utils/Notification";
import { activateEmail } from "../api/UserAxios";
import Login from "./Login";

function ActivationEmail() {
  const { activation_token } = useParams();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await activateEmail(activation_token);
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className="active_page">
      <Login />
    </div>
  );
}

export default ActivationEmail;
