import styled from 'styled-components'
import Checkout from './components/Checkout'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <HomeContainer>
        <Main />
        <Checkout />
      </HomeContainer>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 0;
  }
  height: 100vh;
  width: 100vw;
  display: flex;
`

const HomeContainer = styled.div`
  display: flex;
  color: #ffffff;
`

/**
 * sidebar navigating between tabs << react router
 * pages:
 * '/' - home
 * '/liked' - liked
 * '/profile' - profile
 *
 * google login
 * store all data in firebase
 *
 */
