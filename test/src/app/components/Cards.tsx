import tetris from '../img/tetris.png';
import Image from 'next/image';
import Tag from './Tag'
const Cards = () => {
    return (
        <>
            <div className='size-96 bg-white mx-auto my-8 rounded-lg'>
                <Image src={tetris} alt="テトリスの画像" className=' h-auto mx-auto rounded-lg' />
                <div className='text-4xl text-center font-script' >
                    <span className=''>TETRIS</span>
                </div>
                <div>
                    　１回生の時に三人チームで作成したものでブロックを消すことでスコアが上がるテトリスのようなゲームです！
                </div>
                <div className='text-2xl'>
                    使用言語
                </div>
                <Tag items ={['HTML','CSS','JavaScript']}/>
            </div>
            <div className='size-96 bg-white mx-auto my-0 rounded-lg'>
                {/* コンテンツ */}
            </div>
        </>
    );
}

export default Cards;
