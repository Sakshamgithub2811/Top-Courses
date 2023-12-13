import React, { Fragment } from 'react';
import Card from './Card';

const Cards = ({courses}) => {
  console.log(courses);

  let allCourses = [];

  const getCourses = () =>{
    Object.values(courses).forEach((coursesCategory)=>{
      coursesCategory.forEach((course)=>{
          allCourses.push(course);
      })

    })
    return allCourses;
  }
  return (
<Fragment>
  {
    getCourses().map((course)=>{
      <Card/>
    })
  }
</Fragment>
  )
}

export default Cards
