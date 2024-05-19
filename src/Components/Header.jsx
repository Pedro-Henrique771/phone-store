import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo da loja" className='logo'/>
        <h2> Os melhores aparelhos eletrônicos, <br /> você encontra aqui!</h2>
        <nav className='navbar'>
          <ul>
            <li>Home</li>
            <li>Carrinho</li>
            <li>Favoritos</li>
            <li>Meus pedidos</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;
