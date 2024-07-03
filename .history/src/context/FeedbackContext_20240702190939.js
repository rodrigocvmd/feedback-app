import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    return <FeedbackContext.Provider value={{
        const [feedback, setFeedback] = useState()
    }}>
        {children}
    </FeedbackContext.Provider>
} 