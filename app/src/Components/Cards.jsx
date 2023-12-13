import React, { Fragment } from 'react';
import Card from './Card';

const Cards = ({ courses }) => {
  console.log(courses);

  let allCourses = [];
//approach 1
  const getCourses = () => {
    Object.values(courses).forEach((coursesCategory) => {
      coursesCategory.forEach((course) => {
        allCourses.push(course);
      })

    })
    return allCourses;
  }
//approach 2
  // const getCourses = () => {
  //   return [].concat(...Object.values(courses));
  // }; 
//approach 3
  // const getCourses = () => {
  //   return Object.values(courses).flatMap(courseCategory => courseCategory);
  // };
  return (
    <Fragment>
      {
        getCourses().map((course) => {
          <Card />
        })
      }
    </Fragment>
  )
}

export default Cards
