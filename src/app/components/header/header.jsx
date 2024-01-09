import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/logo";

const Header = () => {
  return (
    <div className="flex justify-between absolute top-0 w-full bg-slate-600 z-50 items-center p-5 py-2 border-b">
      <Logo />
      <Link href="/add" className="btn">
        Create Invoice
      </Link>
    </div>
  );
};

export default Header;
