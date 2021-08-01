import Link from 'next/link'

const Navbar = () => {
  return (
    <nav class='navbar'>
      <img className='logo' src='/logo.svg' />

      <h1 className='navbar-header'>Happy Hog</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/menu'>
        <a>Menu</a>
      </Link>
      <Link href='/catering'>
        <a>Catering</a>
      </Link>
    </nav>
  )
}

export default Navbar
