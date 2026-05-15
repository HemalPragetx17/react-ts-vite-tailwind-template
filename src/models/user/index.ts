export interface IUserModal {
    id?: number;
    name: string;
    email: string;
    joiningDate?: string;
    age: number;
    gender: string;
    role: string;
    status: boolean;
    technologies?: string[];
    hobbies?: string[];
    agreeToTerms?: boolean;
    bio?: string;
    dateRange?: [Date | null, Date | null];
}