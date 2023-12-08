import './App.css';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function App() {
  return (
    <>
      <div className="top-header-1">
        <ul>
          <li>
            <Icon icon="fluent:checkmark-starburst-20-regular" size="22px" className='icon' />
            <p>30 day satisfaction guarantee</p>
          </li>
          <li>
            <Icon icon="ph:truck" className='icon'/>
            <p>free delivery on orders over $40.00</p>
          </li>
          <li>
            <Icon icon="mdi:heart-outline" className='icon'/>
            <p>50000+ happy customers</p>
          </li>
          <li>
            <Icon icon="fluent:arrow-sync-checkmark-20-regular" className='icon'/>
            <p>100% money back guarantee</p>
          </li>
        </ul>
      </div>
      <div className="top-header-2">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='slide'>
            <Icon icon="fluent:checkmark-starburst-20-regular" size="22px" className='icon' />
            <p>30 day satisfaction guarantee</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <Icon icon="ph:truck" className='icon'/>
            <p>free delivery on orders over $40.00</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <Icon icon="mdi:heart-outline" className='icon'/>
            <p>50000+ happy customers</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide'>
            <Icon icon="fluent:arrow-sync-checkmark-20-regular" className='icon'/>
            <p>100% money back guarantee</p>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      <div className="logos">
        <img src="/Clarifion.png" alt="" />
        <div>
          <img src="/McAfee.png" alt="" />
          <img src="/Nortion.png" alt="" />
        </div>
      </div>
      <div className="main">
        <div className="first">
          <h1>Wait ! your order in progress.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          <div className="options">
            <div>
              <img src="/Checked.png" alt="" />
              <p>Cart review</p>
            </div>
            <div>
              <img src="/Checked.png" alt="" />
              <p>Checkout</p>
            </div>
            <div>
              <img src="/Tree.png" alt="" />
              <p>
                <b>Special offer</b>
              </p>
            </div>
            <div>
              <img src="/Four.png" alt="" />
              <p>Conformation</p>
            </div>
          </div>
        </div>
        <div className="last">
          <div className="right">
            <img className="picture" src="/Picture.png" alt="" />
            <div>
              <div className='account'>
                <img src='/avatar.png' alt=''/>
                <div>
                  <img src='/Stars.png' alt=''/>
                  <div>
                    <p>Kent T.</p>
                    <Icon icon="fluent:checkmark-starburst-20-filled" color='#5BB59A'/>
                    <p className='verified'>Verified customer</p>
                  </div>
                </div>
              </div>
              <p className='account-desc'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
          </div>
          <div className="left">
            <p className="paragraph1">
              <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
              only <span>$14 each</span> ($84.00 total!)
            </p>
            <img className="picture1" src="/Picture.png" alt="" />
            <div className="phone">
              <img src="/Clarifion-phone.png" alt=""></img>
              <div>
                <div>
                  <p>Clarifion Air Ionizer</p>
                  <div>
                    <p className="old-value">
                      <del>$180</del>
                    </p>
                    <p className="new-value">$84</p>
                  </div>
                </div>
                <img src="/Stars.png" alt="" />
                <div className="storage">
                  <input type="radio" />
                  <p>12 left in stock</p>
                </div>
                <p className="description2">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
            <div className="tree-options">
              <div>
                <img src="/tick-circle.png" alt="" />
                <p>
                  Negative Ion Technology may <span>help with allergens</span>
                </p>
              </div>
              <div>
                <img src="/tick-circle.png" alt="" />
                <p>
                  Designed for <span>air rejuvenation</span>
                </p>
              </div>
              <div>
                <img src="/tick-circle.png" alt="" />
                <p>
                  <span>Perfect for every room</span> in all types of places.
                </p>
              </div>
            </div>
            <div className="special-offer">
              <img src="/Percentage.png" alt="" />
              <p>
                Save <span>53%</span> and get <span>6 extra Clarifision</span>{" "}
                for only <span>$14 Each.</span>
              </p>
            </div>
            <button className="claim-discount">
              <p>Yes - Claim my discount</p>{" "}
              <Icon icon="ph:arrow-left-bold" hFlip={true} />{" "}
            </button>
            <div className="free-shipping">
              <div className='description'>
                <p>Free Shipping</p>
                <div>
                  <Icon icon="lucide:lock" fontSize={12} color="#cfcfcf" />
                  <p>Secure 256-bit SSL encryption</p>
                </div>
              </div>
              <div className='pay'>
                <img src="/Visa.png" alt="" />
                <img src="/Google-pay.png" alt="" />
                <img src="/PayPal.png" alt="" />
                <img src="/Master-card.png" alt="" />
                <img src="/Google-pay-1.png" alt="" />
                <img src="/Apple-pay.png" alt="" />
                <img src="/Amex.png" alt="" />
              </div>
            </div>
            <p className="no-thanks">NO THANKS, I DON'T WANT THIS.</p>
            <div className="satisfaction">
              <img src="/Satisfaction.png" alt="" />
              <p>
                If you are not completely thrilled with your Clarifion - We have
                a <span>30 day satisfaction guarantee.</span> Please refer to
                our return policy at the bottom of the page for more details.
                Happy Shopping!
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="copyright-box">
          <p className="copyright">Copyright (C) 2023</p>
          <p>clarifionsupport@clarifion.com</p>
        </div>
        <div className="encryption">
          <Icon icon="lucide:lock" fontSize={12} color="#FFFFFF" />
          <p> Secure 256-bit SSL encryption.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
