import styled from 'styled-components'

export const HomeContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3rem;
  column-gap: 5rem;
  margin-top: 5rem;
  margin-bottom: 8rem;

  li {
    img {
      width: 30rem;
      object-fit: cover;
    }
  }
`
