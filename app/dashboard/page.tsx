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

export default async function DashboardPage() {
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
    </div>
  );
}
