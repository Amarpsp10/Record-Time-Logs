import React,{useContext, useState, useEffect} from 'react'

export const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[loading,setLoading] = useState(false)
    const [currentUser,setCurrentUser] = useState();
    
    function signup(email, password){
        return
    }
    function login(email, password){
        return 
    }

    function logout(){
        return 
    }
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
    }
    
    return (
       <AuthContext.Provider value={value}>
         {!loading && children}
       </AuthContext.Provider>
    )
}