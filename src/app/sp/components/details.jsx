import { ButtonGS } from '@/app/components/global/Buttons/ButtonGS'
import { Clock12 } from 'lucide-react'
import { Star } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react'
import { BsHouse, BsHouseAddFill } from 'react-icons/bs'
import { FaBath, FaRegLightbulb, FaStar, FaWalking } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'

const Details = () => {
  return (
    <div className='w-93p-mx-auto w-full'>
        <div>
            <h3 className='text-xl md:text-2xl font-bold mt-16'>
                Location View 
            </h3>

            <div className="py-3">
                <div
                    className="relative bg-tertiary overflow-hidden"
                    style={{ height: "20rem", maxHeight: "20rem" }}
                >
                    <iframe
                        title="Location Map"
                        className="absolute top-0 left-0 w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                        src="https://maps.google.com/maps?q=futa%2C+akure&output=embed"
                        style={{ width: "100%", height: "100%", border: "0" }}
                    ></iframe>
                    <a
                        href="https://embedcodesgenerator.com/"
                        rel="noopener"
                        target="_blank"
                        style={{
                            position: "absolute",
                            width: "1px",
                            height: "1px",
                            border: "0",
                            padding: "0",
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0,0,0,0)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        embedcodesgenerator.com
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Details