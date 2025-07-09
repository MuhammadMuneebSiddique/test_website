import React from 'react'
import { FaStar } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className='hero-section text-[10px] relative py-[3em] bg-[#FF5349] font-outfit flex justify-between text-[#fff] px-[8rem]'>
        <div className='left-side mt-[2em] flex flex-col gap-[1em] justify-start w-[55%]'>
            <h2 className='text-[8.3em] capitalize font-semibold'>Stay Connected <br /> Stay Social Stay You!</h2>
            <p className='text-[2.4em] font-light'>A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.</p>
            <button className='capitalize text-[2.2em] mt-[1em] w-fit font-normal px-[2em] py-[0.7em] rounded-[0.3em] text-[#FF5349] bg-[#fff]'>get started</button>
        </div>
        <div className='relative right-side'>
            <img src="/Group 1.png" className='w-[48.6em] z-10 relative  object-cover' alt="image" />
            <div className='absolute top-[2.3em] left-[-4em] z-20 bg-[#fff] text-[#000] px-[1.5em] py-[0.7em] font-semibold capitalize w-fit text-[2.7em] rounded-[0.4em]'>🔥 seamless connection</div>
            <div className='absolute bottom-[6em] right-[-2em] z-20 bg-[#fff] text-[#000] px-[1.5em] py-[0.7em] font-semibold capitalize w-fit text-[2.7em] rounded-[0.4em]'>🌍 discover & explore</div>
        </div>
        <div className='absolute bg-[#f2f2f2] left-0 w-full h-[13em] bottom-[-1em]'></div>
    </section>
  )
}

