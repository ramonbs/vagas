export type UserTypes = {
    status: string;
    user?: {
        id: number;
        name: string;
        job: string;
    };
    userPulled?: UserPulled;
};

export type User = {
    id: number;
    name: string;
    job: string;
    status?: string;
};

export type UserPulled = {
    name: string;
    timesPulled: number;
};

