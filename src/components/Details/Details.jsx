import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const data= useLoaderData();
    console.log(data)
    let {detailId}= useParams();
    console.log(detailId);
    const idNumber=parseInt(detailId);
    const post=data.find((ob)=>ob.id===idNumber);
    console.log(post);
    return (
        <div>
            <p>details:</p>
        </div>
    );
};

export default Details;