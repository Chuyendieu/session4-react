import React from 'react'

export default function FormAdd({ setForm, handleUpdateProduct }) {
    return (
        <div className='productForm_component'>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleUpdateProduct({
                    id: Date.now() * Math.random(),
                    time: event.target.time.value,
                    title: event.target.title.value,
                    price: event.target.price.value,
                    status: event.target.status.value == "chua xong" ? true : false
                })

                setForm(false)
            }} className='form_content'>
                <button onClick={() => {
                    setForm(false)
                }} className='btn-form_close btn btn-outline-danger'>X</button>
                <div className='form_fields'>
                    <p>time :</p> <input type="date" name='time' />
                </div>
                <div className='form_fields'>
                    <p>title :</p> <input type="text" name='title' />
                </div>
                <div className='form_fields'>
                    <p>price :</p> <input type="text" name='price' />
                </div>
                <div className='form_fields'>
                    <p>status :</p>
                    Chưa xong <input type="radio" name='status' value={"false"} checked />
                    Đã xong <input type="radio" name='status' value={"true"} />  
                </div>
                <button type='submit' className='btn-submit_form btn btn-outline-success'>Update</button>
            </form>
        </div>
    )
}