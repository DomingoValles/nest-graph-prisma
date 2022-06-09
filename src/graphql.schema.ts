
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: boolean;
    avatar?: Nullable<string>;
}

export class UpdateUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: boolean;
    avatar?: Nullable<string>;
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: boolean;
    avatar?: Nullable<string>;
    createdAt: string;
    updatedAt: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
