import axios from "axios";
import { useEffect, useState } from "react";
import * as Yup from "yup"
export const ValidationSchema = () => {
  const [schema, setSchema] = useState([]);
  useEffect(() => {
    axios.get("../../../public/Data/tot.json").then((response) => {
      const data = response.data.inputs;
      setSchema(data.validation);
    });
  }, []);
  return;
};

