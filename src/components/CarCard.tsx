import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React from 'react'

interface CarCardProps {
    car: CarProps;
}


function CarCard({ car }: CarCardProps) {

    const carRent = calculateCarRent(car.city_mpg, car.year);

    return (
        <div className='car-card group'>
            <div className='car-card_content'>
                <h2 className='car-card_content_title'>
                    {car.make} {car.model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src='/hero.png' alt="car" fill priority
                    className='object-contain'
                />
            </div>
            <div className='relative flex w-full  mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='steering-wheel.svg' alt="steering wheel" width={20} height={20} />
                        <p className='text-[14px]'>
                            {car.transmission === 'a'?'Automatic' :"Manual" }

                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CarCard