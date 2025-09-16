import { useEffect, useState } from "react";
import { getChapels } from "../fetchers";
import type { Chapel } from "../types";
import ChapelComponent from "./chapel";
import SearchChapel from "./search_input";
import Link from "next/link";

type Props = {
  region: string;
};

export default function Chapels({ region }: Props) {
  const [data, setData] = useState<Chapel[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getChapels(region);
      setData(data);
    };
    fetchData();
  }, [region]);
  return (
    <div>
      <SearchChapel setData={setData} />
      {data.map((chapel) => (
        <Link href={`/chapel/${chapel.id}`} key={chapel.id}>
          <ChapelComponent key={chapel.id} chapel={chapel} />
        </Link>
      ))}
    </div>
  );
}
