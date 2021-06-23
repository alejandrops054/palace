import React from 'react'
import Button from '../../ui/Button'

const InputButtons = () =>{

    return (
        <>
          <Button icon={"fas fa-times"} typebootstrap="secondary" col={12} style={{width:'100%'}}/>
          <br />
          <Button icon={"far fa-check"} typebootstrap="primary" col={12} style={{width:'100%'}} />
        </>
    );
}

export default InputButtons;