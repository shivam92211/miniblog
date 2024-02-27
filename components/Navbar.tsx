import Link from "next/link"
import Image from "next/image"
import {NAV_LINKS} from "@/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-2 px-6 /*bg-slate-900*/">
        <Link href="/" className="lg:flex flex">
            
            <Image 
                src="/assets/minilogo.png"
                alt="parallettes" 
                width={40} // Optional: specify the width of the image
                height={50} 
                
            />
            <h1 className="pt-3.5 pl-2 font-bold text-2xl" >
                Minifit
            </h1>
            
        </Link>


        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} 
                className="regular-16 text-gray-50 flexCenter 
                cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
                ))}
        </ul>

        {/* <div className="lg:flexCenter">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"                
                />
        </div> */}

        <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />

    </nav>
    
  )
}

export default Navbar