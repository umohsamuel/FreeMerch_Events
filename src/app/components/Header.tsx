import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GiFingerPrint } from 'react-icons/gi'
import Countdown from './Countdown'
import Number from './Number'

const targetDate = new Date('2023-12-31T23:59:59');
const style = { color: "#2ec866", fontSize: "60px" }
const style1 = { color: "#2ec866", fontSize: "30px" }

const Header = () => {
    return (
        <div className='relative'>
            <div className='absolute bottom-0 right-0'>
                <Image src='/Vector7a.png' alt='vec' width={1000} height={1000} />
            </div>
            <div className='absolute  bottom-0  left-0'>
                <Image className='' src='/Vector8a.png' alt='vec' width={1000} height={1000} />
            </div>
            <div className='container relative mx-auto h-[90vh] flex flex-col justify-between'>
                <div className='border-[#000000] sm:p-[0] px-[20px]'>
                    <h1 className='text-[#000000] mt-[60px] text-[24px]  leading-[40px]'> Logo </h1>
                </div>

                <div className="absolute left-[8%] bottom-[30%]"><GiFingerPrint style={style} /></div>
                <div className="absolute right-[8%] bottom-[60%]"><GiFingerPrint style={style1} /></div>
                <p className='absolute right-[3%] bottom-[64%] font-[500] text-[13px] rotate-[-40deg]'>Web2</p>
                <p className='absolute right-[3%] bottom-[58%] font-[500] text-[13px] rotate-[35deg]'>Web3</p>




                <div className='flex justify-center basis-[50%] items-center pt-[60px]'>
                    <div className='text-center  '>
                        <div className='pb-[40px] '>
                            <div className='text-[#0B1237] font-[800] text-[100px] sm:text-[160px] leading-[57.2px] tracking-[0.48px]'>Buidl:
                            </div>


                        </div>
                        <div >
                            <h2 className='font-[800] text-[20px] md:text-[32px] md:leading-[46.7px] leading-[20px] tracking-[0.48px]'>Product, Community and Future of adoption</h2>
                        </div>
                        <div className='pt-[20px] font-[500] text-[16px] relative text-center'>
                            <h3 className='text-center'>Get Started</h3>
                            <span className='absolute right-[10000px] md:top-[25.0px] md:right-[250px]'>
                                <AiOutlineArrowRight />
                            </span>
                        </div>
                    </div>

                </div>

                <div >
                    <Countdown targetDate={targetDate} />
                </div>


            </div>

        </div>

    )
}

export default Header