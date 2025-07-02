import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white py-4 shadow-md font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl">
          MyApp
        </Link>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
