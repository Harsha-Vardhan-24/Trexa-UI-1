interface QuestionObjective{
    questionId: number,
    questionText: string,
    addedOn: string,
    deficultyLevel: string,
    tags: string[],
    answerType: string,
    questionCategory: string,
    weightage: number,
    options:string [],
    correctOption: number,
    isdraft: boolean,
    questionType:string
  }