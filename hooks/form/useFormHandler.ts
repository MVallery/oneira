import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export const useFormHandler = <T extends FieldValues>(onSubmit: SubmitHandler<T>, options={}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<T>(options);

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    isDirty,
  };
};