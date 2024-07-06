import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const RepaForm = ({ command, setCommand }) => {
    const [form, setForm] = useState({
        address: false
    });

    const suiteForm = () => {
        if (!form.address ) setForm((prevForm) => ({ ...prevForm, address: true }));
    };

    return (
        <>
            {!form.address && (
                <Input 
                    label='Specialité' 
                    placeholder='Specialité'
                    command={command} 
                    setCommand={setCommand} 
                    recherche={true} 
                />
            )}

            {form.address && (
                <Input 
                    label='Où? Adresse, Ville, ...' 
                    placeholder='Lieu'
                    command={command} 
                    setCommand={setCommand} 
                    recherche={true} 
                />
            )}

            <Button onPress={suiteForm} text='Suivant' arrow={false} bottom={true} />
        </>
    );
};

export default RepaForm;
