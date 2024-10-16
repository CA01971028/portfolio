import Image from 'next/image';
import img1 from '../img/test.jpg';

const Header = () => {
  return (
    <>
      <header className="relative h-72 w-full md:h-96 bg-secondary flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src={img1} alt="Background" layout="fill" objectFit="cover" />
        </div>

        <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>

        <div className="text-5xl font-script relative z-10">jugon</div>
      </header>
    </>
  );
}

export default Header;
