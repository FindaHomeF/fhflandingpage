"use client"
import { useState, useEffect, useRef } from "react"

const CounterNumber = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const animateCount = () => {
      const startTime = Date.now()
      const startValue = 0

      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

      const updateCount = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const easedProgress = easeOutQuart(progress)
        const currentCount = Math.floor(startValue + (end - startValue) * easedProgress)
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCount)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCount()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated, duration, end])

  return (
    <h3 ref={counterRef} className="text-2xl md:text-3xl font-bold text-primary">
      {count}{suffix}
    </h3>
  )
}

const Mad = () => {
  return (
    <div className="w-full">
        <div className="mx-auto w-[90%] md:w-5/6 md:pt-10">
            <div className="flex flex-col md:flex-row justify-between gap-x-14 gap-y-8">
                <div className="head md:w-3/6">
                    <h3 className="section-head">Our Impact: Real Numbers, Real Results</h3>
                </div>

                <div className="md:w-3/6 space-y-5">
                    <p className="text-lg font-semibold pb-2 md:pb-0">
                      Since launch, we've helped hundreds of FUTA students find quality accommodations. 
                      Here's how we're making a difference in the student housing landscape.
                    </p>

                    <div className="grid grid-cols-2 justify-between items-start gap-y-10 gap-x-6">
                        <div className="space-y-2">
                            <CounterNumber end={30} duration={2000} suffix="+" />
                            <p className="text-gray text-sm md:text-base">Properties Listed</p>
                        </div>

                        <div className="space-y-2">
                            <CounterNumber end={50} duration={2200} suffix="+" />
                            <p className="text-gray text-sm md:text-base">Verified Service Providers</p>
                        </div>

                        <div className="space-y-2">
                            <CounterNumber end={95} duration={2400} suffix="%" />
                            <p className="text-gray text-sm md:text-base">Student Satisfaction Rate</p>
                        </div>

                        <div className="space-y-2">
                            <CounterNumber end={500} duration={2600} suffix="+" />
                            <p className="text-gray text-sm md:text-base">Successful Placements</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Mad