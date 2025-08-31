import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const HeaderHome = styled.header`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }

  h1 {
    font-size: clamp(1.3rem, 2vw, 2.3rem);
    text-align: center;
    color: ${colors.primary};
    margin-bottom: 2.5rem;
    margin-top: clamp(5rem, 2vh, 8.6rem);
    font-weight: 900;
    max-width: clamp(15rem, 66%, 35rem);
  }

  .icon {
    height: auto;
    width: 2rem;
  }
`

export const HeaderRestaurant = styled.header`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const BackLink = styled.span`
  flex: 1;
  text-align: left;
  cursor: pointer;
`

export const CartHeader = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  color: ${colors.primary};
  font-size: 1.125rem;
  font-weight: 900;

  .logo-center {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  h3 {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
`

export const RestaurantBanner = styled.div`
  color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .category {
    font-size: 2rem;
    font-weight: 100;
    padding-top: 1.5rem;
  }

  .title {
    font-size: 2.5rem;
    padding-top: 10rem;
    padding-bottom: 2.5rem;
    font-weight: 900;
  }
`
