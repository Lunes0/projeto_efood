import { ButtonDishes } from '../CardDishes/styles'

import { localePrice } from '../../utils'

import close from '../../assets/images/close.png'
import { ModalContainer, ModalContent } from './styles'

type Props = {
  onClose: () => void
  dish: {
    nome: string
    descricao: string
    preco: number
    foto: string
    porcao: string
  }
}

const Modal = ({ onClose, dish }: Props) => {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={handleContentClick} className="container">
        <img src={dish.foto} className="dish" alt={dish.nome} />
        <div className="modal_infos">
          <h3>{dish.nome}</h3>
          <p>{dish.descricao}</p>
          <span>Serve: {dish.porcao}</span>
          <ButtonDishes>Adicionar ao carrinho - {localePrice(dish.preco)}</ButtonDishes>
        </div>
        <img className="close" src={close} alt="Fechar" onClick={onClose} />
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
