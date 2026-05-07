'use client'
import { ChevronDown } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type AccordionContextType = {
    selected: string;
    setSelected: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function Accordion({ children, value, onChange, ...props }: { children: React.ReactNode, value?: string, onChange?: (value: string) => void, [key: string]: any }) {
    const [selected, setSelected] = useState<string>('')
    useEffect(() => {
        onChange?.(selected)
    }, [selected])
    return (
        <ul {...props}>
            <AccordionContext.Provider value={{ selected, setSelected }}>
                {children}
            </AccordionContext.Provider>
        </ul>
    )
}

function AccordionItem({ children, value, trigger, ...props }: { children: React.ReactNode, value: string, trigger: React.ReactNode, [key: string]: any }) {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("AccordionItem must be used within an Accordion");
    }
    const { selected, setSelected } = context;
    const isOpen = selected === value

    const ref = useRef<HTMLDivElement>(null)

    return (
        <li {...props}>
            <button className="flex items-center justify-between" onClick={() => setSelected(isOpen ? "" : value)}>
                {trigger}
                <ChevronDown size={18} className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-300`} />
            </button>
            <div style={{ height: isOpen ? ref.current?.offsetHeight || 0 : 0 }}
                className="overflow-y-hidden transition-all duration-300">
                <div ref={ref}>
                    {children}
                </div>
            </div>
        </li>
    )
}



export { Accordion, AccordionItem };