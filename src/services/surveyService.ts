export class SurveyService {
    private surveys: Survey[] = [];

    public createSurvey(title: string, questions: string[]): Survey {
        const newSurvey = new Survey(this.surveys.length + 1, title, questions, new Date());
        this.surveys.push(newSurvey);
        return newSurvey;
    }

    public getSurveyById(id: number): Survey | undefined {
        return this.surveys.find(survey => survey.id === id);
    }

    public getAllSurveys(): Survey[] {
        return this.surveys;
    }
}