import styled from 'styled-components'
import deliveryImg from '../assets/images/delivery.png'

const Banner = () => {
  return (
      <Wrapper>
        <img src={deliveryImg} alt='delivery' />
        <Offer>
          <Greeting>Hello Erik,</Greeting>
          <OfferDetails>
            Get free delivery every <span>€10</span> purchase
          </OfferDetails>
          <OfferButton>Learn More</OfferButton>
        </Offer>
      </Wrapper>
  )
}

export default Banner

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #651fff;
  border-radius: 28px;
  display: flex;
  align-items: center;

  div {
    margin-bottom: 0 !important;
  }

  img {
    height: 80%;
    margin-right: 30px;
  }
`

const Offer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const Greeting = styled.div`
  font-family: Comfortaa-Bold;
  font-size: 36px;
  font-weight: 900;
  color: #ffea00;
`

const OfferDetails = styled.div`
  font-size: 18px;
  color: #ffffff;
  span {
    font-family: Comfortaa-Bold;
    color: #ffea00;
    font-weight: 900;
    font-size: 20px;
  }
`

const OfferButton = styled.div`
  text-align: center;
  background-color: #4caf50;
  padding: 14px 28px;
  border-radius: 28px;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #91ff35;
    color: navy;
    transform: scale(1.1);
  }
`
