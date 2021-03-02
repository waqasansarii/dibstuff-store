import React from 'react'
import './style.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import check from '../../assets/checked.png'
import { Link } from 'react-router-dom'


const Card = ({ heartNum, img, sallerImg, sallerName, price, size, onClick, path, id, itemName }) => {
    return (
        <div className='card_container'>
            <div className='cards_div'>

                <div className='main_card_div' key={id}>
                    <div className='heart_div'>
                        <FavoriteBorderIcon className='heart' />
                        <p className='num_hearts'>{heartNum}</p>
                    </div>
                    <Link to={path}>
                        <div>
                            <img className='item_img'
                                src={img}
                                alt="product" />
                        </div>
                    </Link>
                    <div className='saller_div'>
                        <img className='saller_img' src={sallerImg} alt="" />
                        <p className='saller_name'>{sallerName}</p>
                    </div>
                    <div className='item_name'>
                        <p>{itemName}</p>
                    </div>
                    <div className='product_price_size_div'>
                        <p className='price'>Price: ${price}</p>
                        <p className='size'>Size: {size}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card