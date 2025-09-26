import CreatePlanForm from "@/features/create_plan/components/CreatePlanForm";

export default async function create_plan({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <div>
      <CreatePlanForm chapelId={id} />
    </div>
  );
}
