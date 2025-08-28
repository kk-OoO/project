import Card from "../components/card";

const array = ["1.式場探し", "2.プラン作成", "3.オンライン招待状の作成"];

export default function Home() {
  return (
    <div>
      <div className="text-center">
        <h2 className="inline mx-auto border-b-1 text-2xl">ご利用方法</h2>
      </div>
      <div className="flex justify-between">
        {array.map((text) => (
          <Card key={text} text={text} />
        ))}
      </div>
    </div>
  );
}
