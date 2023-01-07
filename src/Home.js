import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='add-img' 
             src='https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png'
              alt='add' />
            <div className='home-row'>
                <Product title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                price={570} image='https://n1.sdlcdn.com/imgs/f/m/u/The-Lean-Startup-How-Constant-SDL666751802-1-0c48f.jpg' 
                rating={5}/>
                <Product title='Apple iPhone 14 256GB Starlight'
                price={84060} image='https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-blue-220907-geo_inline.jpg.large.jpg' 
                rating={5}/>
            </div>  
            <div className='home-row'>
               <Product title='Harry Potter 1-3 Box Set: A Magical Adventure Begins'
                price={849} image='https://m.media-amazon.com/images/I/41noSwJvq3L._SY469_BO1,204,203,200_.jpghttps://n1.sdlcdn.com/imgs/f/m/u/The-Lean-Startup-How-Constant-SDL666751802-1-0c48f.jpg' 
                rating={4}/>
                <Product title='Echo Dot (3rd Gen)  New and improved smart speaker with Alexa (Black)'
                price={3499} image='https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg' 
                rating={5}/>
                <Product title='HP Pavilion Aero AMD Ryzen 5 13.3 inches WUXGA Laptop (16GB RAM/512GB SSD, Ultra-Thin, 970 gm, 400 Nits Anti-Glare 100% RGB Display/B&O Audio/Alexa/FPR /Backlit KB/Windows 11 Home/13-be0206AU, 0.97Kg)'
                price={82000} image='https://m.media-amazon.com/images/I/71mX6qUGIIL._SL1500_.jpg' 
                rating={3}/>
            </div>  
            <div className='home-row'>
            <Product title='LG 164 cm (65 inches) 4K Ultra HD Smart OLED TV 65CXPTA (Dark Steel Silver)'
                price={187000} image='https://m.media-amazon.com/images/I/81xACHhRqXL._SL1500_.jpg' 
                rating={5}/>
            </div>  
        </div>

    </div>
  )
}

export default Home