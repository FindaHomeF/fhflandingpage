import Login from "../components/auth/Login"
import SignUp from "../components/auth/SignUp"

const page = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full items-start h-full">

        <div className="signup w-3/6 h-full bg-cover bg-no-repeat bg-center">
          <div className="w-4/6 mx-auto h-full">
            <SignUp/>
          </div>
        </div>

        <div className="w-3/6 h-full">
          <div className="w-4/6 mx-auto h-full">
            <Login/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page