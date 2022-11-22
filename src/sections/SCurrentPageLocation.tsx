import React from 'react';
import { NavLink } from 'react-router-dom'

const SCurrentPageLocation = (currentPage: any) => {
  return (
    <section className="current-page-location">
      <div className="_container">
        <ul className="location-text">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products"></NavLink>
          </li>
          <li>{/* {currentPage} */}</li>
        </ul>
      </div>
    </section>
  )
}

export default SCurrentPageLocation;
