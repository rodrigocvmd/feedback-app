import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        id
    ])

    return <FeedbackContext.Provider value={{    }}>
        {children}
    </FeedbackContext.Provider>
} 