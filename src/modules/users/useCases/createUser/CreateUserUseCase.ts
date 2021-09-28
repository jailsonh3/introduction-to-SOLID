import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailExists = this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email already exists!");
    }

    try {
      const user = this.usersRepository.create({ name, email });
      return user;
    } catch {
      throw new Error("Error in create users");
    }
  }
}

export { CreateUserUseCase };
