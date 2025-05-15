import SignUp from "@/app/components/auth/SignUp"



const page = () => {
  return (
    <div className="w-full signup bg-cover bg-no-repeat bg-center h-screen">
        <div className="w-5/6 md:w-4/6 mx-auto h-full ">
            <SignUp/>
        </div>
    </div>
  )
}

export default page