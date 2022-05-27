import React from 'react';
import './Search.css' 

const Search = ({ handleOnSubmit, setInput, input }) => {

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className='search'>
            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    placeholder='Search...'
                    autoComplete='off'
                    value={input}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                >
                    Search</button>
            </form>
        </div>
    )
}

export default Search