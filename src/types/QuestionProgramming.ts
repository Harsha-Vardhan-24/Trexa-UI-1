interface QuestionProgramming{
    questionId: number,
    questionText: string,
    addedOn: Date,
    deficultyLevel: string,
    tags: string[],
    answerType: string,
    questionCategory: string,
    weightage: number,
    testcases: TestCase[],
    draft: boolean
}  