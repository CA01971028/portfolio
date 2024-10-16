'use client';
import { useState } from 'react';
import Image from 'next/image';
import img1 from '../img/img1.jpg';
import Dropdown from './Dropdown'



const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <header className='h-full w-full bg-secondary'>
                {/* <div className="w-full h-20 md:h-24 bg-secondary flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full relative">
                        <Image src={img1} alt="description" layout="fill" className="object-cover" />
                    </div>
                    <Hamberger isOpen = {isOpen} setIsOpen = {setIsOpen}/>
                </div> */}

            </header>
            {/* <Dropdown/> */}
        </>
        
    );
}

export default Header;
