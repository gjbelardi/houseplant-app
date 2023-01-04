import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
// export const APIT_ENDPOINT = `https://house-plants.p.rapidapi.com?rapidapi-key=${process.env.REACT_APP_PLANT_API_KEY}`
// console.log(APIT_ENDPOINT);
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [plants, setPlants] = useState([]);
   //^^ state values

   const fetchPlants = useCallback (async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const {drinks} = data;
      if(drinks) {
        const newPlants = drinks.map((item)=>{
          //now distructering those properties out of the objects from api
          const {
            idDrink,
            strDrink,
            strDrinkThumb, 
            strAlcoholic, 
            strGlass
          } = item;
          return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass
          }
        })
        setPlants(newPlants);
        //after mapped over
      } else {
        setPlants([]);
        //if data is null, still recieving just nothing there so not error
      }
    setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[searchTerm])

  useEffect(() =>{
    fetchPlants();
  }, [searchTerm])
  //invokes the function fetchPlants
  
  
  return <AppContext.Provider 
    value={{
      loading,
      searchTerm,
      plants,
      setSearchTerm,
  }}>{children}</AppContext.Provider>}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

//can use these value terms in global contect and pass in the app context


export { AppContext, AppProvider }
