import { QuestionType, Quiz } from './../types/quiz_types'

//This Function is used for shuffle Array:

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQuestion: number, level: string): Promise<QuestionType[]> => {

    let res = await fetch(`http://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();
    const quiz: QuestionType[] = results.map((questionObj: Quiz) => {
        return {

            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
            question: questionObj.question,
            correct_answer: questionObj.correct_answer

        }
    })
    return quiz;
}