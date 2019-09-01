import { _getQuestions } from '../utils/_DATA'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export const handleReceiveQuestions = () => {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        dispatch( receiveQuestions(questions) )
      })
  }
}