import { CrudContext } from "context/CrudProvider";
import { useContext } from "react";
import Field from "./Field";

const Attributes = () => {
  const { attributes } = useContext(CrudContext);
  return attributes.map((attribute) => (
    <Field key={attribute.name} attribute={attribute} />
  ));
};

export default Attributes;