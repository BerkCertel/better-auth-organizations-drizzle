import { HeaderSwitcher } from "@/components/HeaderSwitcher";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderSwitcher />
      <main>{children}</main>
    </div>
  );
}
