/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode, useState } from "react";

interface NavigationData {
    isOpen: boolean
}

interface NavigationActions {
    open: () => void,
    close: () => void
}

interface NavigationType {
    data: NavigationData,
    actions: NavigationActions,
}

export const NavigationContext = createContext<NavigationType | undefined>(undefined);

export function useNavigationContext() {
    const context = useContext(NavigationContext);

    if (context === undefined) {
        throw new Error("useNavigationContext must be initialized with an NavigationContext");
    }

    return context;
}

export function NavigationContextProvider ({children}: {children: ReactNode}) {
    const [openNavigation, setOpenNavigation] = useState(false);

    const handleOpenNavigation = () => {
        // If called while navigation is already open
        if (openNavigation) {
            handleCloseNavigation();
            return;
        }
        
        // Main function logic
        setOpenNavigation(true);
    }
    
    const handleCloseNavigation = () => {
        // If called while navigation is already closed
        if (!openNavigation) {
            handleCloseNavigation();
            return;
        }
        
        // Main function logic
        setOpenNavigation(false);
    }

    return (
        <NavigationContext.Provider value={{
            data: {
                isOpen: openNavigation
            },
            actions: {
                open: handleOpenNavigation,
                close: handleCloseNavigation
            }
        }}>
            {children}
        </NavigationContext.Provider>
    )
}