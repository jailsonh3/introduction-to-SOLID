import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userIdExist = this.usersRepository.findById(user_id);

    if (!userIdExist) {
      throw new Error("User is not found.");
    }

    if (userIdExist.admin) {
      throw new Error("User is already admin");
    }

    const user = this.usersRepository.turnAdmin(userIdExist);

    return user;
  }
}

export { TurnUserAdminUseCase };
