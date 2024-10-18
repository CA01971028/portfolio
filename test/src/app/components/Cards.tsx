import tetris from '../img/tetris.png';
import orenge from '../img/orenge.png';
import trip from '../img/trip.png';
import hamball from '../img/hamboll.png'
import Image from 'next/image';
import Tag from './Tag'
const Cards = () => {
    return (
        <>
            <h2 className="text-6xl text-center mb-10 text-accent">PROJECT</h2>
            <div id="card" className="flex flex-wrap justify-center">
                <div className='w-96 h-auto bg-white mx-3 my-3 rounded-lg flex flex-col'>
                    <Image src={tetris} alt="テトリスの画像" className='h-52 mx-auto rounded-lg' />
                    <div className='text-4xl text-center font-script'>
                        <span>TETRIS</span>
                    </div>
                    <div className='flex-1'>
                        １回生の時に三人チームで作成したものでブロックを消すことでスコアが上がるテトリスのようなゲームです！
                    </div>
                    <div className='text-2xl'>使用言語</div>
                    <Tag items={['HTML', 'CSS', 'JavaScript']} />
                </div>

                <div className='w-96 h-auto bg-white mx-3 my-3 rounded-lg flex flex-col'>
                    <a href="https://orange-and-blue-h7fpedvji-ca01971028s-projects.vercel.app/title.html">
                        <Image src={orenge} alt="オレンジの画像" className='h-52 mx-auto rounded-lg' />
                    </a>
                    <div className='text-4xl text-center font-script'>
                        <span>ORENGE & BLUE</span>
                    </div>
                    <div className='flex-1'>
                        2回生の時に三人チームで作成したもので〇×ゲーム少し似たゲームで持ち駒が三種類あり駒の種類によって駒の上から自分の駒を置いたり、置かれたり、自分の駒なら取って再配置できるようなゲームです！
                    </div>
                    <div className='text-2xl'>使用言語</div>
                    <Tag items={['HTML', 'CSS', 'JavaScript']} />
                </div>

                <div className='w-96 h-auto bg-white mx-3 my-3 rounded-lg flex flex-col'>
                    <Image src={trip} alt="旅行サイトの画像" className='h-52 mx-auto rounded-lg' />
                    <div className='text-4xl text-center font-script'>
                        <span>TRIP SITE</span>
                    </div>
                    <div className='flex-1'>
                        2回生の時に２人チームで作成したもので旅行サイトを作成しつつフレームワークの学習することを目標に作成。
                    </div>
                    <div className='text-2xl'>使用言語：フレームワーク</div>
                    <Tag items={['HTML', 'CSS', 'JavaScript', 'Bootstrap']} />
                </div>

                <div className='w-96 h-auto bg-white mx-3 my-3 rounded-lg flex flex-col'>
                    <Image src={hamball} alt="ハムボールの画像" className='h-52 mx-auto rounded-lg' />
                    <div className='text-4xl text-center font-script'>
                        <span>HAM BALL</span>
                    </div>
                    <div className='flex-1'>
                        3回生の時に２人チームで作成したもので同じハムスターを接触させることでスコアが上昇していくゲームを作成しました。特徴としては、mysqlでスコアを管理しているためランキングなども表示できる。
                    </div>
                    <div className='text-2xl'>使用言語：フレームワーク</div>
                    <Tag items={['HTML', 'CSS', 'TypeScript', 'Python', 'React', 'Material-UI', 'mysql', 'Flask']} />
                </div>
            </div>
        </>
        
    );
}

export default Cards;
