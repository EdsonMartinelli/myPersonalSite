interface TopicProps {
  interval: string;
  title: string;
  institution: string;
  description: string;
}

export default function Topic({
  interval,
  title,
  institution,
  description,
}: TopicProps) {
  return (
    <li
      className="pb-2 before:content-[''] before:absolute before:w-[16px] 
        before:h-[16px] before:bg-componentDark before:dark:bg-component 
        before:-translate-x-[11px] before:-translate-y-[1px] before:z-[2] 
        before:rounded-full before:outline before:outline-3 before:outline-offset-[3px]
        before:outline-separatorDark dark:before:outline-separator border-l-[6px]
        -translate-x-[5px] border-componentDark dark:border-component"
    >
      <h3
        className="absolute text-lg text-center font-semibold -translate-y-[7px]
        translate-x-[1.5rem] text-textComponent dark:text-textComponentDark"
      >
        {interval}
      </h3>
      <div className="mt-[32px] pl-6">
        <h4 className="text-md font-bold text-textTitle dark:text-textTitleDark">
          {title}
        </h4>
        <h5 className="text-sm font-light mb-4 text-textComponent dark:text-textComponentDark">
          {institution}
        </h5>
        <p className="text-textComponent dark:text-textComponentDark">
          {description}
        </p>
      </div>
    </li>
  );
}
