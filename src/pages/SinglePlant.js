import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SinglePlant = () => {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false);
  const [plant, setPlant] = React.useState(null);

  React.useEffect(()=>{
    setLoading(true);
    async function getPlant() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if(data.drinks) {
          const {
            strDrink:name,
            strDrinkThumb:image,
            strAlcoholic:info,
            strCategory:category,
            strGlass:glass,
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]

          const newPlant = {
            name,image,info,category,glass,instructions,ingredients
          }
          
          setPlant(newPlant);
        } else {
          setPlant(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPlant();
  },[id])

  if(loading) {
    return <Loading />
  }

  if(!plant) {
    return <h2 className='section-title'>no plant to display</h2>
  }
  //if plant is null

  const {name,image,category,info,glass,instructions,ingredients} = plant;

  return (
    <section className='section plant-section'>
    <Link to="/" className="btn btn-primary">back home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className='type'>
        <img src={image} alt={name}/>
        <div className='type-info'>
          <p>
            <span className='type-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='type-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='type-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='type-data'>instructions :</span>
            {instructions}
          </p>
          <div>
            <span className='type-data'>ingredients :</span>
            <ul className='info-list'>
            {ingredients.map((item,index)=>{
              return item? <li key={index}>{item} </li> : null
            })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePlant
