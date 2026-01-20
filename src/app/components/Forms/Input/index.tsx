"use client";
import { useController, UseControllerProps } from "react-hook-form";
import { Label, Input, Error, FieldSet } from "./styles";

interface InputProps extends UseControllerProps {
  placeholder: string;
}

const Index = (props: InputProps) => {
  const { field, fieldState } = useController(props);

  return (
    <FieldSet>
      <Label htmlFor={props.name}>{props.placeholder}</Label>
      <Input {...field} placeholder={props.placeholder} />
      <Error>{fieldState.invalid ? "Is required" : ""}</Error>
    </FieldSet>
  );
};

export default Index;
