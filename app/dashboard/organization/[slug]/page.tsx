import MembersTable from "@/components/members-table";
import { getOrganizationBySlug } from "@/server/organizations";

export default async function OrganizationPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const organization = await getOrganizationBySlug(slug);

  return (
    <div className="flex flex-col gap-4  mx-auto max-w-3xl py-15">
      <h1 className="text-2xl font-bold">{organization?.name}</h1>
      <MembersTable members={organization?.members || []} />
    </div>
  );
}
