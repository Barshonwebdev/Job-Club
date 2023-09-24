import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { data } from 'autoprefixer';

const Categories = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
      <div className="md:mt-20 mt-10">
        <p className="text-center font-semibold text-2xl md:text-3xl">
          Job Category List
        </p>
        <p className="text-center text-sm mt-3 text-gray-500">
          Categorized efficiently, find your appropriate job at a glance!
        </p>
        <div className='flex justify-center gap-3 md:gap-10 mt-10 md:flex-row flex-col text-center md:text-start mx-3'>
          {categories.map(category => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </div>
    );
};

export default Categories;