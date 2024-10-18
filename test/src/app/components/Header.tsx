import Image from 'next/image';
import img1 from '../img/test.jpg';

const Header = () => {
  return (
    <>
      <header className="relative h-72 w-full md:h-5/6 bg-secondary flex flex-col items-center justify-center">

        <div className="absolute inset-0">
          <Image src={img1} alt="Background" layout="fill" objectFit="cover" />
        </div>

        <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="text-6xl md:text-8xl my-3 font-script">jugon</div>
          <div className="text-4xl md:text-6xl font-script">PORTFOLIO</div>
        </div>

        <div className="absolute bottom-5 left-auto right-auto z-10 flex flex-row justify-center space-x-10 md:space-x-20">
          <a href="/#card"><div className="text-3xl md:text-4xl">product</div></a>
          <a href="/#skills"><div className="text-3xl md:text-4xl">skill</div></a>
          <a href="/about"><div className="text-3xl md:text-4xl">about</div></a>
        </div>
      </header>
    </>
  );
}

export default Header;
