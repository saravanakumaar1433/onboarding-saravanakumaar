import { User } from "../domain/user";

export class UserRepository {
    private users: User[] = [
        {
            id: 1,
            name: "Saravanakumaar",
            email: "saravanakumaar.dv@hcltech.com"
        }
    ];

    getAllUsers(): User[] {
        return this.users;
    }
}