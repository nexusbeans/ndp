import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonElements.scss'
import BuyIcon from '../../assets/images/buy-iconitem.png'

const Buybutton = () => {
  return (
    <div>
          <div className="buy_nowBtnItem">
                      <Link to="#" className="buyButton">
                        BuyNow <span><img src={BuyIcon} alt=""  /> </span>
                      </Link>
                    </div>
    </div>
  )
}
export default Buybutton