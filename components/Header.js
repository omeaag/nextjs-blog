import Link from "next/link";

const Header = () => {
  return (
    <div className="Header">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Header;
