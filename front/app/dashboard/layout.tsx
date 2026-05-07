import { Navigation } from "@/app/dashboard/_components/Navigation";

const tabs = ["Робітники", "Сушка", "Склад", "Налаштування"];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation tabs={tabs} />
      {children}
    </div >
  );
}
