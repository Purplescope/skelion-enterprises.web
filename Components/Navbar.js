import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <Link href="/"><a>Home</a></Link>
    <Link href="/services"><a>Services</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/contact"><a>Contact</a></Link>
  </nav>
);

export default Navbar;
