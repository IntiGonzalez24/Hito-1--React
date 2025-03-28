import React, { useContext, useState } from 'react'
import { pizzaCart } from "../data/pizzas"
import { userContext } from '../context/UserContext'
import Swal from 'sweetalert2'

const Cart = () => {
    const {tokenBoton,logoutBoton} =useContext(userContext);
    const [cart,setCart] = useState(pizzaCart)

    const handleClick=() =>{
        Swal.fire({
            title: "Gracias por su compra",
            text: "El pedido esta siendo preparado",
            icon: "success"
          });

    }   
    const calcularTotal = () =>{
        let total =0;
        cart.forEach((item)=>{
            total += item.price * item.count
        })
        return total
    }

    const aumentarCantidad = (id) =>{
        const nuevoCart = cart.map((item) =>{
            if(item.id === id){
                return { 
                    ...item,
                    count: item.count +1,
                }
                   
                
            }
            return item
        })
        setCart(nuevoCart)

    }

    const disminuirCantidad = (id) =>{
        const nuevoCartMenos = cart.map((item)=>{
            if(item.id === id){
                return {
                    ...item,
                    count: item.count -1,
                    
                }
            }
            if(item.count <0){
                alert("No puede ser menor a 0")

            }
            return item
        })
        setCart(nuevoCartMenos)
    }
  return (
    <div className='container mt-5'>
        <h2 className='text-center mb-4'>Carrito de compras</h2>
        {cart.map((item)=>(
             <div className='card mb-3' key={item.id}>
             <div className='row g-0'>
                 <div className='col-md-4'>
                     <img className='img-fluid rounded-start' src={item.img} alt={item.name} style={{height:"200px",objectFit:"cover"}} />
 
                 </div>
                 <div className='col-md-8'>
                     <div className='card-body'>
                         <h5 className='card-title text-capitalize'>{item.name}</h5>
                         <p className='card-text'>precio: ${item.price}</p>
                         <div className='d-flex align-items-center gap-2'>
                             <button className='btn btn-outline-danger' onClick={()=>disminuirCantidad(item.id)} >
                                 -
 
                             </button>
                             <span>{item.count}</span>
                             <button className='btn btn-outline-success' onClick={()=>aumentarCantidad(item.id)} >

                                 +
 
                             </button>
                         </div>
                     </div>
                 </div>
 
             </div>
         </div>

        ))}
        
            <div className='botonComprar'>
            <button className='btn btn-primary ' onClick={handleClick}  disabled={!tokenBoton}>Pagar</button>
            <h3 className='totalCompra'>Total: ${calcularTotal()}</h3>

            </div>
           
            

      
      

       
       
      
    </div>
  )
}

export default Cart
