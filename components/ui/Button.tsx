const variants = {
    primary: "bg-[#61FF52]",
    secondary: "bg-transparent border text-gray-700",
} as const;

type VariantsProps = keyof typeof variants;

const Sizes = {
    icon: "h-10 w-10",
} as const;

type SizeProps = keyof typeof Sizes;

type ButtonProps = {
    variant?: VariantsProps;
    size?: SizeProps;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;



export const Button = ({ disabled, size, loading, variant, children, ...props }: ButtonProps) => {

    const base = `${size ? Sizes.icon : "px-6 py-4 w-full"} disabled:opacity-50 transition-all  cursor-pointer`;

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