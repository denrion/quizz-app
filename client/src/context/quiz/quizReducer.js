import { SET_LOADING } from '../shared/sharedTypes';
import { CREATE_QUIZ, GET_QUIZZES, QUIZ_ERROR } from './quizTypes';

const quizReducer = (state, action) => {
  switch (action.type) {
    case GET_QUIZZES:
      return {
        ...state,
        quizzes: action.payload.data.quizzes,
        totalResults: action.payload.totalResults,
        loading: false,
      };
    case CREATE_QUIZ:
      return {
        ...state,
        quizzes: [...state.quizzes, action.payload],
        loading: false,
      };
    case QUIZ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default quizReducer;
