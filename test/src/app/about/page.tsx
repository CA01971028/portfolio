import Header from "../components/Header";
const About = () => {
    return (
        <>
        <Header />
         <h2  id='about' className="text-6xl text-center mb-10 text-accent ">ABOUT</h2>
         <div className="bg-white w-4/6 mx-auto rounded-lg ">
            <div className="text-4xl text-center font-black my-2">自己紹介</div>
            <div className="text-1xl">　私は専門学校の３回生で、IT分野における多様な技術を学び、実際のプロジェクトに取り組んできました。これまでに、以下のプログラミング言語やフレームワークに習熟しています。
            「HTML, CSS, JavaScript, TypeScript, Python, Flask, React, Next.js, Bootstrap, Material-UI, Tailwind CSS, AWS, Azure, MongoDB, MySQL」などを使用した開発経験があります。
            ITスキルの向上を図り、<span className="text-red-400">ITパスポート</span>や<span className="text-red-400">基本情報技術者試験</span>といった資格取得に加え、<span className="text-red-400">AWSクラウドプラクティショナー</span>や<span className="text-red-400">AWSソリューションアソシエイト</span>などのクラウド関連資格も取得しました。</div>
            <div className="text-4xl text-center font-black my-5">チーム開発とリーダーシップ</div>
            <div className="text-1xl">　複数人のチーム開発プロジェクトで<span className="text-red-400">チームリーダー</span>を務めてきました。メンバーのタスク管理を行い、技術的な質問への対応や進行管理をする中で、私自身も技術力を高めることができました。<span className="text-red-400">バックエンドのAPI開発</span>を担当することが多いですが、<span className="text-red-400">フルスタックエンジニア</span>としてアプリ開発にも対応可能です。</div>
            <div className="text-4xl text-center font-black my-5">使用技術とプロジェクト経験</div>
            <div className="text-1xl">　バックエンドでは<span className="text-red-400">Python</span>を用い、フロントエンドでは<span className="text-red-400">HTML, CSS, JavaScript, TypeScript, React, Next.js</span>を活用した開発を得意としています。また、クラウドサービスの利用経験も豊富で、２回生では<span className="text-red-400">AWS</span>、３回生では<span className="text-red-400">Azure</span>を使ったプロジェクトに参加しました。特に、公開APIを利用した要約アプリの開発を経験しており、技術の幅を広げています。（現在は金銭的な問題で一時停止中）</div>
            <div className="text-4xl text-center font-black my-5">性格と価値観</div>
            <div className="text-1xl">
            　<span className="text-red-400">好奇心旺盛</span>で、新しい技術やツールに積極的に挑戦することが好きです。例えば、新しい機能や技術を見つけると、すぐに試してみたくなるタイプです。短所としては、興味を持ったことに<span className="text-red-400">熱中しすぎる</span>点があり、時間を忘れて没頭してしまうこともあります。しかし、その姿勢が技術力の向上に繋がっていると考えています。
            </div>
         </div>
         
        </>
    );
}

export default About;