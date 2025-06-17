export class Feedback {
    id: string;
    surveyId: string;
    userId: string;
    content: string;

    constructor(id: string, surveyId: string, userId: string, content: string) {
        this.id = id;
        this.surveyId = surveyId;
        this.userId = userId;
        this.content = content;
    }
}