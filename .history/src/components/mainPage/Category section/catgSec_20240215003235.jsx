import React from 'react'

const CatgSec = () => {
    const categoryNames = data.categories.map(category => category.name);
  return (
    <div className="app">
      <h2>Category Names:</h2>
      <ul>
        {categoryNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CatgSec;
