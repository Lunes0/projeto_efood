import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const HeaderContainer = styled.header`
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
