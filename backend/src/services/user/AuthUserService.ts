import prismaCliente from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaCliente.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      throw new Error("User/password incorret");
    }

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error("User/password incorret");
    }

    return { ok: true };
  }
}

export { AuthUserService };
