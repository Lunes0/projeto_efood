import { styled } from 'styled-components'

import { ButtonDishes } from '../CardDishes/styles'

import trash from '../../assets/images/trash.png'

import { colors } from '../../globalStyles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 10;
  padding: 2rem 0.5rem 0 0.5rem;
  max-width: 22.5rem;
  width: 100%;
  font-size: 0.875rem;
`

export const SuccessMenssage = styled.div`
  color: ${colors.orangishWhite};
  z-index: 100;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    padding-bottom: 1.5rem;
    line-height: 1.375rem;
    font-size: 0.875rem;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.orangishWhite};
  color: ${colors.primary};
  display: flex;
  position: relative;
  padding: 0.5rem;
  margin-bottom: 1rem;

  img {
    object-fit: cover;
    height: 5rem;
    width: 5rem;
    margin-right: 0.5rem;
  }

  h3 {
    font-weight: 900;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  button {
    background-image: url(${trash});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }

  .item-qnt {
    display: block;
    margin-top: 0.5rem;
  }
`

export const TotalPrice = styled.div`
  color: ${colors.orangishWhite};
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`

export const InputGroup = styled.div`
  flex: auto;
  margin-bottom: 0.5rem;

  label {
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    background-color: ${colors.orangishWhite};
    border: 1px solid ${colors.orangishWhite};
    height: 2rem;
    padding: 0 0.5rem;
    width: 100%;

    &.error {
      border: 1px solid yellow;
      color: black;
      font-weight: bold;
      background-color: rgba(200, 80, 80, 0.5);
    }
  }
`

export const DeliveryForm = styled.form`
  font-weight: bold;
  font-size: 0.875rem;
  color: ${colors.orangishWhite};
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  div {
    display: inline-block;
  }

  ${ButtonDishes} {
    margin-bottom: 0.5rem;
  }

  .split-input {
    display: flex;
    justify-content: space-between;

    ${InputGroup} {
      max-width: 10rem;
    }
  }
  .last-input {
    margin-bottom: 1.5rem;
  }
`
