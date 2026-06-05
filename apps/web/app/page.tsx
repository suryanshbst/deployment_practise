import { prisma } from "@repo/db/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div>
      First name haha:
      {user?.username}
      password:
      {user?.password}
    </div>
  );
}
