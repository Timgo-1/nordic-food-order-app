import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectOrderList } from '../features/orderSlice'
import OrderItem from './OrderItem'
import { useEffect } from 'react'
import { useState } from 'react'

const Checkout = () => {
  const [grandTotal, setGrandTotal] = useState(0)
  const orderList = useSelector(selectOrderList)

  useEffect(() => {
    let total = 0
    orderList.forEach(item => {
      total += item.subtotal
    })

    setGrandTotal(total)
  }, [orderList])

  return (
    <Wrapper>
      <Header>
        <NotificationIcon>
          <i className='far fa-bell'></i>
        </NotificationIcon>
        <ProfileContainer>
          <ProfileIcon>
            <img
              src='https://avatars.githubusercontent.com/u/61084415?v=4'
              alt=''
            />
          </ProfileIcon>
          <ProfileName>Erik</ProfileName>
          <div>
            <i className='fas fa-caret-down'></i>
          </div>
        </ProfileContainer>
      </Header>

      <Card>
        <AcceptedCardTypes>
          <i className='fab fa-cc-amex'></i>
          <i className='fab fa-cc-visa'></i>
          <i className='fab fa-cc-mastercard'></i>
          <i className='fab fa-cc-discover'></i>
        </AcceptedCardTypes>
        <CardForm>
          <FormRow>
            <CardNumber placeholder='Card Number' />
          </FormRow>
          <FormRow>
            <CardValidThru placeholder='Valid Thru' />
            <CardCVC placeholder='CVC/CVC2' type='password' maxLength='3' />
          </FormRow>
        </CardForm>
        <GrandTotal>
          <span>€</span>
          {grandTotal.toFixed(2)}
        </GrandTotal>
      </Card>
      <CurrentOrder>
        {orderList.map(item => (
          <OrderItem item={item} />
        ))}
      </CurrentOrder>
      <CheckoutButton>
        <span>Checkout</span>
      </CheckoutButton>
    </Wrapper>
  )
}

export default Checkout

const Wrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(400px - 24px);
  background: radial-gradient(circle, rgba(230,68,237,1) 1%, rgba(77,236,144,0.38467261904761907) 64%, rgba(249,252,81,0.6192737926136364) 100%);
  padding: 40px 12px;

  & > div {
    margin-bottom: 40px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  & > div {
    margin-right: 12px;
  }
`

const NotificationIcon = styled.div`
  background-color: #ffe;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  i {
    font-size: 20px;
    color: #8e8d91;
  }

  &:hover {
    background-color: #33eaff;
    cursor: pointer;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 48px;
  height: 36px;
  padding-left: 4px;
  color: #af52bf;

  & > div {
    margin-right: 12px;
  }

  & > div > i {
    font-size: 16px;
  }

  &:hover {
    color: #6d1b7b;
    background-color: #00a0b2;
    cursor: pointer;
  }
`

const ProfileIcon = styled.div`
  display: grid;
  place-items: center;

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

const ProfileName = styled.div`
  font-family: Comfortaa-Bold;
  font-weight: 900;
  font-size: 18px;
`

const Card = styled.div`
  height: 150px;
  margin: 0 24px;
  border-radius: 36px;
  padding: 16px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow: 0px 0 6px 6px navy;
  background: linear-gradient(90deg, rgba(167,47,75,1) 6%, rgba(79,78,8,0.38467261904761907) 45%, rgba(15,20,204,0.6562056107954546) 87%);
`

const AcceptedCardTypes = styled.div`
  display: flex;

  justify-content: flex-end;

  & > i {
    color: skyblue;
    font-size: 24px;
    margin-right: 12px;
  }
`
const CardForm = styled.div`
  margin-top: 24px;
`

const FormRow = styled.div`
  flex: 1;
  margin: 18px 0;

  & > input {
    font-size: 18px;
    color: #fce4ec;
    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: #fff;
      font-size: 14px;
    }
  }
`

const CardNumber = styled.input`
  width: 100%;
`
const CardValidThru = styled.input`
  width: 30%;
  margin-right: 18px;
`
const CardCVC = styled.input`
  width: 30%;
`

const GrandTotal = styled.div`
  color: #f3e5f5;
  font-size: 22px;
  font-weight: 800;
`

const CurrentOrder = styled.div`
  flex: 1;
  overflow: scroll;
`

const CheckoutButton = styled.div`
  height: 60px;
  margin-bottom: 0 !important;
  background-color: #c51162;
  border-radius: 28px;
  display: grid;
  place-items: center;
  color: #f6f6f6;
  font-size: 18px;
  font-weight: 900;

  &:hover {
    background-color: #d500f9;
    cursor: pointer;
    transform: scale(1.03);
  }
`
