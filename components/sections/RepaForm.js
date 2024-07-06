import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';



export default RepaForm = ({command, setCommand}) =>{
    const [form, setAddress] = useState({
        address : false
    });

    return(
        <>
            {!form.address &&
                <Input label = 'Specialité, ...' placeholder='Specialité'
                 command={command} setCommand={setCommand} recherche='true' />
            }

            {form.address &&
                <Input label='Où? Adresse, Ville, ...' placeholder='Lieu'
                command={command} setCommand={setCommand} recherche='true' />
            }

            <Button text='Suivant' arrow={false} bottom={true} />
        </>
    )
}