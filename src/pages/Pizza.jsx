import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 


const Pizza = () => {
   const [pizza, setPizza] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
       const fetchPizza = async () => {
           try {
               const response = await fetch('http://localhost:5000/api/pizzas/p001')
               if (!response.ok) {
                   throw new Error('Error al cargar la pizza')
               }
               const data = await response.json()
               setPizza(data)
           } catch (error) {
               setError(error.message)
           } finally {
               setLoading(false)
           }
       }
       fetchPizza()
   }, [])

   if (loading) return <div className="text-center mt-5">Cargando pizza...</div>
   if (error) return <div className="text-center mt-5 text-danger">{error}</div>
   if (!pizza) return <div className="text-center mt-5">No se encontró la pizza</div>

   return (
    <>
    

    

      
       <div className="container mt-5 h-100" >
  <div className="row">
    <div className="col">
      <img src={pizza.img} alt="" />
    </div>
    <div className="col border">
        <div className='card-body'>
            <h2 className='card-title mt-2'>
                {pizza.name}
            </h2>
            <p className='card-text mt-3'>
                {pizza.desc}
            </p>
            <h5 className="mt-3">Ingredientes:</h5>
            <ul className="list-unstyled">
                {pizza.ingredients.map((ingredient,index) => (
                    <li key={index}>🍕 {ingredient}</li>
                    ))}
            </ul>
            <div className='d-flex flex-row-reverse bd-highlight mt-5'>
            <button className='btn btn-danger ms-3 mx-5'>
                    Añadir al carro
                </button>
                <h3 className='text-success'>
                 Precio: ${pizza.price}
                </h3>
                

            </div>

        </div>
      
    </div>
    
  </div>
</div>


  
  
                   


    </>
   )
}

export default Pizza