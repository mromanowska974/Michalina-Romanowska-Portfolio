import React from 'react';

function List({title, array}) {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {array.map(skill => (
                <li key={skill}>{skill}</li>
                ))}
            </ul>
        </>
    );
}

export default List;