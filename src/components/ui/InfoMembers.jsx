import React from 'react'

const Verde = {
    color: "#233586"
}

const InfoMembers = (props) => {
    return (
        <div className="container" >
            <h7>{props.title}</h7>
            <p className='pt-3' style={!props.color ?Verde :{color: `${props.color}`}}>{props.text}</p>
        </div>
    )
}

export default InfoMembers;