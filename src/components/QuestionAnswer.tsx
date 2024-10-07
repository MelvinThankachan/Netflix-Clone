type QuestionAnswerProps = {
  index: number;
  question: string;
  answer: string;
  isExpanded: boolean;
  handleExpand: (index: number) => void;
};

const QuestionAnswer = ({
  index,
  question,
  answer,
  isExpanded,
  handleExpand,
}: QuestionAnswerProps) => {
  return (
    <div className="flex flex-col gap-[2px] ">
      <div className="question flex justify-between items-center p-5 bg-[#2d2d2d] hover:bg-[#414141] text-xl cursor-pointer">
        <p>{question}</p>
        <button
          className={`transition-transform duration-300 ${
            isExpanded ? "rotate-45" : ""
          }`}
          onClick={() => handleExpand(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 36 36"
            width="36"
            height="36"
            data-icon="PlusLarge"
            aria-hidden="true"
            className="elj7tfr3 default-ltr-cache-1k5iouc-Icon-StyledAccordionIcon e164gv2o4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`answer text-xl bg-[#2d2d2d] transition-all duration-300 ease-out overflow-hidden ${
          isExpanded ? "max-h-[500px] p-5" : "max-h-0 p-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
