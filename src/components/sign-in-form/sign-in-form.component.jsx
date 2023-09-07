import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const defaultFormFeilds = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { email, password } = formFeilds;

  function resetFeilds() {
    setFormFeilds(defaultFormFeilds);
  }
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  async function handleChange(event) {
    const { name, value } = event.target;
    await setFormFeilds({
      ...formFeilds,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.error(error);
      }
    }
    resetFeilds();
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In With your Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
