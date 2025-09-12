"use client";

import Chapels from "@/features/search_chapel/components/chapels";
import RegionNavigation from "@/features/search_chapel/components/navigation";
import { useState } from "react";

export default function Search_chapel() {
  const [region, setRegion] = useState<{ name: string; key: string }>({
    name: "",
    key: "",
  });
  return (
    <div className="">
      <RegionNavigation setRegion={setRegion} />
      {region.key != "" ? <h1>{region.name}の式場一覧</h1> : null}
      <Chapels region={region.key} />
    </div>
  );
}
