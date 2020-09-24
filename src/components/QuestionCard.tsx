import React, { useState } from 'react';
import { QuestionPropsType } from './../types/quiz_types';

const QuestionCard: React.FC<QuestionPropsType> = ({ option, question, callBack }) => {

    let [selectOption, setSlectOption] = useState(" ");

    const handleSelection = (e: any) => {
       
        setSlectOption(e.target.value);
    }
    return (
        <div className="QuestionContainer">
            <h1> Question Card is Here </h1>
            <div>
                <h4>{question}</h4>

            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callBack(e, selectOption)}>
                {
                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type="radio" name="opt"
                                        value={opt}
                                         required
                                        onChange={handleSelection}
                                        checked={selectOption===opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
};

export default QuestionCard