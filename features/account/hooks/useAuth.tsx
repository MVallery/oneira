import { useFormHandler } from "@/hooks/form/useFormHandler";

type Inputs = {
  email: string;
  password: string;
};

export const useAuthForm = (onSubmit: (data: Inputs) => void) => {
  return useFormHandler<Inputs>(onSubmit);
};
