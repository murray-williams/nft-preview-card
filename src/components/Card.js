import NFT from '../assets/image-equilibrium.jpg'
import ETHIcon from '../assets/icon-ethereum.svg'
import ClockIcon from '../assets/icon-clock.svg'

// styles
import './Card.css'

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-inner">
        <img src={NFT} alt="Equilibrium Image" />
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="nft-details">
          <div className="details-left">
            <img src={ETHIcon} alt="ETH Icon" />
            <span>0.041 ETH</span>
          </div>
          <div className="details-right">
            <img src={ClockIcon} alt="Clock Icon" />
            <span>3 days left</span>
          </div>
        </div>
      </div>
    </div>
  )
}
