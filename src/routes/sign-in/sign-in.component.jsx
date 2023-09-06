import CustomButton from "../../components/custom-button/custom-button.component";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from './../../components/sign-up-form/sign-up-form.component';

function SignIn() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(await createUserDocumentFromAuth(response.user))
    }


    return ( 
        <>
        <h1>SignIn</h1>
        <CustomButton buttonType='google' onClick={logGoogleUser}>Sign In With Google</CustomButton>
        <SignUpForm/>
        </>
     );
}

export default SignIn;