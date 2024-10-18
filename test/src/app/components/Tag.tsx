const Tag = (props: { items: string[] }) => {
    const renderItem = (item: string, index: number) => {
        switch (item) {
            case 'HTML':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-html rounded-lg my-1">{item}</div>;
            case 'CSS':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-css rounded-lg my-1">{item}</div>;
            case 'JavaScript':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-javascript rounded-lg my-1">{item}</div>;
            case 'TypeScript':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-typescript rounded-lg my-1">{item}</div>;
            case 'Python':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-python rounded-lg my-1">{item}</div>;
            case 'Flask':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-flask rounded-lg my-1">{item}</div>;
            case 'React':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-react rounded-lg my-1">{item}</div>;
            case 'Next.js':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-nextjs rounded-lg my-1">{item}</div>;
            case 'Bootstrap':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-bootstrap rounded-lg my-1">{item}</div>;
            case 'Tailwind CSS':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-tailwind rounded-lg my-1">{item}</div>;
            case 'Material-UI':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-mui rounded-lg my-1">{item}</div>;
            case 'mysql':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-mysql rounded-lg my-1">{item}</div>;
            case 'mongodb':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-mongodb rounded-lg my-1">{item}</div>;
            case 'AWS':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-aws rounded-lg my-1">{item}</div>;
            case 'Azure':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-azure rounded-lg my-1">{item}</div>;
            default:
                return <div key={index} className="text-black px-2 mx-1 py-3 bg-gray-200 rounded-lg my-1">{item}</div>;
        }
    };

    return (
        <div className="flex flex-wrap">
            {props.items.map((item, index) => renderItem(item, index))}
        </div>
    );
};

export default Tag;
