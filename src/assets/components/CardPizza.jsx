
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 
import "./CardPizza.css"



const CardPizza = ({name,img,price,ingredients,desc}) => {
  
  return (
    <div className="card h-100">
      <img src={img} alt={name} className="card-img-top" style={{height:"200px",objectFit:"cover"}} />
      <div className="card-body">
        <h5 className="card-title text-capitalize"></h5>
        <h6>Ingredients</h6>
        <ul>
          {ingredients.map((ingrediente,index)=>(
            <li key={index}>{ingrediente}</li>
          ))}

        </ul>
        <p className="card-text">
          {desc}

        </p>

      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <span className="fw-bold">Precio:  ${price}</span>
        <button className="btn btn-primary">
          añadir al carro
        </button>
      </div>
    </div>
  )
}
  
    
    
      {/*
         <div className="cajaPizza">
        <div className="contenedor_prinsipal">
            <img className="fotoPizza" src={img} alt={name} />
            <div className="tituloPizza">
                <h5>Pizza {name}</h5>
                </div>
                <hr />
                <div className="cajaIngredientes">
                <p className="parrafoIngredientes">Ingredientes
                
                
                </p>
                  <div className="ingredientes">
                  <ul>
                  {ingredients.map((ingrediente,index)=>(
                    <li key={index}>{ingrediente}</li>

                  ))}
                </ul>

                  </div>
                

               
               
                </div>
                <hr />
               
                <hr />
                <div className="cajaPrecio">
                    <h4>Precio: ${price}</h4>

                </div>
                <div className="cajaBotones">
                    <button className="btnVer">Ver Más 👀 </button>
                    <button className="btnAñadir">Añadir 🛒</button>

                </div>

            

        
        
    </div>
 
    </div>
*/}

    
    
    

export default CardPizza
