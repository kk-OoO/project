import UploadReviewFormComponent from "@/features/upload_review/components/upload-review-form";

export default async function UploadReviewPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <div>
      <UploadReviewFormComponent chapelId={id} />
    </div>
  );
}
