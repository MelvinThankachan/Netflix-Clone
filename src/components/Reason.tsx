type ReasonProps = {
  heading: string;
  description: string;
  svg: JSX.Element;
};
const Reason = ({ heading, description, svg }: ReasonProps) => {
  return (
    <section className="bg-gradient-to-br from-[#192246] to-[#210e17] rounded-lg p-5 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">{heading}</h1>
        <p>{description}</p>
      </div>
      <div className="flex justify-end">{svg}</div>
    </section>
  );
};

export default Reason;
