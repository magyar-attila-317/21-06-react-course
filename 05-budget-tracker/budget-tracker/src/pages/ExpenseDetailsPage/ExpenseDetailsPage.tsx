import {ExpenseDetails} from '../../components/ExpenseDetails/ExpenseDetails';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export const ExpenseDetailsPage = (props: any) => {

    const [currentId, setCurrentId] = useState<number | null>(null);

    const {expenseId} = useParams<{ expenseId: string }>();

    useEffect(() => {
        // const currentExpenseIdParam = props.match.params.expenseId;
        //TODO type checking for currentExpenseIdParam
        setCurrentId(Number(expenseId));
    }, [expenseId]);

    return (
        <div className='container'>
            <ExpenseDetails
                expenseId={currentId}
            />
        </div>
    );
};
