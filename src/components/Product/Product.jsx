import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductsAction } from '../../redux/Actions/ProductAction'

const Product = () => {

    const { products } = useSelector((state) => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 my-4">
                    <Link to='/product/create'>
                        <button className='btn btn-outline-success'>Create</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    products &&
                    products.map((product) => (
                        <div key={product.id} className="col-lg-3">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img style={{ height: 200 }} className='img-fluid' src={product.coverPhoto} alt="" />
                                    <h4>{product.name}</h4>
                                </div>
                                <div className="card-footer">
                                    <div className="row text-center" >
                                        <div className="col-lg-6">
                                            <button className='btn btn-outline-danger w-100'>Delete</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <button className='btn btn-outline-warning w-100'>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Product