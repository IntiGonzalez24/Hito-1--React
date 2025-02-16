import CardPizza from "./CardPizza"
import Header from "./Header"
import { pizzas } from "../../data/pizzas"
import "./CardPizza.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js' 
import Cart from "./Cart"


const Home = () => {
  return (
    <>
    <Header />
    <div className="container mt-5 pt-4">
      <h1 className="text-center mb-4">Pizzas</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {pizzas.map((pizza) =>(
        <CardPizza key={pizza.id}
        name={pizza.name}
        img={pizza.img}
        desc={pizza.desc}
        ingredients={pizza.ingredients}
        price={pizza.price} />
      ))}
      </div>

    </div>

    <Cart />
    

    
    {/*
    <main className="container my-5 py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4"></div>
      {pizzas.map((pizza) =>(
        <CardPizza key={pizza.id}
        name={pizza.name}
        img={pizza.img}
        desc={pizza.desc}
        ingredients={pizza.ingredients}
        price={pizza.price} />
      ))}
    </main>
    */}
    
    {/*<CardPizza name="Napolitana" price={5950} ingredients={["mozzarella ", "tomates ", "jamón ", "orégano "]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"  />
    <CardPizza name="Española" price={6950} ingredients={["mozzarella ", "gorgonzola ", "parmesano ", "provolone "]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"/>
                <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella ", "pepperoni ", "orégano "]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"/>*/}

    
    
   
    
    </>
  
  )
}

export default Home
