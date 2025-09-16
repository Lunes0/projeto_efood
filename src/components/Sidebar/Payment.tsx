import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import type { RootReducer } from '../../store'
import { checkoutClose, clear, close } from '../../store/reducers/sidebar'

import { getTotalPrice, localePrice, masks } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import { ButtonDishes } from '../CardDishes/styles'

import * as S from './styles'

const Delivery = () => {
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      reciver: '',
      address: '',
      city: '',
      postalCode: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      reciver: Yup.string().min(7, 'O nome precisa ser completo').required('Campo obrigatório'),
      address: Yup.string().min(7, 'Endereço precisa ser completo').required('Campo obrigatório'),
      city: Yup.string().min(4, 'Cidade inválida').required('Campo obrigatório'),
      postalCode: Yup.string()
        .min(9, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required('Campo obrigatório'),
      addressNumber: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().min(7, 'O nome precisa ser completo').required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Número do cartão inválido')
        .max(19, 'Número do cartão inválido')
        .required('Campo obrigatório'),
      cvv: Yup.string().min(3, 'CVV inválido').max(4, 'CVV inválido').required('Campo obrigatório'),
      expireMonth: Yup.string()
        .min(2, 'Mês inválido')
        .max(2, 'Mês inválido')
        .required('Campo obrigatório'),
      expireYear: Yup.string()
        .min(2, 'Ano inválido')
        .max(2, 'Ano inválido')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.reciver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.postalCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            },
            code: Number(values.cvv)
          }
        },
        products: items.map((item) => ({
          id: item.dish.nome,
          price: item.dish.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const finishPurchase = () => {
    dispatch(close())
    dispatch(checkoutClose())
  }

  const goBackToCart = () => {
    dispatch(checkoutClose())
  }

  return (
    <S.Sidebar>
      {isSuccess && data ? (
        <>
          <S.Overlay onClick={finishPurchase} />
          <S.SuccessMenssage>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em
              breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
              cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
              garantindo assim sua segurança e bem-estar durante a refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom
              apetite!
            </p>
            <ButtonDishes onClick={finishPurchase}>Concluir</ButtonDishes>
          </S.SuccessMenssage>
        </>
      ) : (
        <S.DeliveryForm onSubmit={form.handleSubmit}>
          {payment ? (
            <>
              <h3>Pagamento - Valor a pagar {localePrice(getTotalPrice(items))}</h3>
              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={(e) => form.setFieldValue('cardName', masks.onlyText(e.target.value))}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
              </S.InputGroup>
              <div className="card-infos split-input">
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={(e) =>
                      form.setFieldValue('cardNumber', masks.cardNumber(e.target.value))
                    }
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={(e) => form.setFieldValue('cvv', masks.cvv(e.target.value))}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvv') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <div className="split-input last-input">
                <S.InputGroup>
                  <label htmlFor="expireMonth">Mês de vencimento</label>
                  <input
                    id="expireMonth"
                    type="text"
                    name="expireMonth"
                    value={form.values.expireMonth}
                    onChange={(e) =>
                      form.setFieldValue('expireMonth', masks.expireMonth(e.target.value))
                    }
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireMonth') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expireYear">Ano de vencimento</label>
                  <input
                    id="expireYear"
                    type="text"
                    name="expireYear"
                    value={form.values.expireYear}
                    onChange={(e) =>
                      form.setFieldValue('expireYear', masks.expireYear(e.target.value))
                    }
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <ButtonDishes
                onClick={() => form.handleSubmit}
                type="submit"
                disabled={form.isSubmitting || isLoading}
              >
                Finalizar pagamento
              </ButtonDishes>
              <ButtonDishes onClick={() => setPayment(false)}>
                Voltar para a edição de endereço
              </ButtonDishes>
            </>
          ) : (
            <>
              <h3>Entrega</h3>
              <S.InputGroup>
                <label htmlFor="reciver">Quem irá receber</label>
                <input
                  id="reciver"
                  type="text"
                  name="reciver"
                  value={form.values.reciver}
                  onChange={(e) => form.setFieldValue('reciver', masks.onlyText(e.target.value))}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('reciver') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.InputGroup>
              <div className="split-input">
                <S.InputGroup>
                  <label htmlFor="postalCode">CEP</label>
                  <input
                    id="postalCode"
                    type="text"
                    name="postalCode"
                    value={form.values.postalCode}
                    onChange={(e) => form.setFieldValue('postalCode', masks.cep(e.target.value))}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('postalCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    id="addressNumber"
                    type="text"
                    name="addressNumber"
                    value={form.values.addressNumber}
                    onChange={(e) =>
                      form.setFieldValue('addressNumber', masks.addressNumber(e.target.value))
                    }
                    onBlur={form.handleBlur}
                    className={checkInputHasError('addressNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <S.InputGroup className="last-input">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </S.InputGroup>
              <ButtonDishes onClick={() => setPayment(true)}>
                Continuar com o pagamento
              </ButtonDishes>
              <ButtonDishes onClick={goBackToCart}>Voltar para o carrinho</ButtonDishes>
            </>
          )}
        </S.DeliveryForm>
      )}
    </S.Sidebar>
  )
}

export default Delivery