export const ServiceSection = () => {

    const features = [
        {title:"🔥 seamless connection",description:"stay in touch in friend, family and like-minded people with just a tap"},
        {title:"📸 share you story",description:"Upload photos, videos, and updates to let the world know what’s happening in your life."},
        {title:"💬 real-time chat",description:"Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging."},
        {title:"🔓 privacy first",description:"Your data, your control. We prioritize your privacy with world-class security."},
        {title:"🌍 discover & explore",description:"Find trending content, join communities, and follow pages that match your interests."},
        {title:"🏢 grow your business",description:"Use our platform to market your brand, connect with customers, and build meaningful relationships."},
    ]

    return(
        <section className='service-section text-[10px] font-outfit flex py-[5rem] px-[8rem] bg-[#f2f2f2] flex-col pb-[7rem] gap-[7rem] '>
            <div className='flex justify-center items-center flex-col gap-[1em]'>
                <h2 className='text-[7.8em] font-semibold text-[#000] capitalize'>Features That Keep You Hooked!</h2>
                <h3 className='text-[2.6em] font-outfit font-medium'>Meet, Chat, Share - Anytime, Anywhere!</h3>
            </div>
            <div className='flex flex-wrap justify-center items-center place-items-center gap-[4em]'>
                {features.map((elem)=>{
                    return(
                        <div className='box w-[51.2em] h-[24em] flex gap-[2em] bg-[#f2f2f2] flex-col justify-center items-center  rounded-[1.5em]'>
                            <h2 className='text-[3.2em] w-[70%] text-center capitalize font-semibold'>{elem.title}</h2>
                            <h4 className='text-[2.1em] w-[70%] text-center font-medium'>{elem.description}</h4>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export const AboutSection = () => {
    const aboutPoint = [
        {title:"🎥 Short Videos & Reels",description:"Share engaging, bite-sized content that keeps everyone entertained."},
        {title:"🔔 Smart Notifications",description:"Stay updated on what matters without the noise."},
        {title:"👥 Interest-Based Communities",description:"Join groups and discussions that match your passion."},
    ] 
    return(
        <section className='about-section relative text-[10px] py-[9rem] bg-[#f2f2f2] flex justify-between items-center px-[8rem]'>
            <div className='relative left-side flex justify-start items-center'>
                <div className='absolute w-[70.3em] h-[70.3em] rounded-full bg-[#FF5349]'></div>
                <div className='img-1 relative left-[-5em] z-10'>
                    <img src="/Group 1(1).png" className='w-[45.9em] object-cover' alt="image" />
                </div>
                <div className='img-2 relative right-[25em] top-[-1em] z-20'> 
                    <img src="/Group 2(1).png" className='w-[59.8em] object-cover' alt="image" />
                </div>
            </div>
            <div className='right-side absolute right-[2em] w-[45%] flex flex-col gap-[2em]'>
                <div className='flex flex-col justify-start gap-[2em]'>
                    <h2 className='text-[7.8em] font-medium font-outfit text-[#000]'>Where Every Click Sparks a Connection!</h2>
                    <p className='text-[2.13em] font-normal font-outfit'>A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!</p>
                </div>
                <div className='container flex flex-col justify-start gap-[3em]'>
                    {aboutPoint.map((elem)=>{
                        return(
                            <div className='box items flex flex-col w-[95%] rounded-[1.3em] p-[3.2em] py-[4em] justify-start gap-[2em]'>
                                <h3 className='text-[3.2em] font-medium capitalize font-outfit'>{elem.title}</h3>
                                <p className='about-point-para text-[2.1em] font-outfit font-normal'>{elem.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
} 

export const DownloadSection = () => {

    const downloadStep = [
        {title:"Download",description:"Open Play Store or App Store"},
        {title:"Install App",description:"The app will install automatically."},
        {title:"Ready to Use",description:"Sign up or log in to start exploring!"},
    ]

    return(
        <section className='download-section font-outfit py-[7rem] bg-[#f2f2f2] flex flex-col justify-center gap-[6em] px-[8rem] text-[10px]'>
            <div className='flex flex-col justify-center items-center gap-[3em]'>
                <h2 className='text-[7.8em] font-semibold'>How to Install Our App</h2>
                <p className='text-[2.1em] font-normal'>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>
            </div>
            <div className='flex justify-center items-center gap-[3em]'>
                <h2 className='text-[5em] text-[#FF5349]'>01</h2>
                <div className='bg-[#8F8F8F] w-[30%] h-[0.3em]' ></div>
                <h2 className='text-[5em] text-[#000]'>02</h2>
                <div className='bg-[#8F8F8F] w-[30%] h-[0.3em]' ></div>
                <h2 className='text-[5em] text-[#000]'>03</h2>
            </div>
            <div className='flex justify-center items-center gap-[3em] flex-wrap'>
                {downloadStep.map((elem)=>{
                    return(
                        <div className='box w-[51.2em] h-[20em] font-outfit flex gap-[2em] bg-[#f2f2f2] flex-col justify-center items-center  rounded-[1.5em]'>
                            <h2 className='text-[3.2em] w-[70%] text-center font-outfit font-semibold'>{elem.title}</h2>
                            <h4 className='text-[2.1em] w-[70%] text-center font-outfit font-medium'>{elem.description}</h4>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export const DonateSection = () => {
    return(
        <section className='donate-section p-[10rem] text-[10px]'>
            <div className='container bg-[#FF5349] relative h-[90em] px-[10em] pt-[5em] overflow-hidden rounded-[5em] flex justify-start'>
                <div className='left-side flex relative flex-col justify-start w-[100em] gap-[2em] text-[#fff]'>
                    <h2 className='text-[9em] font-outfit font-semibold'>Be the Reason <br /> Someone Smiles Today!</h2>
                    <p className='text-[3em] font-outfit font-normal mt-[1em]'>Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!</p>
                    <button className='text-[2.2em] font-outfit w-fit rounded-[0.6em] px-[2em] py-[1em] capitalize text-[#FF5349] bg-white'>donate now</button>
                </div>
                <div className='right-side absolute right-[10em] bottom-0 flex justify-start items-end gap-[3em]'>
                    <img src="/iPhone 14 Pro (1).png" className='relative w-[43em]' alt="image" />
                    <img src="/iPhone 14 Pro.png" className='relative w-[45em]' alt="image" />
                </div>
            </div>
        </section>
    )
}

export const TestimontalsSection = () => {

    const reviews = [
        {star:["1","1","1","1","1",],message:"Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",image:"/avatar2 1.png",name:"javier l",city:"spain"},
        {star:["1","1",],message:"The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",image:"/olena-sergienko-XttWKETqCCQ-unsplash 1.png",name:"lucas t",city:"brazil"},
        {star:["1","1","1","1",],message:"I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",image:"/customer-1 1.png",name:"sophie m",city:"uk"},
        {star:["1","1","1",],message:"I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",image:"/nrd-ZmmAnliy1d4-unsplash 1.png",name:"nora s",city:"canada"},
        {star:["1","1","1",],message:"Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",image:"/oliver-ragfelt-khV4fTy6-D8-unsplash 1.png",name:"amit k",city:"india"},
        {star:["1","1","1","1","1",],message:"This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",image:"/avatar3 1.png",name:"emily r",city:"usa"},
    ]

    return(
        <section className='testimontal-section text-[10px] bg-[#f2f2f2] px-[8rem] py-[7rem] flex justify-center items-center flex-col gap-[2em]'>
            <div>
                <h2 className='text-[7.4em] font-outfit font-semibold'>What our User Says</h2>
            </div> 
            <div className='testimontal-container relative h-[70em] overflow-hidden flex justify-center mt-[10em] flex-wrap items-center gap-[3em]'>
                {reviews.map((elem)=>{
                    return(
                        <div className='box flex justify-start rounded-[0.9em] flex-col gap-[3.5em] w-[49.4em] h-[37em] p-[2em]'>
                            <div className='flex justify-start gap-[0.5em]'>
                                {elem.star.map(() => <FaStar className='text-[3em] text-[#FACC15]' />)}
                            </div>
                            <div>
                                <p className='text-[2.6em] font-medium font-outfit '>{elem.message.slice(0,130)}...</p>
                            </div>
                            <div className='flex justify-start items-center gap-[3em]'>
                                <div className='w-[6.4em] h-[6.4em] overflow-hidden rounded-full'>
                                    <img src={elem.image} className='w-full' alt="image" />
                                </div>
                                <div className='flex flex-col justify-start gap-[0.2em]'>
                                    <h2 className='uppercase text-[2.6em] font-outfit font-semibold'>{elem.name}</h2>
                                    <h2 className='uppercase text-[2.1em] font-outfit font-medium text-[#828487]'>{elem.city}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button className='box text-[3.2em] capitalize px-[3em] font-medium font-outfit py-[1em] rounded-[0.5em]  text-[#FF5349]'>see more</button>
            </div>
        </section>
    )
}
