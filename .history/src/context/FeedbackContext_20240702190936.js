import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    return <FeedbackContext.Provider value={{
        const [feedback, setFeedback] = useS
    }}>
        {children}
    </FeedbackContext.Provider>
} 