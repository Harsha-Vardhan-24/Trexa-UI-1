export interface QuestionsResponseData{
    objective:{
       questions:QuestionObjective[],
       count:number,
       page:number
    },
    programming:{
      questions:QuestionProgramming[],
      count:number,
      page:number
    }
    objectiveCategories:[],
    programmingCategories:[]
  }