import styled from 'styled-components'
import { colors } from '../../globalStyles'
import { ButtonDishes } from '../CardDishes/styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .dish {
    width: 17.5rem;
    object-fit: cover;
  }
`

export const ModalContent = styled.div`
  position: absolute;
  background-color: ${colors.primary};
  color: ${colors.orangishWhite};
  display: flex;
  z-index: 2;
  padding: 2rem;

  .modal_infos {
    padding-left: 1.5rem;
    font-size: 0.875rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 900;
      padding-bottom: 1rem;
    }

    p {
      line-height: 22px;
      padding-bottom: 1.5rem;
    }
  }

  .close {
    object-fit: cover;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }

  ${ButtonDishes} {
    display: block;
    width: auto;
    margin: 0;
    margin-top: 1rem;
  }
`
