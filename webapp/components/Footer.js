import Link from 'next/link';

import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="flex flex-col w-full items-center py-6 text-sm md:text-base max-w-7xl mx-auto text-primary-muted">
            <div>
                <Link 
                    href="/legals"
                >
                    Mentions légales
                </Link>
                <> | </>
                <a
                    href='mailto: contact@pierrefg.com'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <><AiOutlineMail className="inline" /> contact@pierrefg.com</>
                </a>
            </div>
            <br />
            <p>
                Copyright <AiOutlineCopyright className='inline'/> Pierre Faure--Giovagnoli, 2024
            </p>
        </div>
    );
}