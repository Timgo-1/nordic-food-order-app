import styled from 'styled-components'
import Banner from './Banner'
import { menu } from '../static/menu'
import { useEffect, useState } from 'react'
import Category from './Category'
import MenuItem from './MenuItem'
import hmbg from '../assets/images/hmbg.jpg'
import Logo from '../assets/images/logo.png'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu[0].title)
  const [selectedCategoryItems, setSelectedCategoryItems] = useState(
    menu[0].items,
  )

  console.log(selectedCategoryItems)

  useEffect(() => {
    setSelectedCategoryItems(
      menu.find(category => category.title === selectedCategory).items,
    )
  }, [selectedCategory])

  return (
    <Wrapper>
      <ContentWrapper>
        <Title><img src={Logo} alt='logo' height="45" width="45" margin="5px 0px" />Todays Menu 😋</Title>
        <Banner />

        <Menu>
          <Title>Menu Category</Title>
          <CategorySelector>
            {menu.map(category => (
              <Category
                category={category}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </CategorySelector>
          <MenuItems>
            {selectedCategoryItems.map(item => (
              <MenuItem item={item} />
            ))}
          </MenuItems>
        </Menu>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  height: 100vh;
  width: calc(100vw - 400px - 70px);
  display: flex;
  justify-content: center;
  overflow: scroll;
  background-image: url(${hmbg});
`
const ContentWrapper = styled.div`
  max-width: 1700px;
  margin: 0 50px;
  width: calc(100% - 100px);
  padding: 5vh 0;

  & > div {
    margin-bottom: 28px;
  }
`

const Title = styled.div`
  font-family: Comfortaa-Bold;
  font-weight: 900;
  font-size: 33px;
`
const Menu = styled.div`
  & > div {
    margin-bottom: 40px;
  }
`

const CategorySelector = styled.div`
  display: flex;
  padding: 12px;
  margin: -12px;
  overflow-y: visible;
  overflow-x: scroll;
`

const MenuItems = styled.div`
  display: flex;
`
