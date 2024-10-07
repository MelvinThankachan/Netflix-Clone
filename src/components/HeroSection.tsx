import GetStart from "./GetStart";

const HeroSection = () => {
  return (
    <section className="flex flex-col content relative xl:min-h-[90vh] ">
      <div className="flex flex-col gap-5 max-w-[100%] md:max-w-[60%] lg:max-w-[50%] h-full text-center justify-center items-center mx-auto py-20 xl:mt-28">
        <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl ">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-lg py-1">
          Starts at ₹149. Cancel anytime.
        </p>
        <p className="text-white text-sm">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <GetStart />
      </div>
    </section>
  );
};

export default HeroSection;
