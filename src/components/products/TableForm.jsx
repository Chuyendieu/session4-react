import React from 'react'
export default function TableForm({ product, index, handleDeleteProduct, handleUpdateProduct,handleDoneProduct,setUpdate }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.time}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.status ? "đã xong" : "chưa xong"}</td>
      <td>
        <button onClick={() => {
          handleDeleteProduct(product.id)
        }} className='btn btn-outline-primary'>Delete</button>
        <button onClick={() => {
         setUpdate(true)
        }} className='btn btn-outline-warning'>Update</button>
          <button onClick={() => {
          handleDoneProduct(product.id)
        }} className='btn btn-outline-warning'>Done</button>
      </td>
    </tr>
  )
}
