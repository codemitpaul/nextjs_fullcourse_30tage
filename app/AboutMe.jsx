import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="h-[calc(100vh-80px)] bg-g flex justify-center items-center p-10 md:p-20 xl:p-40">
      <div className="space-y-3">
        <Image
          src="/images/logo_t.png"
          className="mx-auto my-10 animate-pulse"
          width={100}
          height={200}
          alt="logo"
        />
        <h1>Code mit Paul 👋</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat
          officia animi saepe enim? Fugit magni delectus porro ab quia
          architecto, cumque, molestiae nemo neque vero optio placeat, ipsam
          iusto amet. Quam beatae animi eos doloremque voluptates possimus
          facilis, quo odio eveniet ipsum labore fuga eum vero ullam, quod ea
          eaque temporibus dolores magnam fugit? Debitis provident, aspernatur
          quia voluptatibus aperiam neque praesentium, esse earum aut odit
          maiores eius amet blanditiis facere sequi nam quibusdam ipsam unde
          architecto fugiat eum enim quas doloremque. Deserunt corporis beatae
          rem cupiditate quasi vel? Fugit quam tenetur soluta ducimus, nam esse
          nulla eaque quia!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
