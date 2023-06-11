export type UserTypes = {
    status: string;
    user?: {
        id: number;
        name: string;
        job: string;
    };
};

export type User = {
    id: number;
    name: string;
    job: string;
    status?: string;
};
