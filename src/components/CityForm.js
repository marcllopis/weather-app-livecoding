import React from 'react';


const CityForm = ({handleSubmit,cityInput,handleCity}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='city...'
        value={cityInput}
        onChange={(e) => handleCity(e.target.value)}
      />
      <button type='submit'>Give me weather</button>
    </form>
  )
}

export default CityForm;
