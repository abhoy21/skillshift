import AuthForm from "@/components/auth/AuthForm";

export default function SignUpPage(): React.JSX.Element {
  return <AuthForm isSignin={false} />;
}
