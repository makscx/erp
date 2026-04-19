const tabs = ["Робітники", "Сушка", "Склад", "Налаштування"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation tabs */}
      <nav className="flex items-center justify-center gap-5 pt-5 pb-2">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={
              i === 0
                ? "text-sm px-4 py-1 rounded-full border border-gray-400 text-gray-800 font-medium"
                : "text-sm text-gray-500 hover:text-gray-700"
            }
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Floor plan */}
      <div className="flex-1 flex items-center justify-center p-16">
        <div className="relative" style={{ width: 724, height: 415 }}>

          {/* Друк */}
          <Room left={0}   top={0}   w={175} h={80}  label="Друк"       badge="Галя" />

          {/* Фасування */}
          <Room left={183} top={0}   w={182} h={207} label="Фасування"  badge="Галя" />

          {/* Пакування */}
          <Room left={369} top={0}   w={182} h={100} label="Пакування" />

          {/* Сушка */}
          <Room left={369} top={104} w={182} h={103} label="Сушка" />

          {/* Мастіка */}
          <Room left={555} top={0}   w={169} h={290} label="Мастіка" />

          {/* Кулі */}
          <Room left={307} top={308} w={187} h={107} label="Кулі" />

          {/* Льодяники */}
          <Room left={498} top={308} w={226} h={107} label="Льодяники" />

        </div>
      </div>
    </div>
  );
}

function Room({
  left, top, w, h, label, badge,
}: {
  left: number;
  top: number;
  w: number;
  h: number;
  label: string;
  badge?: string;
}) {
  return (
    <div
      className="absolute border border-gray-300 flex items-center justify-center"
      style={{ left, top, width: w, height: h }}
    >
      {badge && (
        <div
          className="absolute top-0 left-0 border-r border-b border-gray-300 flex items-center justify-center"
          style={{ width: 44, height: 28 }}
        >
          <span className="text-[10px] text-gray-600">{badge}</span>
        </div>
      )}
      <span className="text-[11px] tracking-widest uppercase text-gray-400 font-light">
        {label}
      </span>
    </div>
  );
}
