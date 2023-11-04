import React, { useState } from 'react'
import ProductAdd from './ProductAdd';
import TableForm from './TableForm';
import UpdateProduct from './UpdateProduct';
import './form.scss'
export default function FormTable() {
    const [products, setProducts] = useState([
        {
          time: "19/11/2023",
          title: "sp1",
          price: 345600,
          status: false 
        },
      ])
    const [form, setForm] = useState(false);
    const [update, setUpdate] = useState(false);

    function handleAddProduct(newProduct) {
        setProducts([...products, newProduct])
    }

    function handleDeleteProduct(productId) {
        setProducts(products.filter(product => product.id != productId))
    }
    
    function handleUpdateProduct(newProduct) {
        setProducts([...products, newProduct])
    }


    function handleUpdateProduct(productId) {
        setProducts(products.map(product => {
            if (product.id == productId) {
                product.time =Date(prompt("nhập time mới")) ,
                product.title = prompt("nhập title mới"),
                product.price = prompt("nhập price mới"),
                product.status = prompt("nhập status mới") ? true : false
            }
            return product
        }
        ))
    }
    return (
        <>
            <button onClick={() => {
                setForm(true)
            }} className='btn btn-outline-success'>Add</button>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Time</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return <TableForm handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} key={Date.now() * Math.random()} product={product}  index={index}/>        
                        })
                        
                    }
                </tbody>
            </table>
            {
                form && <ProductAdd handleAddProduct={handleAddProduct} setForm={setForm}/>
            }
          {
                update && <UpdateProduct handleAddProduct={handleAddProduct} setUpdate={setUpdate}/>
            }
        </>
    )
}
