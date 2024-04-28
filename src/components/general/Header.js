import Link from "next/link";


const navigation = [
    { name: "Home", href: "/" },
    { name: "Registration", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Testimonial", href: "/" },
  ];


export function Header() {
    return (
        <header className="">
        <nav
          className="flex items-center justify-between p-6 px-8"
          aria-label="Global"
        >
          <div className="flex-1">
            <Link href="/">
                <img
                  className="h-6"
                  src="/SorkNew.svg"
                  alt="Sork Logo"
                />
            </Link>
          </div>
  
          <div className="sm:flex sm:flex-wrap gap-x-12 flex justify-center items-center">
            {navigation.map((item) => {
                return (
                  <Link key={item.name} href={item.href} passHref>
                    <span className="hidden lg:block text-lg font-semibold leading-6 text-white hover:text-gray-100 cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                );
              }
            )}
          </div>
  
          <div className="lg:flex lg:flex-1 lg:justify-end gap-x-6">
            <Link href="/" passHref>
              <button className="text-white px-2 py-1 text-lg">Log in</button>
            </Link>
            <Link href="/" passHref>
              <button className="text-neutral-800 px-3 py-1 text-lg rounded-md bg-gradient-to-r from-primary to-secondary">Sign Up</button>
            </Link>
        
          </div>
        </nav>
      </header>
    );
}


export default Header;
