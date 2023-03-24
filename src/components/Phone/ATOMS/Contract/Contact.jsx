import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex flex-col 
    
    h-screen w-full bg-[#09070A]"
    >
      <div className="relative not-italic font-normal text-base leading-[160%] text-center align-middle text-white font-sora w-[40vw] left-[30vw] pt-10 justify-center ">
        "Contact me if you want to elevate your brand's design game. And hey, if
        you're in the mood for a latte, I'm down for that too."
      </div>
      <img
        src="/assets/coffee.png"
        className="relative w-[45px] left-[45vw] overflow-hidden pt-5 "
        alt=""
      />
      <ul className="flex gap-[2.5rem] pt-20 relative justify-center ">
        <li>
          <img src="/assets/phoneInsta.png" alt="" />
        </li>
        <li>
          <img src="/assets/phoneGmail.png" alt="" />
        </li>
        <li>
          <img src="/assets/phoneLinkedIn.png" alt="" />
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
