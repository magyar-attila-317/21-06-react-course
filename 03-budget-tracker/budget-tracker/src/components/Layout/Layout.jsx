import {Route} from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar';
import {CategoryFormPage} from '../../pages/CategoryFormPage/CategoryFormPage';
import {ExpenseDetailsPage} from '../../pages/ExpenseDetailsPage/ExpenseDetailsPage';
import {ExpenseFormPage} from '../../pages/ExpenseFormPage/ExpenseFormPage';

export const Layout = () => {

    return (
        <div>
            <Navbar/>
            <Route path='/category-form' exact component={CategoryFormPage}/>
            <Route path='/expense-form' exact component={ExpenseFormPage}/>
            <Route path='/expense/:expenseId' exact component={ExpenseDetailsPage}/>

            {/*Footer*/}
        </div>
    );
};
