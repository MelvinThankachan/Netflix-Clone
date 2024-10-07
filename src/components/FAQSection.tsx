import { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import faqData from "../misc/faqData";

const FAQSection = () => {
  const [expanedIndex, setExpandedIndex] = useState<number>(-1);
  const handleExpand = (index: number) => {
    if (index === expanedIndex) setExpandedIndex(-1);
    else {
      setExpandedIndex(index);
    }
  };
  return (
    <section className="content bg-black section">
      <h1 className="section-heading">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-2">
        {faqData.map((item, index) => (
          <QuestionAnswer
            key={crypto.randomUUID()}
            index={index}
            question={item.question}
            answer={item.answer}
            isExpanded={index === expanedIndex ? true : false}
            handleExpand={handleExpand}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
