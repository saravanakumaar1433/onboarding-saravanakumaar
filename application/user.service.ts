import { User } from "../domain/user";
import { UserRepository } from "../infrastructure/user.repository";

export class UserService {
    private repository = new UserRepository();

    getUsers(): User[] {
        return this.repository.getAllUsers();
    }
}