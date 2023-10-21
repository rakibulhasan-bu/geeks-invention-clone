import { createContext, useState } from 'react'
export const AppContext = createContext(null)

const ContextProvider = ({ children }: any) => {

    const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#000');
    const [textDivState1, setTextDivState1] = useState('closed');
    const [textDivState2, setTextDivState2] = useState('closed');
    const [textDivState3, setTextDivState3] = useState('closed');
    const [textDivState4, setTextDivState4] = useState('closed');
    const [textDivState5, setTextDivState5] = useState('closed');
    const [textDivState6, setTextDivState6] = useState('closed');
    const [mainContentBackgroundColor, setMainContentBackgroundColor] = useState('#000');


    const authInfo = {
        headerBackgroundColor,
        setHeaderBackgroundColor,
        textDivState1, setTextDivState1,
        textDivState2, setTextDivState2,
        textDivState3, setTextDivState3,
        textDivState4, setTextDivState4,
        textDivState5, setTextDivState5,
        textDivState6, setTextDivState6,
        mainContentBackgroundColor,
        setMainContentBackgroundColor
    }
    return (
        <AppContext.Provider value={authInfo}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;