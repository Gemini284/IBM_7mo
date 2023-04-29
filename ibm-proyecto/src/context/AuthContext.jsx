import { auth } from '../Firebase';
import React, { createContext, useContext } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        console.log("Error en el contexto")
        throw new Error('useAuth debe estar dentro del proveedor AuthContext');
    }
    return context;
};

export function AuthProvider({ children }) {

    const register = async (email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res.user);
        } catch (error) {
            console.log(error);
        }
    };

    const loginGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            console.log(res.user);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            const res = await signOut(auth);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (<AuthContext.Provider
        value={{ register, login, loginGoogle, logout }}>
        {children}
    </AuthContext.Provider>)
}