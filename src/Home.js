import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''></img>
        <div className='home_row'>
          <Product 
            id="12321341"
            title="Apple iPhone 14 Pro (512 GB) - Black"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkT3tQq5q1LLoHOdPHhBOGph4POJ4E0KfhdQ&usqp=CAU"
            rating={4}
            price={149999}
          />
          <Product 
            id="21321345"
            title="DELL G15 Inspiron 5520 Intel Core i7 12th Gen (15.6 inch, 16GB, 512GB, Windows 11, MS Office 2021, NVIDIA GeForce RTX 3050 Ti Graphics, FHD LED-Backlit Display, Dark Shadow Grey, D560823WIN9B)"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxN-vWckg3VZwL-OEah7sMsUj9ZaDI1PBcA&usqp=CAU"
            rating={4}
            price={10000}
          />
          <Product 
            id="12321341"
            title="Zero to One (L) Paperback"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsuoFQ9ild0gt7X-9v4z7pL2QmfYIiWDHLw&usqp=CAU"
            rating={5}
            price={399}
          />
        </div>
        <div className='home_row'>
          <Product 
            id="12321341"
            title="Agaro Regency Air Fryer, 12L, Family Rotisserie Oven, 1800W Electric Air Fryer Toaster Oven, Tilt Led Digital Touchscreen, 9 Presets Menu For Baking, Roasting, Toasting Etc, With Accessories"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxSJziVOOK7Jh9wiHAQk0QV-1M85d6rgakg&usqp=CAU"
            rating={2}
            price={7899}
          />
          <Product 
            id="12321341"
            title="Noise Twist Bluetooth Calling Smart Watch, TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSVyTw8iUeu20Dvnb5Z5NnED2hcngw7t_RQ&usqp=CAU"
            rating={3}
            price={1799}
          />
          <Product 
            id="12829367"
            title="HyperX Pulsefire Haste 2 Wireless Gaming Mouse Ultra Lightweight, 61g, 100 Hour Battery Life, 2.4Ghz Wireless, Up to 26000 DPI - Black (6N0B0AA)"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiR4OEeXXwUpipxGIh9jbppbD_bxvDH3UeBw&usqp=CAU"
            rating={4}
            price={2999}
            />
        </div>
        <div className='home_row'>
          <Product 
            id="12321341"
            title="Samsung 27-inch(68.6cm) FHD 1000R Curved Monitor, VA, 75 Hz, Bezel Less Design, AMD FreeSync, Speakers, DP, HDMI, Headphone in Port LS27C390EAWXXL, Black"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWfmET-urTW7gC41K3QbhythUrBMkCdLdeg&usqp=CAU"
            rating={5}
            price={27599}
          />

        </div>
    </div>
  )
}

export default Home;