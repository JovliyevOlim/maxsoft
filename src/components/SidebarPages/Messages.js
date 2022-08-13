import React from 'react';

import  firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useState,useRef} from "react";
import {FaTelegramPlane} from "react-icons/fa"
import './messages.css'
firebase.initializeApp({
    apiKey: "AIzaSyCa-hKQTRYikkjMBPbVE5aS00WL0NHseU0",
    authDomain: "chat-react-3c9f6.firebaseapp.com",
    databaseURL:'https://chat-react-3c9f6.firebaseio.com',
    projectId: "chat-react-3c9f6",
    storageBucket: "chat-react-3c9f6.appspot.com",
    messagingSenderId: "647994712764",
    appId: "1:647994712764:web:ca852b7ebd5bba4cb726b9",
    measurementId: "G-MS6XCB236G"
})

const auth=firebase.auth();
const firestore = firebase.firestore();


function Messages(){


    const [user] = useAuthState(auth)

    return (
        <div className={'Message'}>
            <header>
                <h1>⚛️🔥💬</h1>
                <SignOut/>
            </header>

            <section>
                {
                    user ?<Chat/> : <SignIn/>
                }

            </section>
        </div>
    );
}

export default Messages


function SignIn(){
    const singInWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider)
    }

    return (
        <div>
            <button onClick={singInWithGoogle}>Sing in with Google</button>
        </div>
    )
}

function SignOut(){
    return auth.currentUser && (
        <button onClick={()=>auth.signOut()}>Sign Out</button>
    )
}

function Chat(){

    const dummy = useRef()
    const messagesRef = firestore.collection('messages');
    console.log(messagesRef)
    const query = messagesRef.orderBy('createAt').limit(1000)

    const [messages] = useCollectionData(query,{idField:'id'});

    const [formValue,setFormValue] = useState('')

    const  sendMessage = async(e)=>{
        console.log('ejjo')
        e.preventDefault()
        const {uid,photoURL}  = auth.currentUser;

        await messagesRef.add({
            text:formValue,
            createAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('')

        dummy.current.scrollIntoView({behavior:'smooth'})
    }

    return(
        <>

        <main>
            {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg} />)}

            <div ref={dummy}></div>
        </main>

            <form onSubmit={sendMessage}>
                <input className={'message-input'} value={formValue} onChange={(e)=>setFormValue(e.target.value)} type="text"/>
                <button type={'submit'}><FaTelegramPlane/></button>
            </form>
        </>
    )

}

function ChatMessage(props){

    const {text,uid,photoURL} = props.message

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img className={'message-img'} src={photoURL} />
            <p>{text}</p>
        </div>
    )


}
