import React, {useState} from 'react'


const Searchbar=()=> {
    const [value,setValue]=useState('')
    const handleValue=()=>setValue({ value: target.value })
    return (
        <div>
          <form>
             <input
            type="text"
            value={value}
            onChange={handleValue}
            placeholder="Search your emoji"
          />
          <button>
            <span role="img" aria-label="search">
              Search 🔍
            </span>
          </button>
        
      </form>
        </div>
    )
}

export default Searchbar
