import {useState} from 'react';
import {globalChangeHandler} from '../../utils/globalChangeHandler';

export const CategoryForm = (props) => {

    const [categoryForm, setCategoryForm] = useState({
                                                         name: ''
                                                     });

    const saveHandler = () => {
        console.log(categoryForm);
    };

    return (
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category name</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name='name'
                    value={categoryForm.name}
                    onChange={globalChangeHandler(categoryForm, setCategoryForm)}
                />
            </div>
            <button
                className="btn btn-success"
                onClick={saveHandler}
            >
                Push me
            </button>
        </div>
    );
};
