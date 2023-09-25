import { TextInput, Button } from '@carbon/react'
import React, { useState } from 'react'
import './inputs.scss'


export const TextInputs = () => {

    const [first, setFirst] = useState('')
    const textHandler = (event: any) => {
        console.log(event.target.value)
        setFirst(event.target.value)

    }

    const showingText = () => {
        alert('Value entered was: ' + first)
    }
    return (
        <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
            <TextInput style={{ margin: 10 }} id="text-input-1" type="text" labelText="Name" helperText="Optional help text" onChange={textHandler} />
            <div className="separator"></div>
            <TextInput style={{ margin: 10 }} id="text-input-2" type="text" labelText="Last Name" helperText="Optional help text" />
            <div className="separator"></div>
            <TextInput style={{ margin: 10 }} id="text-input-3" type="text" labelText="Email" helperText="Optional help text" />
            <div className="separator"></div>
            <TextInput style={{ margin: 10 }} id="text-input-4" type="text" labelText="City" helperText="Optional help text" />
            <Button onClick={showingText}>Click</Button>
        </div>
    )
}