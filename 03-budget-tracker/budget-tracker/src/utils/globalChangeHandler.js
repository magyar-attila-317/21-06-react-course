export const globalChangeHandler = (form, setForm) => {
    return (event) => {
        const updatedForm = {...form};
        const newInputValue = event.currentTarget.value;
        const currentInputName = event.currentTarget.name;

        updatedForm[currentInputName] = newInputValue;

        setForm(updatedForm);
    };
};
