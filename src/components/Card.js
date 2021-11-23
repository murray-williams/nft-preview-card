import NFT from '../assets/image-equilibrium.jpg'
import ETHIcon from '../assets/icon-ethereum.svg'
import ClockIcon from '../assets/icon-clock.svg'
import ViewIcon from '../assets/icon-view.svg'
import Avatar from '../assets/image-avatar.png'

// styles
import './Card.css'

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="image-container">
          <img src={NFT} alt="Equilibrium Image" />
          <div className="image-overlay">
            <div className="view-icon">
              <img src={ViewIcon} alt="View Icon" />
            </div>
          </div>
        </div>
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="details">
          <div className="details-left">
            <img src={ETHIcon} alt="ETH Icon" />
            <span>0.041 ETH</span>
          </div>
          <div className="details-right">
            <img src={ClockIcon} alt="Clock Icon" />
            <span>3 days left</span>
          </div>
        </div>
        <div className="author">
          <img src={Avatar} alt="Jules Wyvern" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  )
}
