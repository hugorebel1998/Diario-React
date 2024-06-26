import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const [formValidation, setformValidation] = useState({})

    useEffect(() => {
        createValidators()
    }, [formState])


    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null)
                return false;
        }
        return true;
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {

        const formcheckingValues = {};

        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage] = formValidations[formField];

            formcheckingValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setformValidation(formcheckingValues);

        console.log(formcheckingValues)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}