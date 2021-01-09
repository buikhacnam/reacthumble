import {useState} from 'react'

export default function useForm(initialValue) {
    const [value, setValue] = useState(initialValue);
    const [isSubmit, setIsSubmit] = useState(false);
    const [storeValue, setStoreValue] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setIsSubmit(false);
        setValue(prev => {
            return {...prev, [name]: value};
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('set isSubmit to true')
        setIsSubmit(true);
        setStoreValue(value);
        setValue({name: '', password: ''})
    }
    return (
        [value, handleChange, handleSubmit, isSubmit, storeValue]
    )
}
