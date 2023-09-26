import { TextInput, Button } from '@carbon/react'
import React, { useState } from 'react'
import './inputs.scss'
import { UserInterface } from '../interfaces/Interfaces'
import { useData } from '../hooks/useData'

export const TextInputs = () => {

    const [users, setUsers] = useState<UserInterface[]>([
        { id: '', name: '', lastName: '', city: '', email: '' }
    ])

    const { updatingAddValuesFunction } = useData()

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setUsers(prevUsers => {
            return prevUsers.map((user, index) => {
                if (index === 0) {
                    return { ...user, name: value };
                } else {
                    return user;
                }
            });
        });
    };

    const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setUsers(prevUsers => {
            return prevUsers.map((user, index) => {
                if (index === 0) {
                    return { ...user, lastName: value };
                } else {
                    return user;
                }
            });
        });
    };

    const cityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setUsers(prevUsers => {
            return prevUsers.map((user, index) => {
                if (index === 0) {
                    return { ...user, city: value };
                } else {
                    return user;
                }
            });
        });
    };

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setUsers(prevUsers => {
            return prevUsers.map((user, index) => {
                if (index === 0) {
                    return { ...user, email: value };
                } else {
                    return user;
                }
            });
        });
    };



    const submittingData = () => {
        updatingAddValuesFunction(users);
        console.log(users)
    }


    const showingText = () => {
        users.map(u => {
            console.log(u.name + " ************")
        })
    }
    return (
        <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
            <TextInput style={{ margin: 10 }} id="text-input-1" type="text" labelText="Name" helperText="Optional help text" onChange={nameHandler} />
            <div className="separator"></div>
            <TextInput style={{ margin: 10 }} id="text-input-2" type="text" labelText="Last Name" helperText="Optional help text" onChange={lastNameHandler} />
            <div className="separator"></div>
            <TextInput style={{ margin: 10 }} id="text-input-3" type="text" labelText="Email" helperText="Optional help text" onChange={emailHandler} />
            <div className="separator"></div>
            <TextInput style={{ margin: 10 }} id="text-input-4" type="text" labelText="City" helperText="Optional help text" onChange={cityHandler} />
            <Button onClick={submittingData}>Click</Button>
        </div>
    )
}