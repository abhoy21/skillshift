import InterviewPageComponent from "@/components/interview/InterviewComponent";

export default async function InterviewPage({
  params,
}: RouteParams): Promise<React.JSX.Element> {
  const { id } = await params;
  return <InterviewPageComponent id={id} />;
}
