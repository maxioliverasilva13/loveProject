import { cva } from "class-variance-authority";

interface Props {
  color?: string;
}

const ball = cva(["box-border", "mr-1", "relative", "w-[20px]", "h-[20px]", "rounded-full"]);

const Loading = ({ color = "bg-pink-400" }: Props) => {
  return (
    <div className={"flex"}>
      <div className={ball({ class: `animate-[pulse_500ms_linear_100ms_infinite] ${color}` })}></div>
      <div className={ball({ class: `animate-[pulse_500ms_linear_200ms_infinite] ${color}` })}></div>
      <div className={ball({ class: `animate-[pulse_500ms_linear_300ms_infinite] ${color}` })}></div>
    </div>
  );
};

export default Loading;
