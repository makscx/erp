import { Navigation } from "@/app/dashboard/_components/Navigation";

const tabs = ["Робітники", "Сушка", "Склад", "Налаштування"];

export default function DashboardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation tabs={tabs} />
      {children}
      {modal}
    </div >
  );
}
