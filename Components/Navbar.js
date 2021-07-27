import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/logo.svg" />
      </div>
      <h1>Happy Hog</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/menu">
        <a>Menu</a>
      </Link>
      <Link href="/catering">
        <a>Catering</a>
      </Link>
    </nav>
  );
};

export default Navbar;
