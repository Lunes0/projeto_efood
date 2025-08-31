import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  text-align: center;

  div {
    padding: 2.5rem 0;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-left: 0.8rem;

    li {
      margin-right: 0.5rem;
      margin-top: 2rem;
    }

    .icon {
      width: 1.5rem;
    }
  }

  p {
    font-size: 0.865rem;
    color: ${colors.primary};
    margin-top: 5rem;
  }
`
