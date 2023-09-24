import React from 'react';

const Category = ({category}) => {
    const {id,name,icon,available}=category;
    return (
      <div className="bg-indigo-50 p-7 rounded-md">
        <div className='p-1 inline-block bg-indigo-100'>
          <img className="" src={icon} alt="" />
        </div>
        <p className='mt-2 text-sm font-semibold'>{name}</p>
        <p className='text-xs text-gray-500 mt-2'>{available} jobs available</p>
      </div>
    );
};

export default Category;