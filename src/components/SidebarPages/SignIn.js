import React from 'react';
import  firebase from "firebase/compat/app";
const auth=firebase.auth();

function SignIn(props) {

    function singInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={singInWithGoogle}>Sing in with Google</button>
        </div>
    );
}

export default SignIn;
