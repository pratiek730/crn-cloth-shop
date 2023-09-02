import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(await createUserDocumentFromAuth(response.user))
    }


    return ( 
        <>
        <h1>SignIn</h1>
        <button type="button" onClick={logGoogleUser}>Sign In With Google</button>t
        </>
     );
}

export default SignIn;