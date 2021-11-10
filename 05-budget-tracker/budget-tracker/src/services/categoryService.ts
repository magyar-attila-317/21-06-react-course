import axios from 'axios';
import {CategoryFormModel} from '../models/api-models/CategoryFormModel';
import {CategoryListModel} from '../models/api-models/CategoryListModel';

export const saveCategory = (categoryForm: CategoryFormModel) => {
    return axios.post('/api/categories', categoryForm);
};

export const getCategories = (): Promise<CategoryListModel[]> => {
    return axios.get('/api/categories')
                .then(response => response.data);
};
