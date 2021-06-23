import React from 'react';

const CustomerResult = () => {

    const infoMember = {
        name: 'John Doe',
        imagePath: '/static/media/unknown-user.a373f7fc.svg',
        typeMember: 'New Member',
        age: 32,
        office: 'Sunrise',
        project: 'Palace Elite',
        application: '1234567',
        currentamount: 2500,
        totalamount: 12000
    }

    return (
        <div className="customer-data">
            <div className="customer-resume">
                <div className="customer-avatar">
                    <div className="customer-photo">
                        <img src={ infoMember.imagePath } alt="memberImagen" />
                    </div>
                </div>

                <div className="customer-meta">
                    <h2>{ infoMember.name }</h2>
                </div>
            </div>
        </div>
     );
}
 
export default CustomerResult;