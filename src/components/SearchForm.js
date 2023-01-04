import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // uncontrolled input
  const searchValue = React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus();
  },[])
  //moment app renders the input will have focus

  const searchPlant = () => {
    setSearchTerm(searchValue.current.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  //if user is pressing enter the app does not refresh

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'> search your favorite plant</label>
          <input type='text' id='name' ref={searchValue} onChange={searchPlant}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm

//everytime the user type something in the input we want to invoke setSearchTerm, which will effect the useEffect
