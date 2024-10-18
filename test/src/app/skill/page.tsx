import Tag from '../components/Tag';
import Header from '../components/Header'

const Skills = () => {
  return (
    <>
        <Header/>
        <section id="skills" className="py-10 bg-base">
            <h2 className="text-4xl text-center mb-10">Skills & Expertise</h2>
            <div className="flex flex-wrap justify-center">
                <div className='w-80 h-auto bg-white mx-3 my-3 rounded-lg p-4'>
                <h3 className="text-2xl mb-4">Programming Languages</h3>
                <Tag items={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']} />
                </div>

                <div className='w-80 h-auto bg-white mx-3 my-3 rounded-lg p-4'>
                <h3 className="text-2xl mb-4">Frameworks & Libraries</h3>
                <Tag items={['React', 'Next.js', 'Flask', 'Bootstrap', 'Tailwind CSS', 'Material-UI']} />
                </div>

                <div className='w-80 h-auto bg-white mx-3 my-3 rounded-lg p-4'>
                <h3 className="text-2xl mb-4">Databases</h3>
                <Tag items={['mysql','mongodb']} />
                </div>

                <div className='w-80 h-auto bg-white mx-3 my-3 rounded-lg p-4'>
                    <h3 className="text-2xl mb-4">Cloud Services</h3>
                    <Tag items={['AWS', 'Azure']} />
                    <div className='text-2xl'>取得資格</div>
                    <div>
                        <div>
                            <b className="mt-3 text-1xl">AWS Certifications: Cloud Practitioner</b>
                        </div>
                        <div>
                            <b className="mt-3 text-1xl">AWS Solutions Associate</b>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  );
}

export default Skills;