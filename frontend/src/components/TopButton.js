import React from 'react'

export const TopButton = () => {
  return (
    <div>
        <button className="custom-btn btn-1"
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}> GO TO TOP</button>
    </div>
  )
}
