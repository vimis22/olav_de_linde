import {EmployeeRole} from "./EmployeeRole.ts";

export type EmployeeInfo{
    id: string;
    email: string;
    password: string;
    name: string;
    phone: number;
    address: string;
    role: EmployeeRole;
    country: string;
    zipcode: string;
};
