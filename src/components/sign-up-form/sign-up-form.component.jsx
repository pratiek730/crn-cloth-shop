import { useState } from "react";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss"
import CustomButton from "../custom-button/custom-button.component";


const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);

  const { displayName, email, password, confirmPassword } = formFeilds;

  async function handleChange(event) {
    const { name, value } = event.target;
    await setFormFeilds({
      ...formFeilds,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      console.log(
        await createUserDocumentFromAuth({
          ...response.user,
          displayName: displayName,
        })
      );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Profile Already Exists");
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Sign Up With your Email and Password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUpForm;
