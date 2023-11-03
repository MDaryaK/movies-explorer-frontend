import {useMemo, useState} from "react";

export default function useForm(schema, initState) {

  const [form, setForm] = useState(
    Object.keys(schema.fields).reduce((obj, key) => ({
      ...obj,
      [key]: {
        value: (initState && initState[key]) || "",
        error: ""
      }
    }), {})
  );

  const formValues = useMemo(() => {
    return Object.keys(form).reduce((obj, key) => ({
      ...obj,
      [key]: form[key].value
    }), {})
  }, [form]);

  const formErrors = useMemo(() => Object.keys(form).map((key) => form[key].error).filter((item) => item && item), [form]);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    let error = "";

    try {
      await schema.validate({
        ...formValues,
        [name]: value
      }, {
        abortEarly: false
      });
    } catch (e) {
      e.inner.forEach(e => {
        if (e.path !== name) {
          return;
        }

        error = e.message;
      });
    }

    setForm((form) => ({
      ...form,
      [name]: {
        error,
        value
      }
    }));
  };

  const validate = async () => {
    const newForm = { ...form };

    let isError = false;

    try {
      await schema.validate(formValues, {
        abortEarly: false
      });
    } catch (e) {
      e.inner.forEach(e => {
        const item = newForm[e.path];
        item.error = e.message;

        isError = true;
      });
    }

    setForm(newForm);

    return isError;
  };

  return {
    form,
    formValues,
    formErrors,
    setForm,
    validate,
    handleInputChange
  };

}
