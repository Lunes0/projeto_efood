import Facebook from '../../assets/icons/facebook'
import Instagram from '../../assets/icons/instagram'
import Logo from '../../assets/icons/logo'
import Twitter from '../../assets/icons/twitter'
import { FooterContainer } from './styles'

const Footer = () => (
  <FooterContainer>
    <div>
      <Logo />
      <ul>
        <li>
          <Instagram className="icon" />
        </li>
        <li>
          <Facebook className="icon" />
        </li>
        <li>
          <Twitter className="icon" />
        </li>
      </ul>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela
        entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer
