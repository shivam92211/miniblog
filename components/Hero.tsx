import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10
    pb-32 md:gap-28 lg:py-20 xl:flex-row aborder-2 aborder-red-500">
        {/* <div className='hero-map' /> */}

        {/* LEFT */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <Image 
                src="/camp.svg"
                alt="calisthenics"
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            />

            <h1 className='bold-52 lg:bold-88'>
                Minifit Calisthenics
            </h1>

            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
                Are you ready to embark on a journey towards holistic well-being and 
                mastery of mind and body? Look no further than Minifit Club, the 
                newest and most comprehensive fitness facility in Mira Road and 
                Bhayander. At Minifit Club, we believe in empowering individuals 
                of all ages and fitness levels to unlock their full potential 
                through the transformative practices of Taekwondo, Calisthenics, 
                and Yoga.
            </p>

            <div className='my-11 flex flex-wrap gap-5'>
                <div className='flex items-center gap-2'>
                    {Array(5).fill(1).map((_, index) => (
                        <Image 
                            src = '/star.svg'
                            key = {index}
                            alt='star'
                            width={24}
                            height={24}
                        />
                    ))}
                </div>

                <p className='bold-16 lg:bold-20 text-blue-70'>
                    2k
                    <span className='regular-16 lg:regular-20 ml-1.5 '>
                        Excellent Reviews
                    </span>
                </p>
            </div>

            <div className='flex flex-col sw-full gap-3 sm:flex-row '>
                
                <Button 
                    type='button'
                    title='Shop now'
                    variant='btn_green'
                />

                <Button 
                    type='button'
                    title='Lets get started'
                    icon='/play.svg'
                    variant='btn_white_text'
                />                 
            </div>
        </div>

        {/* <div className='relative flex flex-1 items-start '>
            <div className='relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl 
            bg-green-90 px-7 py-8'>
                <div className='flex flex-col'>

                    <div className='flexBetween'>
                        <p className='regular-16 text-white block bold-20 '>Calasthenics</p>
                        <Image src="/close.svg" alt="close" width={24} height={24}/>
                    </div>

                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-white block bold-20'>Yoga</p>
                        </div>
                    </div>

                    <div className='flexBetween'>
                        <p className='regular-16 text-white block bold-20'>Taekwando</p>
                    </div>

                </div>

            </div>
        </div> */}

    <div className="relative flex flex-auto items-start">
        <div className="relative z-20 flex w-[268px] mt-17 ml-20  flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              {/* <p className="regular-16 text-gray-20">Location</p> */}
              {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
            </div>
            <p className="bold-20 text-white">Calesthenics</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              {/* <p className="regular-16 block text-gray-20">Distance</p> */}
              <p className="bold-20 text-white">Yoga</p>
            </div>
            <div className="flex flex-col">
              {/* <p className="regular-16 block text-gray-20">Elevation</p> */}
              <p className="bold-20 text-white">Taekwondo</p>
            </div>
          </div>
        </div>
    </div>


    </section>
  )
}

export default Hero