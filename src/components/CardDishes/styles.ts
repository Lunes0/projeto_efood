import styled from 'styled-components'

import { colors } from '../../globalStyles'
import { Button } from '../CardRestaurants/styles'

export const Card = styled.div`
  max-width: 20rem;
  background-color: ${colors.primary};
  color: ${colors.orangishWhite};
  padding: 0.5rem;

  img {
    width: 100%;
    height: 11rem;
    object-fit: cover;
  }

  h3 {
    font-weight: bold;
    font-size: 1.125rem;
    margin: 0.5rem 0;
  }

  p {
    line-height: 1.375rem;
    margin-bottom: 0.5rem;
  }
`

export const ButtonDishes = styled(Button)`
  background-color: ${colors.orangishWhite};
  color: ${colors.primary};
  width: 100%;
  text-align: center;
`
