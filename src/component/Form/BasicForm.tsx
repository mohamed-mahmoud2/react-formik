import { useEffect, useState } from "react";
import Form from "../Form";
import Input from "../Input";
import axios from "axios";
import Label from "../label";
import Button from "../Button";
import { useFormik } from "formik";
import {ValidationSchema} from "./ValidationSchema";

const BasicForm = () => {
  const [fields, setFields] = useState<any[]>([]);
  useEffect(() => {
    axios.get("../../../public/Data/tot.json").then((response) => {
      const data = response.data;
      setFields(data.inputs);
    });
  }, []);
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
    validationSchema: ValidationSchema,
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <>
        {fields.map((field) => (
          <div key={field.name}>
            <Label name={field.name} />
            <Input
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              className="form-control"
              id={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        ))}
        <Button type="submit" className="btn btn-primary" text="Submit" />
      </>
    </Form>
  );
};

export default BasicForm;
