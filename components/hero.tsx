import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
      {/* 1st section */}
        <section className="bg-[#FBEBB5] min-h-screen flex items-center px-4 md:px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/*left content */}

            <div className="flex flex-col justify-center space-y-4">
                <h1 className="font-medium text-[64px] space-[35px] w-[440px] h-[192px]">Rocket single <br/>seater</h1>
                <a href="/Shop">
                <h6 className="inline-block font-medium text-[24px] pd- underline hover:no-underline  hover:text-gray-600 transition ">
                    Shop Now</h6></a>
            </div>


            {/*Right content Picture */}
            <div className="flex justify-center items-center">

            <Image src="/Single seater picture.png" alt="Cheir Picture" height={1200} width={1200} className="bg-[#FBEBB5]" ></Image>
            </div>
        </div>
        </section>


        <section className="flex justify-center w-full h-auto bg-[#FAF4F4] gap-[30px]">
          <div className="w-[605px] h-[593px] ml-[100px] mt-[51px]">
            <Image src="/Granite square side table 1.png" alt="side table" width={300} height={300} />

            <h3 className="font-medium text-[36px] ">Side table</h3>
            <h6 className="underline ">view More</h6>

          </div>

          <div className="w-[605px] h-[593px] mt-[51px]">
          <Image src="/Cloud sofa three seater + ottoman_3 1.png" alt="side table" width={300} height={300}/>
           
          <h3 className="font-medium text-[36px]">Side table</h3>
          <h6 className="underline ">view More</h6>

          </div>
        </section>

        {/* Top Pic Section */}
        <div className="w-full bg-[#FFFFFF] ">

          <h1 className="flex justify-center items-center font-medium text-[36px]">Top Picks For You</h1>
          <p className="flex justify-center items-center font-medium text-[16px] text-[#9F9F9F]">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className="flex grid-cols-4 justify-between ">
              <Image src="/Mask group.png" alt="Cheir Pic" width={287} height={287}/>
              <Image src="/Mask group1.png" alt="Cheir Pic" width={287} height={287}/>
              <Image src="/Mask group2.png" alt="Cheir Pic" width={287} height={287}/>
              <Image src="/Mask group3.png" alt="Cheir Pic" width={287} height={287}/>

            </div>
            <h6 className="underline flex justify-center items-center font-medium text=[20px]">view More</h6>
        </div>




    </div>
  )
}

export default Hero
