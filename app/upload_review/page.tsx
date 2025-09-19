import UploadReviewFormComponent from "@/features/upload_review/components/upload-review-form";
import { uploadReview } from "@/features/upload_review/fetchers";
import { UploadReviewForm } from "@/features/upload_review/types";
import { createClient } from "@/lib/supabase/server";
import { reviews } from "@prisma/client";

export default async function UploadReviewPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  // You need to construct an UploadReviewForm object here
  const uploadReviewForm: UploadReviewForm = {
    // fill in the required fields, for example:
    // userId: data.user?.id ?? "",
    role: "",
    rating: 0,
    comment: "",
  };
  const review: reviews = await uploadReview(uploadReviewForm);

  return (
    <div>
      <UploadReviewFormComponent {...review} />
    </div>
  );
}
