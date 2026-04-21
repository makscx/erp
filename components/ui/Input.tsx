type InputProps = {
    label?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, error, ...props }: InputProps) => {
    return (
        <div className="mb-3">
            {label && <label className="block mb-1">{label}</label>}

            <input
                {...props}
                className="w-full border-b-[1.5px] border-gray-300 py-1 px-0"
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};