import React from 'react'
import Button from '@material-ui/core/Button'
import './Login.css';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from "./Reducer";


function LogIn() {
    const [{}, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' />
                <div className='login__text'>
                    <h1>Hi, Sign In to Whatsapp</h1>
                </div>

                <Button type='submit' onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default LogIn
