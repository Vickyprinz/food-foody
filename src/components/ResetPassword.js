import React, { useState } from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sessionToken, setSessionToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const current_password = oldPassword;
    const new_password = password;
    const password_confirmation = confirmPassword;

    try {
      const response = await fetch("http://localhost:3000/users/change_password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionToken}` // pass sessionToken in header
        },
        body: JSON.stringify({ current_password, new_password, password_confirmation }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setEmail("");
        setOldPassword("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="reset-password-container">
      <h1 className="reset-password-title">Reset Password</h1>
      <form className="reset-password-form" onSubmit={handleSubmit}>
        {error && <p className="reset-password-error">{error}</p>}
        {success && <p className="reset-password-success">{success}</p>}
        <div className="reset-password-form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="reset-password-form-field">
          <label htmlFor="old-password">Old Password:</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="reset-password-form-field">
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="reset-password-form-field">
          <label htmlFor="confirm-password">Confirm New Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="reset-password-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword
