import React from 'react';

export type Quiz = {
    category: string
    correct_answer: string
    incorrect_answers: string[]
    difficulty: string
    question: string
    type: string
}

export type QuestionType = {
    option: string[]
    answer: string
    question: string
    correct_answer: string
}
export type QuestionPropsType={
    question: string
    option: string[]
    callBack:(e:React.FormEvent<EventTarget>, ans:string )=>void
}