import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation";
import {useInput} from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: hangleEmailChange,
    handleInputBlur: hangleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: hanglePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={hangleEmailBlur}
          onChange={hangleEmailChange}
          value={emailValue}
          error={emailHasError && "Please entere a valid email."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={hanglePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please entere a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
