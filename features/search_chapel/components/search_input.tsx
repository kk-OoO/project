import { useEffect, useState } from "react";
import { getChapel } from "../fetchers";
import { Chapel } from "../types";

type Props = {
  setData: React.Dispatch<React.SetStateAction<Chapel[]>>;
};

export default function SearchChapel({ setData }: Props) {
  const [name, setName] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChapel(name);
      setData(data);
    };
    fetchData();
  }, [name, setData]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Chapel名を検索..."
      />
    </div>
  );
}
