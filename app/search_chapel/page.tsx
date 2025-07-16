export default function Search_chapel() {
  const regions = [
    { name: "北海道", key: "hokkaido" },
    { name: "東北", key: "tohoku" },
    { name: "関東", key: "kanto" },
    { name: "中部", key: "chubu" },
    { name: "近畿", key: "kinki" },
    { name: "中国", key: "chugoku" },
    { name: "四国", key: "shikoku" },
    { name: "九州", key: "kyushu" },
    { name: "沖縄", key: "okinawa" }
  ];

  return (
    <div className="">
      <div className="flex divide-x-2 justify-center">
        {regions.map((region) => (
          <nav key={region.key} className="px-2">{region.name}</nav>
        ))}

      </div>
    </div>
  )
}