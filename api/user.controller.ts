import { UserService } from "../application/user.service";

export class UserController {
    private service = new UserService();

    getUsers() {
        return this.service.getUsers();
    }
}

const controller = new UserController();

console.log("Users:");
console.log(controller.getUsers());