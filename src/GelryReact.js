import React, { useState } from 'react'
import "./App.css";
import Menu from './Manu';

const GelryReact = () => {
    const [items,setItems] = useState(Menu);

  const filterItem=(cateItem)=>{
    const updatedItems = Menu.filter((curElem)=>{
        return curElem.category === cateItem;
    })
    setItems(updatedItems);
  }

  return (
    <>
     <h1 className='mt-5 text-center main-heading my-5'>Order Your Favourite Dish</h1>
     <hr/>
     <div className='menu-tabs container'>
        <div className='d-flex justify-content-around'>
            <button className='btn btn-warning' onClick={()=> filterItem('Breakfast')}>Breakfast</button>
            <button className='btn btn-warning' onClick={()=> filterItem('Lunche')}>Lunche</button>
            <button className='btn btn-warning' onClick={()=> filterItem('Evenig')}>Evenig</button>
            <button className='btn btn-warning' onClick={()=> filterItem('Dinner')}>Dinner</button>
            <button className='btn btn-warning' onClick={()=> setItems(Menu)}>All</button>
        </div>
     </div> 

     {/* my main items section */}
     <div className='menu-items container-fluid mt-5'>
        <div className='row'>
            <div className='col-11 mx-auto'>
                <div className='row my-5'>
                
                {
                    items.map((elem)=>{
                       const {id,Name,image,category,price,descrptions} =elem;

                       return(
                        <div className='item1 col-12 col-md-6 col-lg-6 col-sl-4'>
                        <div className='row item-inside'>
                        {/* for image */}
                            <div className='col-12 col-md-12 collg-4 img-div'>
                              <img src={image} alt='menu-item' className='imgfluid'/>
                            </div>
                            {/* menu items description */}
                            <div className='col-12 col-md-12 col-lg-8'>
                                <div className='maine-title pt-4 pb-3'>
                                    <h1>{Name}</h1>
                                    <p>{descrptions}</p>
                                </div>
                                <div className='menu-price'>
                                    <div className='price-book d-flex justify-content-between'>
                                        <h2>{price}</h2>
                                        <a href='#'>
                                            <button className='btn btn-primary'>Order Now</button>
                                        </a>
                                    </div>
                                    <p>*Prices may vary on selected date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                       )
                    })
                }
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default GelryReact
