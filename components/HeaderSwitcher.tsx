import { ModeSwitcher } from "./mode-switcher";
import Logout from "./logout";
import { getOrganizations } from "@/server/organizations";
import { OrganizationSwitcher } from "./organizations-switcher";

export async function HeaderSwitcher() {
  const organizations = await getOrganizations();

  return (
    <header className="absolute top-0 right-0 flex justify-between items-center p-4 w-full">
      <OrganizationSwitcher organizations={organizations} />
      <div className="flex items-center gap-2">
        <Logout />
        <ModeSwitcher />
      </div>{" "}
    </header>
  );
}
