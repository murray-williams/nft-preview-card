import NFT from '../assets/image-equilibrium.jpg'

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
          <div className="details-left">0.041ETH</div>
          <div className="details-right">3 days left</div>
        </div>
      </div>
    </div>
  )
}
