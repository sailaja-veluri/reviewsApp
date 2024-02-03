// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  onLeftArrow = () => {
    // const {reviewsList} = this.props
    const {position} = this.state
    // const listLen = reviewsList.length
    if (position > 0) {
      this.setState(preState => ({
        position: preState.position - 1,
      }))
    }
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    const {position} = this.state
    const listLen = reviewsList.length
    if (position < listLen) {
      this.setState(preState => ({
        position: preState.position + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {position} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[position]
    return (
      <div className="bg-container">
        <div className="reviews-container">
          <h1 className="header">Reviews</h1>
          <div className="card-button-container">
            <button className="button-details" data-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="btn-image"
                onClick={this.onLeftArrow}
              />
            </button>
            <div className="card-container">
              <img src={imgUrl} className="reviewer-img" alt={username} />
              <p className="header">{username}</p>
              <p className="para">{companyName}</p>
              <p className="reviewer-description">{description}</p>
            </div>
            <button className="button-details" data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="btn-image"
                onClick={this.onRightArrow}
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
