import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement } from "react";

type PlaceholderProps = {
    label: string;
    icon?: ReactElement<{ className?: string }>;
    Button?: ReactElement<{ className?: string }>;
};

const Placeholder = ({
    label,
    icon = <LucideMessageSquareWarning />,
    Button = <div />,
}: PlaceholderProps) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, {
                className: "w-16 h-16 ",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {cloneElement(Button, {
                className: "h-10",
            })}
        </div>
    );
};

export { Placeholder };
