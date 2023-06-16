import prisma from "@referrer/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...withoutPassword } = user;
    return new Response(JSON.stringify(withoutPassword));
  } else return new Response(JSON.stringify(null));
}
