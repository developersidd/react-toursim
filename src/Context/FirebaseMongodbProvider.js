import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
import useMongodb from './../Hooks/useMongodb';

export const FirebaseMongodbContext = createContext();

const FirebaseMongodbProvider = ({ children }) => {

    const firebase = useFirebase();
    const mongodb = useMongodb();

    return (
        <FirebaseMongodbContext.Provider value={{ firebase, mongodb }}>
            {children}
        </FirebaseMongodbContext.Provider>
    )
}

export default FirebaseMongodbProvider
