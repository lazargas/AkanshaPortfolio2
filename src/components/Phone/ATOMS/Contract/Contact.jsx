import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex flex-col w-screen bg-[#09070A] pt-10 pb-20"
    >
    <div className="m-auto">
        <div className="not-italic font-normal text-base leading-[160%] text-center text-white font-sora w-[40vw] pt-10">
          "Contact me if you want to elevate your brand's design game. And hey, if
          you're in the mood for a latte, I'm down for that too."
        </div>
        <div className="w-[55px] m-auto">
          <img
          src="/assets/icons/coffee.png"
          className="pt-5 w-[80px]"
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
        <a href="">
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
