export class Survey {
    id: string;
    title: string;
    questions: string[];
    createdAt: Date;

    constructor(id: string, title: string, questions: string[], createdAt: Date) {
        this.id = id;
        this.title = title;
        this.questions = questions;
        this.createdAt = createdAt;
    }
}