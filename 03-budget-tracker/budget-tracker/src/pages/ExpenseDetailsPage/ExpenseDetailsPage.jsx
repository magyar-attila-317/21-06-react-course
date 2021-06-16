import {ExpenseDetails} from '../../components/ExpenseDetails/ExpenseDetails';
import {useEffect, useState} from 'react';

export const ExpenseDetailsPage = props => {

    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        const currentExpenseIdParam = props.match.params.expenseId;
        //TODO type checking for currentExpenseIdParam
        setCurrentId(Number(currentExpenseIdParam));
    }, [props.match.params.expenseId]);

    return (
        <div className='container'>
            <ExpenseDetails
                expenseId={currentId}
            />
        </div>
    );
};
