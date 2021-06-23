import React from 'react';
import { Link } from 'react-router-dom'

const Note = (props) => {

    const className = props.className
    const notes = [
        { title: 'Beneficiaries...', user: 'ISORIANO', date: '21/11/2020', to:'/note-beneficiaries' },
        { title: 'Inserted credit...', user: 'ISORIANO', date: '22/11/2020', to:'/'},
        { title: 'Inserted credit...', user: 'ISORIANO', date: '23/11/2020', to:'/' },
        { title: 'Inserted credit...', user: 'ISORIANO', date: '24/11/2020', to:'/' },
        { title: 'Inserted credit...', user: 'ISORIANO', date: '25/11/2020', to:'/' },
    ];


    return (
    <div className={className} >
        <label>Notes</label>

        <ul className="menu">
            {
                notes.map( note => (
                    <li key={note.date}>
                        <Link to={note.to}>
                            <p><i className="fas fa-sticky-note mr-2"></i><span>{note.title}</span></p>
                            <footer className="note-meta">
                                <small><i className="fas fa-user"></i>{ note.user }</small>
                                <small><i className="fas fa-calendar"></i>{ note.date }</small>
                            </footer>
                        </Link>
                    </li>
                ))
            }
        </ul>

        <Link to="!#" className="btn btn-link d-block">View more<i className="fas fa-arrow-circle-right ml-2"></i></Link>
    </div>
    );
}
 
export default Note;