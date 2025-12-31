'use client'
import { useController, UseControllerProps } from 'react-hook-form';
import css from "./input.module.scss"

interface InputProps extends UseControllerProps {
  placeholder: string
}

const Index = (props: InputProps) => {
  const { field, fieldState } = useController(props)

  return (
    <div className={css.field}>
      <label htmlFor={props.name}>{props.placeholder}</label>
      <input {...field} placeholder={props.placeholder} />
      <div className={css.error}>{fieldState.invalid ? "Is required" : ""}</div>
    </div>
  )
}

export default Index;
