import React from "react";
import subheader from "../assets/subheader.jpeg";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { Button } from "../components/Navbar/Button";
import Card from '../components/card/card'

const cardData = [
  {
    no_Of_heart:3,
    img:'https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg',
    sallerImg:'https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg',
    sallerName:'abc',
    price:45,
    size:'small',
    path:'/offer',
    item:'bag',
    id:'1'
  },
  {
    no_Of_heart:7,
    img:'https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg',
    sallerImg:'https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg',
    sallerName:'defg',
    price:66,
    size:'large',
    path:'/offer',
    item:'bag',
    id:'2'
  },
  {
    no_Of_heart:14,
    img:'https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg',
    sallerImg:'https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg',
    sallerName:'sallerr',
    price:43,
    size:'xl',
    path:'/offer',
    item:'bag',
    id:'3'
  }
]

export default function Home() {
  return (
    <React.Fragment>
      <div className="subheader">
        <img src={subheader}  alt="Vinted-Subheader" />
        <div>
          <p>Ready to declutter your wardrobe?</p>
          {/* <button>Sell Now</button> */}
          <Button>Sign Up</Button>
        </div>
      </div>
      <div className='card__div'>

      {
        cardData.map((value)=>{
          return(
            <Card
            heartNum={value.no_Of_heart} 
            img={value.img}
            sallerImg={value.sallerImg}
            sallerName={value.sallerName}
            price={value.price}
            size={value.size}
            path={value.path}
            itemName={value.item}
            id={value.id}
            />
            
            )
          })
        }
        </div>
      <Link to="/offer">
        {/* <Product /> */}
      </Link>
    </React.Fragment>
  );
}
