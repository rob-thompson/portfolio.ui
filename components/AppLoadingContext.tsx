import {createContext, useContext, useState} from "react";

export const AppLoader = createContext({
    showAppLoader: true,
    setShowAppLoader: (b) => {}
})

const useAppLoadContext = () => {
    const context = useContext(AppLoader)
    if (context === undefined) {
        throw new Error('AppLoader hook must be used within the AppLoadingContext')
    }
    return context
}

function AppLoadingContext({children}) {
    const [showAppLoader, setShowAppLoader] = useState(true)
    return (
        <AppLoader.Provider value={{showAppLoader, setShowAppLoader: b => setShowAppLoader(b)}}>
            {children}
        </AppLoader.Provider>
    )
}

export const useAppLoader = (initialState) => {
    const {showAppLoader, setShowAppLoader} = useAppLoadContext()
    setShowAppLoader(initialState)
    return setShowAppLoader
}

export default AppLoadingContext;