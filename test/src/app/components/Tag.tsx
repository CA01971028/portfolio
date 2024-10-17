const Tag = (props: { items: string[] }) => {
    const renderItem = (item: string, index: number) => {
        switch (item) {
            case 'HTML':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-html rounded-lg">{item}</div>;
            case 'CSS':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-css rounded-lg">{item}</div>;
            case 'JavaScript':
                return <div key={index} className="text-white px-2 mx-1 py-3 bg-javascript rounded-lg">{item}</div>;
            default:
                return <div key={index}>{item}</div>;
        }
    };

    return (
        <>
        <div className="flex flex-column">
            {props.items.map((item, index) => renderItem(item, index))}
        </div>
            
        </>
    );
};

export default Tag;
