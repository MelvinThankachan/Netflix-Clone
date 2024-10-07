import languageSvg from "../assets/icons/language.svg";

const LanguageSelection = () => {
  return (
    <div className="flex sm:gap-2 border border-gray-500 px-2 sm:px-4 py-1 rounded bg-[rgba(0,0,0,0.5)] max-w-32">
      <img src={languageSvg} alt="" />
      <select
        className="bg-transparent text-white w-4 sm:w-auto "
        name="language"
        id="language"
      >
        <option className="text-black " value="English">
          English
        </option>
        <option className="text-black " value="Hindi">
          Hindi
        </option>{" "}
      </select>
    </div>
  );
};

export default LanguageSelection;
