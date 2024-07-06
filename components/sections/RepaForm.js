import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const RepaForm = ({ command, setCommand }) => {
    const [form, setForm] = useState({
        address: false,
        artisan: false
    });

    const suiteForm = () => {
        if (!form.address &&  !form.artisan) setForm((prevForm) => ({ ...prevForm, address: true }));
    };

    const precedForm = () => {
        if(form.address && !form.artisan) setForm((prevForm) => ({ ...prevForm, address: false, artisan : false }));
    }

    return (
        <>
            {!form.address && !form.artisan && (
                <Input 
                    label='Specialité' 
                    placeholder='Specialité'
                    command={command} 
                    setCommand={setCommand} 
                    recherche={true} 
                />
            )}

            {form.address && !form.artisan && (
                <Input 
                    label='Où? Adresse, Ville, ...' 
                    placeholder='Lieu'
                    command={command} 
                    setCommand={setCommand} 
                    recherche={true} 
                />
            )}
            
            <Button onPress={precedForm} text='Précédent' arrow={false} bottom={true} />
            <Button onPress={suiteForm} text='Suivant' arrow={false} bottom={true} />
        </>
    );
};

export default RepaForm;
