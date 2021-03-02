import React from 'react'
import { Link } from 'react-router-dom'

let obj = [
    { path: '/', value: 'See All', id: '1' },
    { path: '/', value: 'abs', id: '2' }
]


const SubCategories = ({ value }) => {

    return (

        <div className='sub_category_container'>
            <div>

                {value.list_one.map((val) => {
                    return (
                        // <>
                        <div className='sub_category_div' key={val.id}>
                            <ul className='subCategory_ul'>
                                <li>
                                    <Link className='Link' to={val.path}>
                                        {val.value}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        // </>
                    )
                })}
            </div>
            <div>

                {value.list_two.map((val) => {
                    return (
                        // <>
                        <div className='sub_category_div' key={val.id}>
                            <ul className='subCategory_ul'>
                                <li>
                                    <Link className='Link' to={val.path}>
                                        {val.value}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        // </>
                    )
                })}
            </div>
        </div>


    )
}
export default SubCategories