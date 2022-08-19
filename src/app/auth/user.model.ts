import { AccessControl } from "./accsess.control.model";

export class UserModel {
    public userId?: number | undefined;
    public username?: string | undefined;
    public email?: string | undefined;
    public password?: string | undefined;
    public fullName?: string | undefined;
    public createdAt?: Date | undefined;
    public updatedAt?: Date | undefined;
    public hashedRt?: string | undefined;
    public accessControl?: AccessControl | undefined;
    public isSusbended?: boolean | undefined;
    public isDeleted?: boolean | undefined;
    public isAdmin?: boolean | undefined;
    public _id?: string | undefined;
    public exp?:  any;
    public iat?: number | undefined;
    public accessToken?: string | undefined;
    public docId?: string | undefined;
}