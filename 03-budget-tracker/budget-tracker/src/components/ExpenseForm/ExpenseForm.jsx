import {useState} from 'react';
import {globalChangeHandler} from '../../utils/globalChangeHandler';

export const ExpenseForm = (props) => {

    const [expenseForm, setExpenseForm] = useState({
                                                       amount: 0,
                                                       expenseDate: '',
                                                       category: '',
                                                       description: ''
                                                   });

    const onSaveHandler = () => {
        console.log(expenseForm);
    };

    return (
        <div className='container'>
            <div className='mb-3'>
                <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                >
                    Category name
                </label>
                <input
                    type='number'
                    className='form-control'
                    id='exampleFormControlInput1'
                    name='amount'
                    value={expenseForm.amount}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                >
                    Category name
                </label>
                <input
                    type='date'
                    className='form-control'
                    id='exampleFormControlInput1'
                    name='expenseDate'
                    value={expenseForm.expenseDate}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                >
                    Category name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    name='category'
                    value={expenseForm.category}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                >
                    Category name
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    name='description'
                    value={expenseForm.description}
                    onChange={globalChangeHandler(expenseForm, setExpenseForm)}
                />
            </div>
            <button
                className='btn btn-success'
                onClick={onSaveHandler}
            >
                Save Expense
            </button>
        </div>
    );
};
