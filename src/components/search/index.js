import React from 'react';

const Search = (props) => {
    let inputElement = null;
    switch (props.inputType) {
        case ('input'):
            inputElement = <input {...props}/>;
            break;
        case ('textarea'):
             inputElement = <textarea {...props}/>;
               break;
        default:
             inputElement = <input {...props} />
        }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
            {console.log(props)}
        </div>
    );
};

export default Search;