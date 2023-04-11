import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex flex-col w-screen bg-[#09070A] pt-10 pb-20"
    >
    <div className="m-auto">
        <div className="not-italic font-normal tracking-wide text-base leading-[200%] text-center text-white font-tex w-[50vw] pt-10">
          "Contact me if you want to elevate your brand's design 
        </div>
        <div className="not-italic font-normal tracking-wide text-base leading-[200%] text-center text-white font-tex w-[50vw]" >
          game.
        </div>
        <div className="not-italic font-normal tracking-wide text-base leading-[200%] text-center text-white font-tex w-[50vw]" > 
        And hey, if you're in the mood for a latte,
        </div>
        <div className="not-italic font-normal tracking-wide text-base leading-[200%] text-center text-white font-tex w-[50vw]" > 
        I'm down for that too"
        </div>
        <div className="w-[55px] m-auto">
          <img
          src="/assets/icons/cup.png"
          className="pt-5 relative left-[-15px] max-w-[90px] "
          alt=""
        />
        </div>
      </div>
      <ul className="flex gap-[2.5rem] pt-20 relative justify-center ">
        <li>
          <a href="https://instagram.com/singh__akansha">
          <img src="/assets/icons/instagram.svg" className="w-[55px]" alt="" />
          </a>
          
        </li>
        <li>
          <a href="mailto:akanshasingh95720@gmail.com">
          <img src="/assets/icons/gmail.svg" className="relative bottom-1" alt="" />
          </a>
          
        </li>
        <li>
        <a href="https://www.linkedin.com/in/akansha-singh-06aa98202/">
          <img src="/assets/icons/linkedin.svg" className="w-[55px]"  alt="" />
          </a>
        </li>
      </ul>
      <div className="flex flex-col justify-center not-italic font-normal text-base leading-[160%] text-center text-white pt-14 font-tex ">
        <div>+916205864459</div>
        <div>akanshasingh95720@gmail.com</div>
        <div className="flex justify-center pt-10">
            <img src="/assets/phoneContactlogo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
