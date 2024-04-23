import Image from "next/image";
import { Inter } from "next/font/google";
import { SignIn } from '@clerk/nextjs'
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export default function SignUpPage( ) {

    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                

                    </div>
                    <div className="md:ml-4 lg:ml-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8 lg:mt-0">
                   
                            <SignUp  appearance={{
                                baseTheme: dark
                            }} />
                    </div>

                </div>
            </div>
        </>
    );
}