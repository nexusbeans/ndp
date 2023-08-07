import React, { useEffect, useState } from 'react'
import './ButtonElements.scss'
import BuyIcon from '../../assets/images/buy-iconitem.png'

const Buybutton = () => {
  const [countryData, setCountryData] = useState({
    US: { id: 'country-1' },
    IN: { id: 'country-2' },
    // IT: { id: 'country-3' },
    // NL: { id: 'country-4' },
    // SG: { id: 'country-5' },
  });

  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/country/')
      .then(response => response.text())
      .then(data => {
        const country = data.trim();
        setCountryInfo(countryData[country]);
      });
  }, []);


  return (
    <>
      <div className="buy_nowBtnItem">
        {Object.keys(countryData).map(countryCode => (
          <div
            key={countryCode}
            id={countryData[countryCode].id}
            className={countryInfo && countryInfo.id === countryData[countryCode].id ? 'showElements showElement_value' : 'showElements'}
          >
            <a className="buyButton" rel='noreferrer' target="_blank" href={getLinkForCountry(countryCode)}>
              BuyNow <span><img src={BuyIcon} alt="buyicon" /> </span>
            </a>
          </div>
        ))}
        {countryInfo === null && (
          <div id="not-found" className="showElements showElement_value">
            Loading...
          </div>
        )}
      </div>
    </>
  )
}
export default Buybutton


function getLinkForCountry(countryCode) {
  switch (countryCode) {
    case 'US':
      return 'https://www.amazon.com';
    case 'IN':
      return 'https://www.amazon.in/';
    // case 'IT':
    //   return 'https://www.flipkart.com/';
    // case 'NL':
    //   return 'https://www.shopify.com/';
    // case 'SG':
    //   return 'https://www.godaddy.com/';
    default:
      return '';
  }
}