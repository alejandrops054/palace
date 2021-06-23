import React from "react";
//test
//title: string
//text: string
//icon: string
//

const Tr = ({ title="", text="", icon="" }) => {
    return (
        <tr>
            <th scope="col"><i className={icon}></i> {title}</th>
            <td>{text}</td>
        </tr>
    );
};

export default Tr;