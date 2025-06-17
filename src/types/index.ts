export interface Feedback {
    id: string;
    surveyId: string;
    userId: string;
    content: string;
}

export interface Survey {
    id: string;
    title: string;
    questions: string[];
    createdAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}