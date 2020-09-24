import React, { useEffect, useState } from 'react'
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType } from './types/quiz_types'
import QuestionCard from './components/QuestionCard';
function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [Score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy')
      console.log("Questions: ", questions)
      setQuiz(questions)
    }
    fetchData();
  }, []);


  if (!quiz.length)
    return <h3>Loading... </h3>
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {

    e.preventDefault();
    const currentQuestion: QuestionType = quiz[currentStep]
    console.log("Correct Ans"+ currentQuestion.correct_answer);
    if (userAns === currentQuestion.correct_answer){
 setScore(++Score)
    }
      if (currentStep !== quiz.length - 1)
      {
        setCurrentStep(++currentStep);
      }
      else
      {
        alert("Quiz is Completed & Your score is "+ Score + ": out of :"+ quiz.length)
        setCurrentStep(0);
        setScore(0);
      }
  }
  return (
    <div>
      
      <QuestionCard
        option={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callBack={handleSubmit}
      />

    </div>
  )
}
export default App; 