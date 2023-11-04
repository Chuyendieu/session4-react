import React from 'react'

export default function ProductAdd({ setForm, handleAddProduct }) {
    return (
        <div className='productForm_component'>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleAddProduct({
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
                    <p>Time :</p> <input type="date" name='time' placeholder='Time'/>
                </div>
                <div className='form_fields'>
                    <p>Title :</p> <input type="text" name='title' placeholder='input title'/>
                </div>
                <div className='form_fields'>
                    <p>Price :</p> <input type="text" name='price' placeholder='input price'/>
                </div>
                <div className='form_fields'>
                    <p>Status :</p>
                    Chưa xong <input type="radio" name='status' value={"false"} checked />
                    Đã xong <input type="radio" name='status' value={"true"} />  
                </div>
                <button type='submit' className='btn-submit_form btn btn-outline-success'>Add</button>
            </form>
        </div>
    )
}


