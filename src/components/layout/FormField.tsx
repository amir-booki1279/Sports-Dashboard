import { useId } from "react";
import {
  type FieldPath,
  type FieldValues,
  type UseFormRegister,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  register: UseFormRegister<T>;
  error?: string;
  placeholder?: string;
  type?: string;
}

export default function FormField<T extends FieldValues>({
  label,
  name,
  register,
  error,
  placeholder,
  type = "text",
}: FormFieldProps<T>) {
  const id = useId();

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        {...register(name)}
      />

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
