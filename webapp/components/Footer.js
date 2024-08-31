import Link from 'next/link';

import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="flex flex-col gap-0 w-full items-center py-6 text-sm md:text-base max-w-7xl mx-auto text-primary-muted">
            <a
                href='mailto: contact@pierrefg.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <><AiOutlineMail className="inline" /> contact@pierrefg.com</>
            </a>
            <div className='text-center'>
                <Link 
                    href="/legals"
                >
                    Mentions légales
                </Link>
                <span className='hidden md:inline'> | </span>
                <span className='block md:hidden'></span>
                <Link 
                    href="/privacy"
                >
                    Politique de confidentialité
                </Link>
            </div>
            <div >
                <AiOutlineCopyright className='inline'/> Pierre Faure--Giovagnoli, 2024
            </div>
        </div>
    );
}