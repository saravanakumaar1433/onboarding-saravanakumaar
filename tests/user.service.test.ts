import { UserService } from "../application/user.service";

const service = new UserService();

describe("UserService", () => {
    test("should return users", () => {
        expect(service.getUsers().length).toBeGreaterThan(0);
    });
});