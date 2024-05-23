import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo da loja" className='logo'/>
        <h2> Os melhores aparelhos eletrônicos, <br /> você encontra aqui!</h2>
        <nav className='navbar'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Carrinho</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Meus pedidos</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;
