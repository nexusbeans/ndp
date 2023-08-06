import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonElements.scss'
import bulkButtonicon from '../../assets/images/bulkOrder.png'

const BulkButton = () => {
  return (
    <div>
          <div className="buy_nowBtnItem">
                      <Link to="#" className="buyButton">
                      Bulk Orders <span><img src={bulkButtonicon} alt=""  /> </span>
                      </Link>
                    </div>
    </div>
  )
}
export default BulkButton