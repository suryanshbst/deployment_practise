import { prisma } from "@repo/db/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div>
      First name hahahahahahahahahahahah:
      {user?.username}
      password daaaaloooooooooo:
      {user?.password}
    </div>
  );
}
