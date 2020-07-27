import React from 'react';

const Categories = ({children, listName}) => {
  return (
    <div className="categories">
      <h3 className="categories__title">{listName}</h3>
      {children}
    </div>
  );
};

export default Categories;
