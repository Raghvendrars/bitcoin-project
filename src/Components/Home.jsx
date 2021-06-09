import React, { useState } from "react";
import { FaBitcoin, FaUserAlt } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineLink } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { GrCode } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io"
// images
import Binance from "../Images/binance.png";
import Shanshu from "../Images/shanshu.jpg";
import Bitdiaomond from "../Images/bitdiamond.png";
import Streamr from "../Images/Streamr.png";
import Fegtoken from "../Images/Feg.png";
import Saylormoon from "../Images/saylor.png";


import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
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
            <button className="btn all-bit-btns whitepaper-btn"><a href="#"><BsNewspaper size={16} /> Whitepaper <HiOutlineExternalLink size={18} /></a></button>
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
            <h6 className="mrkt-cap-txt">Market Cap <IoMdInformationCircle className="info-icon" size={20} /></h6>
            <h6 className="mrkt-cap-price"><BiDollar size={18} />633,350,570,636</h6>
          </div>
        </div>
        <div className="fully-diluted-cap-col col">
          <div className="marketcap-div">
            <h6 className="mrkt-cap-txt">Fully Diluted Market Cap <IoMdInformationCircle className="info-icon" size={20} /></h6>
            <h6 className="mrkt-cap-price"><BiDollar size={18} />720,114,632,539</h6>
          </div>
        </div>
        <div className="volume-col col">
          <div className="marketcap-div">
            <h6 className="mrkt-cap-txt">Volume <IoMdInformationCircle className="info-icon" size={20} /></h6>
            <h6 className="mrkt-cap-price"><BiDollar size={18} />47,923,015,970</h6>
          </div>
          <div className="mrkt-cap-div-two">
            <h6>Volume / Market Cap</h6>
            <h6 className="make-it-bold">0.07455</h6>
          </div>
        </div>
        <div className="supply-col col">
          <div className="supply-div">
            <h6 className="mrkt-cap-txt">Circulating Supply <IoMdInformationCircle className="info-icon" size={20} /></h6>
            <h6 className="mrkt-cap-price">18,730,687.00 BTC</h6>
            <div class="progress">
              <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
          </div>
          <div className="supply-div-two">
            <h6>Max Supply <IoMdInformationCircle className="info-icon" size={20} />   21,000,000</h6>
            <h6>Total Supply <IoMdInformationCircle className="info-icon" size={20} />  18,730,818</h6>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="bitcoin-desc">
        <div className="bitcoin-desc-row row">
          <div className="bitcoin-desc-col col-8">
            <h4>BTC Price Live Data</h4>
            <p>The live Bitcoin price today is $34,291.89 USD with a 24-hour trading volume of $47,931,591,821 USD. Bitcoin is up 3.15% in the last 24 hours. The current CoinMarketCap ranking is #1, with a live market cap of $642,315,087,054 USD. It has a circulating supply of 18,730,818 BTC coins and a max. supply of 21,000,000 BTC coins.</p>
            <p>If you would like to know where to buy Bitcoin, the top exchanges for trading in Bitcoin are currently Binance, Huobi Global, OKEx, ZG.com, and CoinTiger. You can find others listed on our crypto exchanges page.</p>
            <h4>What Is Bitcoin (BTC)?</h4>
            <button
              className="btn show_more_btn"
              id="showmorebtn"
              onClick={() => setShow(true)}
            >
              Read More <TiArrowSortedDown size={18} />
            </button>
            {show ? (
              <div>
                <p>Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.</p>
                <p>Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”</p>
                <p>Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.</p>
                <h5>Who Are the Founders of Bitcoin?</h5>
                <p>Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2020, the true identity of the person — or organization — that is behind the alias remains unknown.</p>
                <p>On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “blockchain.”</p>
                <p>Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the genesis block, thus launching the world’s first cryptocurrency.</p>
                <p>However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, over the years a large number of people have contributed to improving the cryptocurrency’s software by patching vulnerabilities and adding new features.</p>
                <p>Bitcoin’s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli and others.</p>
                <h5>What Makes Bitcoin Unique?</h5>
                <p>Bitcoin’s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.</p>
                <p>It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects.</p>
                <p>The entire cryptocurrency market — now worth more than $300 billion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies.</p>
                <p>Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that fluctuated between $100-$200 billion in 2020, owing in large part to the ubiquitousness of platforms that provide use-cases for BTC: wallets, exchanges, payment services, online games and more.</p>
                <h6>How Much Bitcoin Is in Circulation?</h6>
                <p>Bitcoin’s total supply is limited by its software and will never exceed 21,000,000 coins. New coins are created during the process known as “mining”: as transactions are relayed across the network, they get picked up by miners and packaged into blocks, which are in turn protected by complex cryptographic calculations.</p>
                <p>As compensation for spending their computational resources, the miners receive rewards for every block that they successfully add to the blockchain. At the moment of Bitcoin’s launch, the reward was 50 bitcoins per block: this number gets halved with every 210,000 new blocks mined — which takes the network roughly four years. As of 2020, the block reward has been halved three times and comprises 6.25 bitcoins.</p>
                <p>Bitcoin has not been premined, meaning that no coins have been mined and/or distributed between the founders before it became available to the public. However, during the first few years of BTC’s existence, the competition between miners was relatively low, allowing the earliest network participants to accumulate significant amounts of coins via regular mining: Satoshi Nakamoto alone is believed to own over a million Bitcoin.</p>
                <p>Mining Bitcoins can be very profitable for miners, depending on the current hash rate and the price of Bitcoin. While the process of mining Bitcoins is complex, we discuss how long it takes to mine one Bitcoin on CMC Alexandria — as we wrote above, mining Bitcoin is best understood as how long it takes to mine one block, as opposed to one Bitcoin.</p>
                <h5>How Is the Bitcoin Network Secured?</h5>
                <p>Bitcoin is secured with the SHA-256 algorithm, which belongs to the SHA-2 family of hashing algorithms, which is also used by its fork Bitcoin Cash (BCH), as well as several other cryptocurrencies.</p>
                <h5>What Is Bitcoin’s Role as a Store of Value?</h5>
                <p>Bitcoin is the first decentralized, peer-to-peer digital currency. One of its most important functions is that it is used as a decentralized store of value. In other words, it provides for ownership rights as a physical asset or as a unit of account. However, the latter store-of-value function has been debated. Many crypto enthusiasts and economists believe that high-scale adoption of the top currency will lead us to a new modern financial world where transaction amounts will be denominated in smaller units.</p>
                <p>The top crypto is considered a store of value, like gold, for many — rather than a currency. This idea of the first cryptocurrency as a store of value, instead of a payment method, means that many people buy the crypto and hold onto it long-term (or HODL) rather than spending it on items like you would typically spend a dollar — treating it as digital gold.</p>
                <h5>Crypto Wallets</h5>
                <p>The most popular wallets for cryptocurrency include both hot and cold wallets. Cryptocurrency wallets vary from hot wallets and cold wallets. Hot wallets are able to be connected to the web, while cold wallets are used for keeping large amounts of coins outside of the internet.</p>
                <p>Some of the top crypto cold wallets are Trezor, Ledger and CoolBitX. Some of the top crypto hot wallets include Exodus, Electrum and Mycelium.</p>
                <h5>How Is Bitcoin’s Technology Upgraded?</h5>
                <p>A hard fork is a radical change to the protocol that makes previously invalid blocks/transactions valid, and therefore requires all users to upgrade. For example, if users A and B are disagreeing on whether an incoming transaction is valid, a hard fork could make the transaction valid to users A and B, but not to user C.</p>
                <p>A hard fork is a protocol upgrade that is not backward compatible. This means every node (computer connected to the Bitcoin network using a client that performs the task of validating and relaying transactions) needs to upgrade before the new blockchain with the hard fork activates and rejects any blocks or transactions from the old blockchain. The old blockchain will continue to exist and will continue to accept transactions, although it may be incompatible with other newer Bitcoin clients.</p>
                <p>A soft fork is a change to the Bitcoin protocol wherein only previously valid blocks/transactions are made invalid. Since old nodes will recognise the new blocks as valid, a soft fork is backward-compatible. This kind of fork requires only a majority of the miners upgrading to enforce the new rules.</p>
                <p>Some examples of prominent cryptocurrencies that have undergone hard forks are the following: Bitcoin’s hard fork that resulted in Bitcoin Cash, Ethereum’s hard fork that resulted in Ethereum Classic.</p>
                <p>https://coinmarketcap.com/alexandria/article/bitcoin-vs-bitcoin-cash-vs-bitcoin-svBitcoin Cash has been hard forked since its original forking, with the creation of Bitcoin SV.</p>
                <h5>What Is the Lightning Network?</h5>
                <p>The Lightning Network is an off-chain, layered payment protocol that operates bidirectional payment channels which allows instantaneous transfer with instant reconciliation. It enables private, high volume and trustless transactions between any two parties. The Lightning Network scales transaction capacity without incurring the costs associated with transactions and interventions on the underlying blockchain.</p>
                <h5>How Much Is Bitcoin?</h5>
                <p>
                  The current valuation of Bitcoin is constantly moving, all day every day. It is a truly global asset. From a start of under one cent per coin, BTC has risen in price by thousands of percent to the numbers you see above. The prices of all cryptocurrencies are quite volatile, meaning that anyone’s understanding of how much is Bitcoin will change by the minute. However, there are times when different countries and exchanges show different prices and understanding how much is Bitcoin will be a function of a person’s location.
                </p>
                <h5>Where Can You Buy Bitcoin (BTC)?</h5>
                <p>Bitcoin is, in many regards, almost synonymous with cryptocurrency, which means that you can buy Bitcoin on virtually every crypto exchange — both for fiat money and other cryptocurrencies. Some of the main markets where BTC trading is available are:</p>
                <ul>
                  <li><a href="https://coinmarketcap.com/exchanges/binance/"><h6>Binance</h6></a></li>
                  <li><a href="https://coinmarketcap.com/exchanges/coinbase-pro/"><h6>Coinbase Pro</h6></a></li>
                  <li><a href="https://coinmarketcap.com/exchanges/okex/"><h6>OKEx</h6></a></li>
                  <li><a href="https://coinmarketcap.com/exchanges/kraken/"><h6>Kraken</h6></a></li>
                  <li><a href="https://coinmarketcap.com/exchanges/huobi-global/"><h6>Huobi Global</h6></a></li>
                  <li><a href="https://coinmarketcap.com/exchanges/bitfinex/"><h6>Bitfinex</h6></a></li>
                </ul>
                <p>If you are new to crypto, use CoinMarketCap’s own easy guide to buying Bitcoin.</p>
                <h5>Our most recent articles about Bitcoin:</h5>
                <ul>
                  <li><a href="https://coinmarketcap.com/alexandria/article/crypto-markets-spooked-as-u-s-recovers-2-3m-bitcoin-ransom"><h6>Crypto Markets Spooked as U.S. Recovers $2.3M Bitcoin Ransom</h6></a></li>
                  <li><a href="https://coinmarketcap.com/alexandria/article/el-salvador-stresses-bitcoin-wont-replace-the-dollar"><h6>El Salvador Stresses Bitcoin Won't Replace the Dollar</h6></a></li>
                  <li><a href="https://coinmarketcap.com/alexandria/article/microstrategy-stock-falls-as-it-raises-even-more-debt-to-buy-bitcoin"><h6>MicroStrategy Stock Falls as It Raises Even More Debt to Buy Bitcoin</h6></a></li>
                  <li><a href="https://coinmarketcap.com/alexandria/article/making-sense-of-may-19-volatility-flipside-crypto"><h6>Making Sense of May 19 Volatility: Flipside Crypto</h6></a></li>
                  <li><a href="https://coinmarketcap.com/alexandria/article/el-salvador-plans-to-make-bitcoin-legal-tender-why-thats-a-big-deal"><h6>El Salvador Plans to Make Bitcoin Legal Tender — Why That's a Big Deal</h6></a></li>

                </ul>
                <button
                  className="btn show_more_btn mt-2 ml-1"
                  onClick={() => setShow(false)}
                >
                  Show Less
                </button>
              </div>

            ) : null}
          </div>
          <div className="bitcoin-price-col col-4">
          <div className="price-statics-div">
            <h4 className="bit-statics-text-h4">BTC Price Statistics</h4>
            <p className="bit-statics-text-p text-secondary">Bitcoin Price Today</p>
            <div>
              <ol class="list-group list-group">
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>Bitcoin Price</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill"><BiDollar size={18} />34,618.43</span>
                </li>
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>Price Change</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill"><BiDollar size={18} />1,780.86</span>
                </li>
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>24h Low / 24h High</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill"><BiDollar size={18} />31,114.44 /34,754.71</span>
                </li>
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>Trading Volume</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill"><BiDollar size={18} />48,821,740,851.03</span>
                </li>
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>Volume / Market Cap</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill">0.0751</span>
                </li>
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>Market Dominance</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill">42.02%</span>
                </li>
                <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold"><h6>Market Rank</h6></div>
                  </div>
                  <span class="badge bg-light rounded-pill">#1</span>
                </li>
              </ol>
            </div>
            </div>
            {/* Trending */}
            <div className="treding-coins mt-3">
              <h4 className="trending-coins-text-h4">Trending Coins and Tokens 🔥</h4>
              <div className="mt-3">
                <ol class="list-group list-group">
                  <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Binance}  /> <h6 className="ml-2">Hold BNB on Binance</h6></div>
                    </div>
                    <span class="badge bg-primary text-white rounded-pill"><a href="#" className="text-white">Trade Now</a></span>
                  </li>
                  <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Shanshu} /><h6>Shanshu Inu</h6><span className="text-secondary">SANSHU</span></div>
                    </div>
                    <span class="badge bg-primary text-white rounded-pill">#2737</span>
                  </li>
                  <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Bitdiaomond} /><h6>Bitcoin Diamond</h6><span className="text-secondary">BCD</span></div>
                    </div>
                    <span class="badge bg-primary text-white rounded-pill">#103</span>
                  </li>
                  <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Streamr} /><h6>Streamr</h6><span className="text-secondary">DATA</span></div>
                    </div>
                    <span class="badge bg-primary text-white rounded-pill">#272</span>
                  </li>
                  <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Fegtoken} /><h6>FEGToken</h6><span className="text-secondary">FEG</span></div>
                    </div>
                    <span class="badge bg-primary text-white rounded-pill">#2654</span>
                  </li>
                  <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Saylormoon} /><h6>SaylorMoon</h6><span className="text-secondary">SMOON</span></div>
                    </div>
                    <span class="badge bg-primary text-white rounded-pill">#2702</span>
                  </li>
                  {/* <li class="list-group-item bitcoin-price-group d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold-text"><img src={Binance} width="20" /><h6>Market Rank</h6></div>
                    </div>
                    <span class="badge bg-light rounded-pill">#1</span>
                  </li> */}
                </ol>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
