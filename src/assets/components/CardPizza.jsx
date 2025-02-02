
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 
import "./CardPizza.css"


const CardPizza = ({img, name, price, ingredients}) => {
  return (
    
    
       
        <div className="contenedor_prinsipal">
            <img className="fotoPizza" src={img} alt={name} />
            <div className="tituloPizza">
                <h5>Pizza {name}</h5>
                </div>
                <hr />
                <div className="cajaIngredientes">

               
                <p className="parrafoIngredientes">Ingredients</p>
                <p>🍕{ingredients}</p>
                </div>
                <hr />
                <div className="cajaPrecio">
                    <h4>Precio: ${price}</h4>

                </div>
                <div className="cajaBotones">
                    <button className="btnVer">Ver Más 👀 </button>
                    <button className="btnAñadir">Añadir 🛒</button>

                </div>

            

        
        
    </div>
  )
}

export default CardPizza
