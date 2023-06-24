import React from 'react'

export const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner">
        <div class="loader">
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner
