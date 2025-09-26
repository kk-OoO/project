"use client";

import { useEffect, useState } from "react";

type Props = {
  chapelId: number;
};

type plans = {
  id: number;
  plan_name: string;
  guests: number;
  total_price: number;
};

export default function ChapelPlansComponent({ chapelId }: Props) {
  const [plans, setPlans] = useState<plans[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(
          `/api/getChapelPlanByChapelId?chapelId=${chapelId}`
        );
        const data = await res.json();
        setPlans(data);
      } catch (error) {
        console.error("プラン取得失敗:", error);
      }
    };
    fetchPlans();
  }, [chapelId]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">プラン一覧</h2>
      <ul className="space-y-2">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md"
          >
            <p>プラン名: {plan.plan_name}</p>
            <p>人数: {plan.guests}名</p>
            <p>料金: ¥{plan.total_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
