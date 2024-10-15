import Image from 'next/image';
import img1 from '../img/img1.jpg';

const Header = () => {
    return (
        <header className='h-full w-full'>
            <div className="w-full h-20 md:h-24 bg-secondary flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full relative">
                    <Image src={img1} alt="description" layout="fill" className="object-cover" />
                </div>
            </div>
        </header>
    );
}

export default Header;
