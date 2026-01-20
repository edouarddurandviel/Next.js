import { ChangeEvent, useState } from "react";
import { InputGroup, Input, Label } from "@app/styles/template";
import FormError from "../Errors/formErrors";
import { UserErrors } from "@app/types/types";

const Index = ({
  type,
  name,
  value,
  state,
}: {
  type: string;
  name: string;
  value: string;
  state: UserErrors[] | undefined;
}) => {
  const [show, setShow] = useState<boolean>(true);
  const [values, setValues] = useState<string>(value || "");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValues(e.target.value || "");
    setShow(e && e.target.value ? false : true);
  };

  return (
    <InputGroup>
      <Label htmlFor={name}>{name}</Label>
      <Input type={type} value={values || ""} name={name} onChange={(e) => handleChange(e)} />
      {show && <FormError state={state && state} name={name} />}
    </InputGroup>
  );
};

export default Index;
