import loginPhoto from "./assets/photos/6129500.jpg";
import { useState } from "react";
import { Activity, ArrowRight, Eye, EyeOff, HeartPulse, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

/** Front-end only login form. Pass onLogin to connect it to an API later. */
export default function Login({ onLogin, onForgotPassword, loading = false, error = "" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rememberMe = false; // Reserved for the future authentication API.
  const [showPassword, setShowPassword] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setFormMessage("");
    onLogin?.({ email: email.trim(), password, rememberMe });
  }

  function handleForgotPassword() {
    if (onForgotPassword) {
      onForgotPassword(email.trim());
      return;
    }
    setFormMessage("Password reset will be connected by the backend.");
  }

  return (
    <main className="auth-page">
      <section
        className="auth-visual"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,37,43,.93), rgba(10,37,43,.55)), url(${loginPhoto})`,
        }}
        aria-label="Blastoise healthcare portal">
        <div className="auth-visual-inner">
          <a className="auth-brand" href="#login" aria-label="Blastoise home">
            <span className="auth-brand-icon">
              <HeartPulse size={24} />
            </span>
            <span>
              Blastoise<span className="brand-dot">.</span>
            </span>
          </a>
          <div className="auth-promo">
            <span className="auth-kicker">
              <Activity size={15} /> SMART HEALTHCARE MANAGEMENT
            </span>
            <h1>
              Better care,
              <br />
              <em>all in one place.</em>
            </h1>
            <p>Sign in to manage your clinic workspace, patient records, appointments, and billing.</p>
            <div className="auth-visual-card">
              <span className="auth-card-icon">
                <ShieldCheck size={20} />
              </span>
              <span>
                <b>Your clinic workspace</b>
                <small>One place for everyday clinic tasks</small>
              </span>
              <span className="auth-card-dot" />
            </div>
          </div>
          <small className="auth-visual-foot">BLASTOISE · HEALTH SERVICES</small>
        </div>
        <div className="auth-orb auth-orb-one" />
        <div className="auth-orb auth-orb-two" />
      </section>

      <section className="auth-form-side">
        <div className="auth-form-wrap">
          <div className="auth-mobile-brand">
            <span className="auth-brand-icon">
              <HeartPulse size={22} />
            </span>
            <b>
              Blastoise<span className="brand-dot">.</span>
            </b>
          </div>
          <span className="auth-eyebrow">CLINIC PORTAL</span>
          <h2>Welcome back</h2>
          <p className="auth-subtitle">Sign in to continue to your healthcare workspace.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email">Email address</label>
            <div className="auth-input-wrap">
              <Mail size={17} />
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@gmail.com"
              />
            </div>

            <label htmlFor="login-password">Password</label>
            <div className="auth-input-wrap">
              <LockKeyhole size={17} />
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                minLength={6}
                maxLength={72}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            <div className="auth-options">
              <button type="button" className="auth-forgot" onClick={handleForgotPassword} disabled={loading}>
                Forgot password?
              </button>
            </div>

            {(error || formMessage) && (
              <p className="auth-message error" role="alert">
                {error || formMessage}
              </p>
            )}

            <button className="auth-submit" type="submit" disabled={loading}>
              {loading ? "Please wait…" : "Sign in"}
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="auth-secure-note">
            <ShieldCheck size={16} />
            <span>
              Secure clinic workspace
              <br />
              <small>Admin account can enter only.</small>
            </span>
          </div>
          <p className="auth-legal">
            <br />
          </p>
        </div>
      </section>
    </main>
  );
}
