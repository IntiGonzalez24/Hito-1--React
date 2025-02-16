import React from 'react'

const Cart = () => {
  return (
    <div className='container mt-5'>
        <h2 className='text-center mb-4'>Carrito de compras</h2>
        <div className='card mb-3'>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img className='img-fluid rounded-start' src="" alt="" style={{height:"200px",objectFit:"cover"}} />

                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title text-capitalize'>Nombre del item</h5>
                        <p className='card-text'>precio:</p>
                        <div className='d-flex align-items-center gap-2'>
                            <button className='btn btn-outline-danger' >
                                -

                            </button>
                            <span>cantidad</span>
                            <button className='btn btn-outline-success' >
                                +

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Cart
