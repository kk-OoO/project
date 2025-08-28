import Image from "next/image";
import Card from "../../components/card";

const array = [
  {
    text: "1.式場探し",
    detail:
      "全国の式場から、あなたにあった一つだけの式場をお探しいただけます。",
  },
  {
    text: "2.プラン作成",
    detail:
      "あなたが選んだ式場で、理想のウェディングプランをお作りいただけます。",
  },
  {
    text: "3.オンライン招待状の作成",
    detail:
      "作製したプランをもとに、当サイトオリジナルのオンライン招待状をお作りいただけます。",
  },
];

export default function Guide() {
  return (
    <div>
      <div className="text-center">
        <h2 className="inline mx-auto border-b-1 text-2xl mt-6">ご利用方法</h2>
      </div>
      <div className="flex justify-between">
        {array.map((item, index) => (
          <div key={index} className="flex items-center">
            <Card text={item.text} detail={item.detail} />
            {index < array.length - 1 && (
              <Image src="/arrow.svg" alt="arrow" width={48} height={48} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
