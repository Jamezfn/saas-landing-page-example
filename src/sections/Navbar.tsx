import logoImage from '@/assets/images/logo.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import Button from '@/components/Button';

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className='py-4 lg:py-8'>
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-foreground/15 rounded-full p-2 px-4 md:pr-2">
                    <div>
                        <Image src={logoImage} alt="Layers logo" className='h-9 md:h-auto w-auto' />
                    </div>
                    <div className='lg:flex items-center justify-center hidden'>
                        <nav className='flex  gap-6 font-medium'>
                            {
                                navLinks.map(link => (
                                    <a href={link.href} key={link.label}>
                                        {link.label}
                                    </a>
                                ))
                            }
                        </nav>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <FontAwesomeIcon icon={faBars} className='h-5 w-6 text-foreground md:hidden' />
                        <Button variant='secondary' className='hidden md:inline-flex items-center'>Log In</Button>
                        <Button className='hidden md:inline-flex items-center'>Sign Up</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
