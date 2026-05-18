export interface IFormModal {
    _id?: number;
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
    phone: string;
    phoneCountry: string;
    profile_pic: File | string;
    image: File | string;
    images: {
        _id: string;
        url: string;
    }[];
    imageToDelete: string[];
}