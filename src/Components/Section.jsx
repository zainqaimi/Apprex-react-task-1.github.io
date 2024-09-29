import React from "react";
import secimage from "../hero.png"
const Section = ()=>{
    return(
        <section>
      <div class="container lg:flex items-center justify-between m-auto mt-10  p-5 lg:text-left text-center">
        <div class="lg:w-1/2 md:space-y-5 space-y-2">
          <p class="text-[#4E4E4E] md:text-[24px] text-[13px] text-left font-[300] leading-[38.4px] ">Yes, I want to do</p>
          <h1 class="text-[#5463FF] lg:text-[72px] text-[37px] font-[700] lg:leading-[86.4px] leading-[47.03px] ">UIUX DESIGNER</h1>
          <p class="text-[#4E4E4E] md:text-[18px] text-[9px] font-[300]">
            Lorem ipsum dolor sit am consectetur. Urna enim quis mi metus ipsum.
            Ullam congue in viverra congue ornare.Morbi non tincidunt velit nec.
          </p>
          <div class="">
            <button
              class="p-2 mt-10 md:w-[150px] w-[200px] h-[50px] bg-blue-700 text-white rounded-[10px] text-sm"
            >
            Contact Us Now
            </button>
          <div class="flex mt-20 gap-x-10 items-center ">
            <div class="gap-y-3 text-[16px] font-[400]">
              <p>upto</p>
              <h3 class="text-[#5463FF] text-[32px] font-[700]">15%</h3>
              <p>Discount on 1st order</p>
            </div>
            <div class="gap-y-3 text-[16px] font-[400]">
              <p>upto</p>
              <h3 class="text-[#5463FF] text-[32px] font-[700]">15%</h3>
              <p>Discount on 1st order</p>
            </div>
          </div>
          </div>
        </div>
        <div class="lg:w-1/2 lg:mt-0 mt-10 "><img src={secimage} alt="" /></div>
      </div>
    </section>
    )
}
export default Section;