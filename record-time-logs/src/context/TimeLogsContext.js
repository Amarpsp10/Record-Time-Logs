import React,{useContext, useState, useEffect} from 'react'

export const TimeLogsContext = React.createContext()

export function TimeLogsProvider({children}) {

    const value = {}
    
    return (
       <TimeLogsContext.Provider value={value}>
         {children}
       </TimeLogsContext.Provider>
    )
}