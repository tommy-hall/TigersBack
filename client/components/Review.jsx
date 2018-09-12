import React from 'react'
import {Media} from 'reactstrap'

const Example = () => {
  return (
    <div className='row'>
      <div className='col-md-0'> </div>
      <div className='col-md-8'>
        <Media>
          <Media left href="#">
            <Media className='zoom' src="https://www.playgolf.co.nz/wp-content/uploads/2014/07/Cape-Kidnappers-Course-Feature.jpg" alt="Cape Kidnappers" />
          </Media>
          <Media body>
            <Media heading>
          1st - Cape Kidnappers
            </Media>
            Designed by legendary golf architect Tom Doak, the Cape Kidnappers par 71 golf course measures 7,119 yards (6,510 meters) and will challenge golfers of all skill levels. Completed in 2004, our spectacular New Zealand golf course has been hailed as one of the great modern marvels in golf. Built on a ridge-and-valley landscape and with stunning sea views, Cape Kidnappers Golf Course plays high above the ocean atop dramatic cliffs.
          </Media>
        </Media>
      </div>
    </div>
  )
}

export default Example
