import React, { useState } from 'react';

const AddFav =(props)=>{
        const [name, setName] = useState('')
        const [img, setimg] = useState('')
        const [price, setPrice] = useState('')
        const handleChange = (e) =>{
            if(e.target.name === 'name')
                setName(e.target.value)
            if(e.target.name === 'img')
                setimg(e.target.value)
            if(e.target.name === 'price')
                setPrice(e.target.value)
        }
        const handleSubmit = (e) =>{
            e.preventDefault();
            props.handleSpecial(name, img, price);
        }
        return(
        <div className='addFav'>
            <h2>Add Today's Special</h2>
            <form className='addFavForm' onSubmit={handleSubmit}>
                Dish Name: <input type='text' onChange={handleChange} name='name'required/>
                Dish Image: <input type='text'onChange={handleChange} name='img' placeholder='Add Img Link' required/>
                Dish Price: <input type='number'onChange={handleChange} name='price' required/><br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default AddFav