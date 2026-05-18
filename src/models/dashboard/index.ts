export interface IFormModal {
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
    projectDuration?: [Date | null, Date | null];
}