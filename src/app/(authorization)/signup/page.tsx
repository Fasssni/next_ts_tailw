import Image from "next/image";
import { redirect } from "next/navigation";


import { getPatient, getUser } from "@/lib/actions/actions.patient";
import SignupForm from "@/components/forms/SignupForm";

const Signup = async ({ params: { userId } }: SearchParamProps) => {


  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
  
          <SignupForm />
          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>
    </div>
  );
};

export default Signup