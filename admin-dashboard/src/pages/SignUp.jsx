import Header from "../components/Header";
import Signup from "../components/SignUp";

export default function SignupPage() {
  return (
      <>
          <div className="min-h-full h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border border-black">
      <div className="flex flex-col w-[30rem]">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
                  <Signup /></div>
    </div>
    </>
  );
}
