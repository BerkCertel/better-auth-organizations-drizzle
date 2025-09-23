import { CreateOrganizationForm } from "@/components/forms/create-organization-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getOrganizations } from "@/server/organizations";
import Link from "next/link";

export default async function DashboardPage() {
  const organizations = await getOrganizations();

  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <div>
        <h1>Dashboard</h1>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Organization</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Organization</DialogTitle>
            <DialogDescription>
              Create a new organization to get started.
            </DialogDescription>
          </DialogHeader>
          <CreateOrganizationForm />
        </DialogContent>
      </Dialog>

      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold">Organizations</h2>
        {organizations.map((organization) => (
          <Button variant={"outline"} asChild key={organization.id}>
            <Link href={`/dashboard/organization/${organization.slug}`}>
              {organization.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
