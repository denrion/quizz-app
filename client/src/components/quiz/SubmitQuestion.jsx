import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { QuizContext } from '../../context/quiz/QuizProvider';
import { QUESTION_CATEGORIES, QUESTION_TYPES } from './constants';

const SubmitQuestion = () => {
  const { submitQuestion } = useContext(QuizContext);

  const { register, handleSubmit, watch, errors, reset, getValues } = useForm();
  const questionType = watch('type');

<<<<<<< HEAD:client/src/components/quiz/SubmitQuestion.jsx
  useEffect(() => {
    if (!error) reset();
    // eslint-disable-next-line
  }, []);

  const onSubmitHandler = (formData) => submitQuestion(formData);

  // TODO: Replace this with data from DB
  const questionTypes = ['MULTIPLE_CHOICE', 'TEXT'];
  const questionCategories = [
    'TRASH',
    'HISTORY',
    'MUSIC',
    'SPORT',
    'GEOGRAPHY',
    'SCIENCE',
    'OTHER',
  ];
=======
  const onSubmitHandler = (formData) => {
    submitQuestion(formData);
    if (!!errors) reset();
  };
>>>>>>> add question test data, improve questions table:client/src/components/qizz/SubmitQuestion.jsx

  return (
    <>
      <h1 className='text-center my-3'>Submit Question</h1>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='form-group'>
          <label htmlFor='category'>Question Category</label>
          <select
            name='category'
            id='category'
            className={errors.category && 'has-error'}
            ref={register({
              validate: (value) =>
                QUESTION_CATEGORIES.includes(value) ||
                'You must choose an option',
            })}
          >
            <option value=''>Choose an option</option>
            {QUESTION_CATEGORIES.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className='is-error'>{errors.category.message}</span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='type'>Question Type</label>
          <select
            name='type'
            id='type'
            className={errors.type && 'has-error'}
            ref={register({
              validate: (value) =>
                QUESTION_TYPES.includes(value) || 'You must choose an option',
            })}
          >
            <option value=''>Choose an option</option>
            {QUESTION_TYPES.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.type && (
            <span className='is-error'>{errors.type.message}</span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='questionText'>Question Text</label>
          <textarea
            name='questionText'
            id='questionText'
            className={errors.questionText && 'has-error'}
            ref={register({
              required: 'This field is required',
            })}
          ></textarea>
          {errors.questionText && (
            <span className='is-error'>{errors.questionText.message}</span>
          )}
        </div>

        {questionType === 'TEXT' && (
          <div className='form-group'>
            <label htmlFor='answer'>Answer</label>
            <textarea
              name='answer'
              id='answer'
              className={errors.answer && 'has-error'}
              ref={register({
                required: 'This field is required',
              })}
            ></textarea>
            {errors.answer && (
              <span className='is-error'>{errors.answer.message}</span>
            )}
          </div>
        )}

        {questionType === 'MULTIPLE_CHOICE' && (
          <>
            <div className='form-group'>
              <label htmlFor='answerA'>Answer A</label>
              <input
                type='text'
                name='answerA'
                id='answerA'
                className={errors.answerA && 'has-error'}
                ref={register({
                  required: 'This field is required',
                  validate: (value) =>
                    (value !== getValues().answerB &&
                      value !== getValues().answerC &&
                      value !== getValues().answerD) ||
                    'Answers cannot repeat',
                })}
              />
              {errors.answerA && (
                <span className='is-error'>{errors.answerA.message}</span>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='answerB'>Answer B</label>
              <input
                className={errors.answerB && 'has-error'}
                type='text'
                name='answerB'
                id='answerB'
                ref={register({
                  required: 'This field is required',
                  validate: (value) =>
                    (value !== getValues().answerA &&
                      value !== getValues().answerC &&
                      value !== getValues().answerD) ||
                    'Answers cannot repeat',
                })}
              />
              {errors.answerB && (
                <span className='is-error'>{errors.answerB.message}</span>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='answerC'>Answer C</label>
              <input
                className={errors.answerC && 'has-error'}
                type='text'
                name='answerC'
                id='answerC'
                ref={register({
                  required: 'This field is required',
                  validate: (value) =>
                    (value !== getValues().answerA &&
                      value !== getValues().answerB &&
                      value !== getValues().answerD) ||
                    'Answers cannot repeat',
                })}
              />
              {errors.answerC && (
                <span className='is-error'>{errors.answerC.message}</span>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='answerD'>Answer D</label>
              <input
                className={errors.answerD && 'has-error'}
                type='text'
                name='answerD'
                id='answerD'
                ref={register({
                  required: 'This field is required',
                  validate: (value) =>
                    (value !== getValues().answerA &&
                      value !== getValues().answerB &&
                      value !== getValues().answerC) ||
                    'Answers cannot repeat',
                })}
              />
              {errors.answerD && (
                <span className='is-error'>{errors.answerD.message}</span>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='correctAnswer'>Correct Answer</label>
              <select
                name='correctAnswer'
                id='correctAnswer'
                className={errors.correctAnswer && 'has-error'}
                ref={register({
                  validate: (value) =>
                    ['A', 'B', 'C', 'D'].includes(value) ||
                    'You must choose an option',
                })}
              >
                <option value=''>Choose an option</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
              </select>
              {errors.correctAnswer && (
                <span className='is-error'>{errors.correctAnswer.message}</span>
              )}
            </div>
          </>
        )}

        <input
          type='submit'
          value='Submit'
          className='btn btn-primary btn-block my-3'
        />
      </form>
    </>
  );
};

export default SubmitQuestion;
