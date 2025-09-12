import React from "react";

type RegionNavigationProps = {
  setRegion: React.Dispatch<
    React.SetStateAction<{ name: string; key: string }>
  >;
};

export default function RegionNavigation({ setRegion }: RegionNavigationProps) {
  const regions = [
    { name: "北海道", key: "hokkaido" },
    { name: "東北", key: "tohoku" },
    { name: "関東", key: "kanto" },
    { name: "中部", key: "chubu" },
    { name: "関西", key: "kansai" },
    { name: "中国", key: "chugoku" },
    { name: "四国", key: "shikoku" },
    { name: "九州", key: "kyushu" },
    { name: "沖縄", key: "okinawa" },
  ];

  function ConditionSearch(region: { name: string; key: string }) {
    setRegion(region);
  }

  return (
    <div className="flex divide-x-2 justify-center">
      {regions.map((region) => (
        <nav
          key={region.key}
          className="px-2"
          onClick={() => {
            ConditionSearch(region);
          }}
        >
          {region.name}
        </nav>
      ))}
    </div>
  );
}
