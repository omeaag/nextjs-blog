import Link from "next/link";

const Header = () => {
  return (
    <div className="Header" style={{}}>
      <Link style={{ marginRight: "10px", textDecoration: "none" }} href="/">
        Home
      </Link>
      <Link
        style={{ marginRight: "10px", textDecoration: "none" }}
        href="/about"
      >
        About
      </Link>
      <Link style={{ textDecoration: "none" }} href="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Header;
