// Context API
/*
    React Context API allows us to easily access data at different levels of the component tree, without passing prop to every level

    There is three step: 1. createContext 2. provide context 3. consumer/useContext
*/

// creating context which holds all state of notes
import { createContext } from "react";

const noteContext = createContext(); // I have created context

export default noteContext; // now i can use it anywhere just import