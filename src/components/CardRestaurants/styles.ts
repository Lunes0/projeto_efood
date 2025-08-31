import styled from 'styled-components'
import { colors } from '../../globalStyles'

export const Card = styled.li`
  background-color: ${colors.white};
  width: 30rem;
`

export const Banner = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 12rem;
    display: block;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 1;

  h4 {
    color: ${colors.orangishWhite};
    font-weight: bold;
    font-size: 0.75rem;
    background-color: ${colors.primary};
    padding: 6px 4px;
  }
`

export const Infos = styled.div`
  font-size: 0.875rem;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-top: none;

  div {
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }

  p {
    line-height: 1.375rem;
    padding: 0 0.5rem 1rem;
  }
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.orangishWhite};
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.325rem;
  font-weight: bold;
  margin: 0.5rem;

  &:hover {
    filter: brightness(0.9);
    transition: ease 0.2s;
  }
`
