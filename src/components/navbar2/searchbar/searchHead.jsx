import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './style.css'



const SearchBar=()=>{


    let [value, setValue] = useState('')
    let [select, setSelect] = useState('Items')

    const handleChange =(e)=> {
        setValue(e.target.value)
    }

    const handleSelect =(e)=>{
        setSelect(e.target.value)
    }

    return(
        <div>
            <div className='search_container'>
                <div className='select_div'>
                    <select name="" id="" className='select' onChange={handleSelect}>
                        <option value="Items" defaultValue={value}>Catalog</option>
                        <option value="Members">Members</option>
                        <option value="Forum">Forum</option>
                        <option value="Help Center">Help Center</option>
                    </select>
                </div>
                <div className='search_div'>
                    <SearchIcon className='search_icon' />
                    <input className='search_bar'
                     type="text"
                      placeholder={`search  ${select}`}
                      onChange={handleChange}
                      value={value}
                      />
                      {value?
                    <div className='clear_search' onClick={()=>setValue('')}>
                        <p >&times;</p>
                    </div>
                    :
                    null
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchBar