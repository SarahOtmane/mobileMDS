import React, { createContext, useState } from 'react';
export const CommandContext = createContext();

export const CommandProvider = ({ children }) => {
    const [command, setCommand] = useState({
        specialite: '',
        adresse: ''
    });

    return (
        <CommandContext.Provider value={{ command, setCommand }}>
            {children}
        </CommandContext.Provider>
    );
};
