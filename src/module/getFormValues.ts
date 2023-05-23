const getFormValues = (form: any) => Object.fromEntries(new FormData(form));

export default getFormValues;
