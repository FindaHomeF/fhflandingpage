'use client'
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import Logo from "/public/Logo/Logosvg.svg"
import { FaEye } from 'react-icons/fa';
import { Button } from '@/components/ui/button';



const SignUpForm = ({head}) => {
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
    <div>
        <div className='md:flex h-screen'>
            <div className='w-full sticky md:relative top-0 shadow-sm md:shadow-none z-10 bg-white md:w-2/6 border-b md:border-b-0 border-b-black/30'>
                <div className='w-full text-center md:text-left md:w-5/6 mx-auto pt-10 pb-5 md:py-10'>
                    <div className='w-full space-y-3 md:space-y-7'>
                        <div className="logo w-fit mx-auto md:mr-auto h-[2.8rem]">
                            <Image 
                                src={Logo}
                                alt="fhflogo"
                                width={200}
                                height={54}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className='sign-head'>{head}</h3>

                    </div>
                </div>
            </div>



            <div className='w-full md:w-4/6 md:border-l border-l-black/30 h-full'>
                <div className='w-5/6 mx-auto pt-5 md:py-10'>

                    <div className='w-full md:w-5/6 space-y-5'>
                        <h3 className='sign-head text-center md:text-left'>Kindly fill your details</h3>
                    

                        <form className="w-full " control={control} onSubmit={handleSubmit((data)=>handleSignUp(data))} >
                            <div className='w-full space-y-3 relative'>

                                <div className='w-full'>
                                    <label className='labels block text-sm text-black/70 pb-1'>First Name</label>
                                    <input type={'text'} {...register("fname")}  className={`rounded-md border border-black/40 w-full h-[2.8rem] px-3  ${errors.fname && 'border-red-500 '}`} placeholder='John'/>
                                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.fname && 'pt-1'}`}>
                                            {/* {errors.email?.message}  */}
                                    </label>
                                </div>

                                <div className='w-full'>
                                    <label className='labels block text-sm text-black/70 pb-1'>Last Name</label>
                                    <input type={'text'} {...register("lname")}  className={`rounded-md border border-black/40 w-full h-[2.8rem] px-3  ${errors.lname && 'border-red-500 '}`} placeholder='Doe'/>
                                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.lname && 'pt-1'}`}>
                                            {/* {errors.email?.message}  */}
                                    </label>
                                </div>

                                <div className='w-full'>
                                    <label className='labels block text-sm text-black/70 pb-1'>Email Address</label>
                                    <input type={'email'} {...register("email")}  className={`rounded-md border border-black/40 w-full h-[2.8rem] px-3  ${errors.email && 'border-red-500 '}`} placeholder='example@email.com'/>
                                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.email && 'pt-1'}`}>
                                            {/* {errors.email?.message}  */}
                                    </label>
                                </div>

                                <div className='w-full'>
                                    <label className='labels block text-sm text-black/70 pb-1'>Phone Number</label>
                                    <input type={'text'} {...register("lname")}  className={`rounded-md border border-black/40 w-full h-[2.8rem] px-3  ${errors.lname && 'border-red-500 '}`} placeholder='Doe'/>
                                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.lname && 'pt-1'}`}>
                                            {/* {errors.email?.message}  */}
                                    </label>
                                </div>

                                <div className='w-full relative h-fit'>
                                    <label className='labels block text-sm text-black/70 pb-1'>Password</label>
                                    <div className='relative'>
                                        <input type={'password'} {...register("password")}  className={`rounded-md border border-black/40 w-full h-[2.8rem] px-3 relative  ${errors.password && 'border-red-500 '}`} placeholder='*******'/>
                                        <FaEye className=' text-base right-3 top-[50%] -translate-y-[50%] text-lightGray absolute cursor-pointer'/>
                                    </div>
                                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                                            {/* {errors.email?.message}  */}
                                    </label>
                                </div>

                                <div className='w-full relative h-fit'>
                                    <label className='labels block text-sm text-black/70 pb-1 relative'>Confirm Password</label>
                                    <div className='relative'>
                                        <input type={'password'} {...register("password")}  className={`rounded-md border border-black/40 w-full h-[2.8rem] px-3 relative  ${errors.password && 'border-red-500 '}`} placeholder='*******'/>
                                        <FaEye className=' text-base right-3 top-[50%] -translate-y-[50%] text-lightGray absolute cursor-pointer'/>
                                    </div>
                                    <label className={`text-red-500 text-xs text-right font-medium italic tracking-wide ${errors.password && 'pt-1'}`}>
                                            {/* {errors.email?.message}  */}
                                    </label>
                                </div>

                                <div className='pt-5'>
                                    <Button className="text-white text-sm h-[2.8rem] font-medium bg-primary w-full rounded-full">Submit</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpForm