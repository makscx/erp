
const base = "px-6 py-2 disabled:opacity-50 transition-all w-full cursor-pointer";

const variants = {
    primary: "bg-[#61FF52]",
    secondary: "bg-transparent border text-gray-700",
} as const;

type VariantsProps = keyof typeof variants;

type ButtonProps = {
    variant?: VariantsProps;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ disabled, loading, variant, children, ...props }: ButtonProps) => {
    return (
        <button
            disabled={disabled || loading}
            className={`${base} ${variants[variant ?? "primary"]} ${disabled ? "opacity-50" : ""
                }`}
            {...props}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};