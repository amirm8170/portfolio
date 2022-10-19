import React, { createContext, useEffect, useState } from "react";

export const AllContext = createContext({
  showModal: false,
  setShowModal: () => {},
  user:{},
  setUser:()=>{}
});

export const AllContextProvider = ({ children }) => {
  const initUser={
    name:'',
    email:'',
    phone:'',
    website:'',
    message:'',
  }
  const regex = {
    nameRegex : /^[a-zA-Z\s]*$/,
    emailRegex : /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
    phoneRegex : /^\+[0-9]\d{10,14}$/,
  }

  const errors = {
    nameErr: '',
    emailErr: '',
    phoneErr: '',
    messageErr:''
  }
  const [user , setUser] = useState(initUser)
  const [showModal, setShowModal] = useState(false);
  const getWindowSize = () => {
      const { innerWidth} = window;
      return  innerWidth ;
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }
        window.addEventListener("resize", handleWindowResize);
        
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    
    const value = { showModal, setShowModal , windowSize , user , setUser , regex , errors , initUser};
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};
