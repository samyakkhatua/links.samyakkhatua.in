import React from "react";

const HeroSection = () => {
  return (
    <div class="gap-6 text-center md:grid-cols-3 lg:gap-12 text-white mb-12 md:mb-0">
      <div class="mb-6 flex justify-center">
        <img
          // src="https://links.samyakkhatua.in/profile-pic.webp"
          src="https://res.cloudinary.com/dmkmepkbv/image/upload/v1688840747/profile-pic_ro6k28.webp"
          class="w-48 rounded-full shadow-lg dark:shadow-black/30"
        />
      </div>

      <h5 class="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-4xl">
        Samyak Khatua
      </h5>

      <h6 class="mt-0 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-0">
        Fullstack Developer
      </h6>

      {/* <p class="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p> */}
    </div>
  );
};

export default HeroSection;
