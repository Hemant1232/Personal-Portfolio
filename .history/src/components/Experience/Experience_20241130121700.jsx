import React from 'react'
import Data from './Data'

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      <div>
        <div>
            {
                Data.map((val, id) => {
                    if(val.category === "education"){
                        return(
                            div
                        )
                    }
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
