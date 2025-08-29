import Footer from '../Footer'

type Props = {
  header: React.ReactNode
  children?: React.ReactNode
}

const MainLayout = ({ children, header }: Props) => (
  <>
    {header}
    <main>{children}</main>
    <Footer />
  </>
)

export default MainLayout
