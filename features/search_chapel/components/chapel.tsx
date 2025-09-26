import Image from "next/image";
import type { Chapel } from "../types";

type Props = {
  chapel: Chapel;
};

export default function ChapelComponent({ chapel }: Props) {
  return (
    <div>
      <div className="m-3">
        <h2 className="">{chapel.name}</h2>
        <Image src={chapel.image} alt={chapel.name} width={300} height={200} />
      </div>
    </div>
  );
}
