import {useState} from "react";

export default function useForm(schema) {

  const [form, setForm] = useState(
    Object.keys(schema.fields).reduce((obj, currentValue) => ({
      ...obj,
      [currentValue]: {
        value: "",
        error: ""
      }
    }), {})
  );

  const formValues = Object.keys(form).reduce((obj, key) => ({
    ...obj,
    [key]: form[key].value
  }), {});

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
    setForm,
    validate,
    handleInputChange
  };

}
