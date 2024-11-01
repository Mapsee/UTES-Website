import Image from "next/image";
import Backdrop from "../assets/images/utesbanner.png";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Discord from "../assets/images/icons/discord.svg";
import Twitter from "../assets/images/icons/twitter.svg";
import Twitch from "../assets/images/icons/twitch.svg";
import Youtube from "../assets/images/icons/youtube.svg";
import Link from "next/link";
import ContactUs from "../assets/images/contactus.png";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        <Image
          src={Backdrop}
          alt="hero banner"
          className="w-full h-full object-cover"
          quality={100}
          loading="lazy"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-9xl max-md:text-7xl max-sm:text-5xl font-bold text-white drop-shadow-2xl max-lg:text-8xl text-center">
            CONTACT
          </h1>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-10">
        <MaxWidthWrapper>
          <div>
            <h3 className="mt-20 max-sm:text-4xl max-sm:text-center text-primary text-6xl font-bold">
              Send us a message
            </h3>
            <div className="flex justify-center items-center flex-row gap-6">
              <Image
                src={ContactUs}
                alt="Kiriko"
                height={300}
                width={300}
                quality={100}
                className="-mt-30 max-sm:hidden"
              ></Image>
              <ContactForm />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-10">
        <MaxWidthWrapper>
          <h3 className="mt-12 max-sm:text-4xl max-sm:text-center text-primary text-6xl font-bold mb-12">
            Join our community
          </h3>
          <div className="flex justify-center md:justify-between items-center flex-wrap gap-5 mr-3">
            <Link
              target="_blank"
              href={"https://discord.gg/EyjrqZyjh8"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Discord}
                alt="Discord"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://twitter.com/UofTEsports"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Twitter}
                alt="Twitter"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.twitch.tv/uoftesports/videos"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Twitch}
                alt="Twitch"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/channel/UCrSS_P3YwBogDOHa9oZnCZw"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Youtube}
                alt="Youtube"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
