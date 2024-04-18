interface QuestionObjective{
    questionId: number,
    questionText: string,
    addedOn: Date,
    deficultyLevel: string,
    tags: string[],
    answerType: string,
    questionCategory: string,
    weightage: number,
    options:string [],
    correctOption: number,
    draft: boolean
  }