import { UnlockBtn } from "../global/Buttons/ButtonGS"



const SignUp = () => {
  return (
    <div className="w-full h-full flex-col flex-itc-juc text-white text-center">
            
        <div className="student border-b border-b-white/60 pb-7">
            <div className="space-y-2">
            <h3 className="sign-head">Sign Up as a Student</h3>
            <p className="sign-para pb-2">Register as a student on Find-a-Home FUTA platform. Register and Upload all necessary requirements</p>
            <div className="w-fit mx-auto"><UnlockBtn text={'Sign Up'} className={"px-6 font-semibold text-sm h-11"}/></div>
            </div>
        </div>

        <div className="student py-7 border-b border-b-white/60 pb-7">
            <div className="space-y-2">
            <h3 className="sign-head">Sign Up as a Property Agent</h3>
            <p className="sign-para pb-2">Register as a Property Agent on Find-a-Home FUTA platform. Register and Upload all necessary requirements</p>
            <div className="w-fit mx-auto"><UnlockBtn text={'Sign Up'} className={"px-6 font-semibold text-sm h-11"}/></div>
            </div>
        </div>

        <div className="student pt-7">
            <div className="space-y-2">
            <h3 className="sign-head">Sign Up as an Artisan</h3>
            <p className="sign-para pb-2">Register as an Artsian on Find-a-Home FUTA platform. Register and Upload all necessary requirements</p>
            <div className="w-fit mx-auto"><UnlockBtn text={'Sign Up'} className={"px-6 font-semibold text-sm h-11"}/></div>
            </div>
        </div>

    </div>
  )
}

export default SignUp