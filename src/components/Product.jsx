import React from "react";
import "./product.css";
import image1 from "../assets/shoe_1.jpg";

export default function Product() {
  return (
    // <div classNameName="products">
    //   {/* // -- single product -- */}
    //   <div className="product">
    //     <div className="product-content">
    //       <div className="product-img">
    //         <img src={image1} alt="product image" />
    //       </div>
    //       <div className="product-btns">
    //         <button type="button" className="btn-cart">
    //           {" "}
    //           add to cart
    //           <span>
    //             <i className="fas fa-plus"></i>
    //           </span>
    //         </button>
    //         <button type="button" className="btn-buy">
    //           {" "}
    //           buy now
    //           <span>
    //             <i className="fas fa-shopping-cart"></i>
    //           </span>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="product-info">
    //       <div className="product-info-top">
    //         <h2 className="sm-title">lifestyle</h2>
    //         <div className="rating">
    //           <span>
    //             <i className="fas fa-star"></i>
    //           </span>
    //           <span>
    //             <i className="fas fa-star"></i>
    //           </span>
    //           <span>
    //             <i className="fas fa-star"></i>
    //           </span>
    //           <span>
    //             <i className="fas fa-star"></i>
    //           </span>
    //           <span>
    //             <i className="far fa-star"></i>
    //           </span>
    //         </div>
    //       </div>
    //       <a href="#" className="product-name">
    //         mens shoes DN 23XX, new product
    //       </a>
    //       <p className="product-price">$ 150.00</p>
    //       <p className="product-price">$ 133.00</p>
    //     </div>

    //     <div className="off-info">
    //       <h2 className="sm-title">25% off</h2>
    //     </div>
    //   </div>
    //   {/* // <-- end of single product --> */}
    // </div>
    <React.Fragment>
      <div className="cards-overlay">
        <div className="product-card">
          <i className="far fa-heart"></i>
          <img
            src="https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg"
            alt="product"
          ></img>
          <div className="product-description">
            <h4>€2,259</h4>
            <h5>Chanel</h5>
            <p>Bag/Purse Leather</p>
            <p>onesize</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
