import { User } from "../models/user";

let users: User[] = [];
let nextId = 1;

export const UserService = {
    getAll: (): User[] => users,
    getById: (id: number): User | undefined => users.find(u => u.id === id),
    create: (user: Omit<User, 'id'>): User => {
        const newUser = { id: nextId++, ...user };
        users.push(newUser);
        return newUser;
    },
    update: (id: number, updated: Partial<User>): User | undefined => {
        const index = users.findIndex(u => u.id === id);
        if (index === -1) return undefined;
        users[index] = { ...users[index], ...updated };
        return users[index];
    },
    delete: (id: number): boolean => {
        const lengthBefore = users.length;
        users = users.filter(u => u.id !== id);
        return users.length < lengthBefore;
    }
};
