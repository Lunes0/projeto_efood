import type { RootReducer } from '../store'

export const localePrice = (price = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: RootReducer['cart']['items']) => {
  return items.reduce((acc, crr) => acc + Number(crr.dish.preco) * crr.quantity, 0)
}

export const masks = {
  cep(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9)
  },
  cardNumber(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .slice(0, 19)
  },
  cvv(value: string) {
    return value.replace(/\D/g, '').slice(0, 4)
  },
  expireMonth(value: string) {
    return value.replace(/\D/g, '').slice(0, 2)
  },
  expireYear(value: string) {
    return value.replace(/\D/g, '').slice(0, 2)
  },
  addressNumber(value: string) {
    return value.replace(/\D/g, '').slice(0, 5)
  },
  onlyText(value: string) {
    return value.replace(/\d/g, '').replace(/\s+/g, ' ').trimStart()
  }
}
