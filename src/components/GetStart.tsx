import Button from "./Button";

const GetStart = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 w-full ">
      <input
        className="flex-grow border border-gray-500 bg-[rgba(0,0,0,0.3)] p-3 rounded text-white focus:outline focus:outline-1 outline-white"
        type="email"
        placeholder="Email address"
      />
      <Button
        isArrow={true}
        style="px-6 py-3 gap-3 text-2xl min-w-[165px]"
        text="Get Started"
      />
    </div>
  );
};

export default GetStart;
