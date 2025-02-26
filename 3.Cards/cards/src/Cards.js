import React from 'react'

// export const Course = () => {
//   return (
//     <div>Course</div>
//   )
// } 

function Cards({ image, title, description }) {
    // const title = props.title;
    // const description = props.description;
    // const { title, description} = props;
    return (
        <>
            <img src={image}></img>
            <div>{title}</div>
            <div>{description}</div>
        </>

    );
}

export default Cards;
