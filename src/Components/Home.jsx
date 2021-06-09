import React from "react";
import { FaBitcoin, FaUserAlt } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import {AiOutlineLink} from "react-icons/ai";
import {HiOutlineExternalLink} from "react-icons/hi";
import {FiSearch} from "react-icons/fi";
import {GrCode} from "react-icons/gr";
import {BsNewspaper} from "react-icons/bs";
import {IoMdInformationCircle} from "react-icons/io"

import "./Home.css";

const Home = () => {
  return (
    <div class="container">
      <div class="hero-sec-row row">
        <div class="bitcoin-branding-col col">
          <div className="bitcoin-branding ">
            <FaBitcoin size={38} className="bitcoin-icon" />
            <h2 className="branding-name">Bitcoin</h2>
            <button className="btn btc-btn btn-secondary">
              <h6>BTC</h6>
            </button>
          </div>
          <div className="rank-watch-div">
            <button className="btn rank-btn">Rank #1</button>
            <button className="btn coin-btn">Coin</button>
            <button className="btn watch-btn">On 1000000 watchlists</button>
          </div>
        </div>
        <div class="col">
          <div className="bitcoin-branding">
            <h6 className="branding-name">Bitcoin Price (BTC)</h6>
          </div>
          <div className="bitcoin-branding">
            <BiDollar size={35} className="dollar-icon" />
            <h2 className="bitcoin-price">32,766.98</h2>
            <button className="btn bitcoin-price-trend-btn">0.10%</button>
          </div>
          <div className="eth-price">
            <h6>13.49 ETH</h6>
            <h6>
              <TiArrowSortedUp />
              2.84%
            </h6>
          </div>
        </div>
        <div class="buy-ex-game-btn-div  col">
          <button className="btn btn-primary herosec-buy-btn">
            Buy
            <TiArrowSortedDown />
          </button>
          <button className="btn btn-primary herosec-exhnage-btn">
            Exchange <TiArrowSortedDown />
          </button>
          <button className="btn btn-primary herosec-gaming-btn">
            Gaming <TiArrowSortedDown />
          </button>
          <button className="btn btn-primary herosec-earncrypto-btn">
            Earn Crypto <TiArrowSortedDown />
          </button>
        </div>
      </div>
      <div className="buttons-sec-row row">
        <div className="buttons-sec-col col-4">
          <div className="buttons-group-one">
            <button className="btn all-bit-btns bitcoin-org-btn"><a href="#"><AiOutlineLink size={18} /> bitcoin.org <HiOutlineExternalLink size={18} /></a></button>
            <button className="btn all-bit-btns explorer-btn"><a href="#"><FiSearch size={18} /> Explorers <TiArrowSortedDown size={20} /></a></button> 
            <button className="btn all-bit-btns community-btn"><a href="#"><FaUserAlt size={14} /> Community</a></button>
            <button className="btn all-bit-btns sourcecode-btn"><a href="#"><GrCode size={18} /> Source Code <HiOutlineExternalLink size={18} /></a></button>
            <button className="btn all-bit-btns whitepaper-btn"><a href="#"><BsNewspaper size={16}/> Whitepaper <HiOutlineExternalLink size={18} /></a></button>
          </div>
          <div className="buttons-group-two">
            <h6>Tags:</h6>
            <button className="btn all-bit-tags">Minable</button>
            <button className="btn all-bit-tags">PoW</button> 
            <button className="btn all-bit-tags">Store Of Value</button>
            <button className="btn all-bit-tags">SHA-256</button>
            <button className="btn all-bit-tags">State Channels</button>
          </div>
        </div>
        <div className="mrkt-cap-col col">
          <div className="marketcap-div">
            <h6 className="mrkt-cap-txt">Market Cap <IoMdInformationCircle className="info-icon" size={20}/></h6>
            <h6 className="mrkt-cap-price"><BiDollar size={18}/>633,350,570,636</h6>
          </div>
        </div>
        <div className="fully-diluted-cap-col col">
        <div className="marketcap-div">
            <h6 className="mrkt-cap-txt">Fully Diluted Market Cap <IoMdInformationCircle className="info-icon" size={20}/></h6>
            <h6 className="mrkt-cap-price"><BiDollar size={18}/>720,114,632,539</h6>
          </div>
        </div>
        <div className="volume-col col">
        <div className="marketcap-div">
            <h6 className="mrkt-cap-txt">Volume <IoMdInformationCircle className="info-icon" size={20}/></h6>
            <h6 className="mrkt-cap-price"><BiDollar size={18}/>47,923,015,970</h6>
          </div>
        </div>
        <div className="supply-col col">
        <div className="marketcap-div">
            <h6 className="mrkt-cap-txt">Circulating Supply <IoMdInformationCircle className="info-icon" size={20}/></h6>
            <h6 className="mrkt-cap-price">18,730,687.00 BTC</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
