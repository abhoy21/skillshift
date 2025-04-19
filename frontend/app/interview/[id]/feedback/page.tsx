import FeddbackComponent from "@/components/interview/FeedbackPageComponent";

export default async function FeedbackPage({
  params,
}: RouteParams): Promise<React.JSX.Element> {
  const { id } = await params;
  return <FeddbackComponent id={id} />;
}
