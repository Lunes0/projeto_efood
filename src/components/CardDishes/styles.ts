import styled from 'styled-components'

import { Button } from '../CardRestaurants/styles'
import { colors } from '../../globalStyles'

export const Card = styled.div`
  max-width: 20rem;
  background-color: ${colors.primary};
  color: ${colors.orangishWhite};

  img {
    width: 95%;
    object-fit: cover;
    margin: 0.5rem;
  }

  h3 {
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.125rem;
  }

  p {
    line-height: 1.375rem;
    padding: 0 0.5rem 1rem;
  }
`

export const ButtonDishes = styled(Button)`
  background-color: ${colors.orangishWhite};
  color: ${colors.primary};
  width: 95%;
  text-align: center;
`
