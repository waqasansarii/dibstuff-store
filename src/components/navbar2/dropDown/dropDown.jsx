import React, { useState } from 'react'
import './style.css'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SubCategories from './subCategories'

let clothesObj = {
    list_one: [
        { path: '/', value: 'See All', id: '1' },
        { path: '/sweter', value: 'sweter', id: '2' },
        { path: '/sweter', value: 'dresses', id: '3' },
        { path: '/sweter', value: 'jackets', id: '4' },

    ],
    list_two: [
        { path: '/sweter', value: 'shirts', id: '5' },
        { path: '/sweter', value: 'pents', id: '6' },
        { path: '/sweter', value: 'skirts', id: '7' }
    ]
}

let shoesObj = {
    list_one: [
        { path: '/', value: 'See All', id: '0' },
        { path: '/', value: 'nike', id: '10' }
    ],
    list_two: [
        { path: '/', value: 'bata', id: '10' }

    ]
}
let obj3 = {
    list_one: [
        { path: '/', value: 'See All', id: '34' },
        { path: '/', value: 'bags', id: '45' }
    ],
    list_two: [
        { path: '/', value: 'toys', id: '45' }

    ]
}

const DropDown = ({ all, clothes, bags, toys, grooming, shoes, tab }) => {

    let [value, setValue] = useState('clothes')

    const handleClick = e => {
        setValue(e)
        // console.log(e)
    }
    //  console.log(tab)
    return (
        <div className="dropdown_container">
            <div className="main_dropdown_div">
                <div className="sub_dropdown_div">
                    <div className="menu_div">
                        <ul className="menu_ul">
                            <li>
                                <div className='square_dot'>
                                    <DragIndicatorIcon className='menu_icon' />
                                    <MoreVertIcon className='dot' />
                                </div>
                                <p >{all}</p>
                            </li>
                            <li onClick={() => handleClick('clothes')}>
                                <LocalMallIcon className='menu_icon' />
                                <p className={value === 'clothes' ? 'black' : 'grey'}>{clothes}</p>
                            </li>
                            <li onClick={() => handleClick('shoes')}>
                                <LocalMallIcon className='menu_icon' />
                                <p className={value === 'shoes' ? 'black' : 'grey'}>{shoes}</p>
                            </li>
                            <li onClick={() => handleClick(bags ? 'bags' : grooming ? 'grooming' : 'toys')}>
                                <LocalMallIcon className='menu_icon' />
                                <p className={value === 'bags' ? 'black'
                                    : value === 'grooming' ? 'black'
                                        : value === 'toys' ? 'black'
                                            : null
                                }
                                >
                                    {bags ? bags : grooming ? grooming : toys}
                                </p>

                            </li>
                        </ul>
                    </div>
                    <SubCategories value={tab === 'women' ? value === 'clothes' ? clothesObj
                        : value === 'shoes' ? shoesObj
                            : value === 'bags' ? obj3
                                : null
                        : tab === 'men' ? value === 'clothes' ? clothesObj
                            : value === 'shoes' ? shoesObj
                                : value === 'grooming' ? obj3
                                    : null
                            : value === 'clothes' ? clothesObj
                                : value === 'shoes' ? shoesObj
                                    : obj3
                    }

                        category={value} />
                </div>
            </div>
        </div>
    )
}
export default DropDown