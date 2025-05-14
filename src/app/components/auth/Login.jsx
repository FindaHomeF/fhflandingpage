"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa';
import Logo from "/public/Logo/Logosvg.svg"

const Login = () => {
    const {
        register,
        control,
        setValue,
        handleSubmit,
        formState:{errors},
    } = useForm();

    const handleRuns = (data) =>{
        e.preventDefault();
        console.log(data)
    }

  return (
    <div className='w-full h-full flex-col flex-itc-juc'>
        <div className='space-y-9 w-full'>
            <div className="logo w-fit mx-auto h-[3.5rem]">
                <Image 
                    src={Logo}
                    alt="fhflogo"
                    width={200}
                    height={54}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='space-y-7 w-full'>
                <div className="signinhead text-center space-y-2">
                    <h3 className='sign-head'>Sign in to FHF</h3>
                    <p className='sign-para text-gray'>Continue with Find-a-Home FUTA</p>
                </div>
 
                <form className="w-full " control={control} onSubmit={handleSubmit((data)=>handleRuns(data))} >
                    <div className='w-full space-y-3'>

                        <div className='w-full'>
                            <label className='labels block text-sm text-black/70 pb-1'>Email address or phone number*</label>
                            <input type={'email'} {...register("email")}  className={`rounded-md border border-black/40 w-full h-[3rem] px-3  ${errors.email && 'border-red-500 '}`} placeholder='example@email.com'/>
                            <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.email && 'pt-1'}`}>
                                    {/* {errors.email?.message}  */}
                            </label>
                        </div>

                        <div className='w-full pt-5'>
                            <label className='labels block text-sm text-black/70 pb-1'>Password*</label>
                            <input type={'password'} {...register("password")}  className={`rounded-md border border-black/40 w-full h-[3rem] px-3  ${errors.password && 'border-red-500 '}`} placeholder='*******'/>
                            <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                                    {/* {errors.email?.message}  */}
                            </label>
                        </div>

                        <div className='flex-itc-jub'>
                            <div>
                                <div className='flex-itc gap-x-2'>
                                    <input type="checkbox" name="" id="" className='cursor-pointer'/>
                                    <h6 className='text-black/70 text-sm'>Remember Me</h6>
                                </div>

                            </div>

                            <div className='cursor-pointer w-fit'>
                                <h6 className='underline text-primary outline-offset-2 font-semibold text-sm'>Forgot Password?</h6>
                            </div>
                        </div>
                        

                        <div className='grid grid-cols-3 items-center pt-3'>
                            <div className='w-full h-[.5px] border-t border-t-black/70 '></div>
                            <h6 className='text-xs font-medium text-center text-black/70'>or</h6>
                            <div className='w-full h-[.5px] border-t border-t-black/70'></div>
                        </div>

                        <div className="google-btn pt-1 w-full h-[3rem]">
                            <div className='rounded-md h-full w-full gap-x-2 border flex-itc-juc border-black/40 px-3 cursor-pointer'>
                                <FaGoogle/>
                                <h6 className='text-sm font-medium text-black/70'>Sign in with Google</h6>
                            </div>
                        </div>
                        
                        <div className='pt-5'>
                            <Button className="text-white text-sm h-[3rem] font-medium bg-primary w-full rounded-full">Sign In</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login