import { useIMask } from "react-imask";

import Input from "../../components/LoginComponents/Input/Input";

export const ImaskInput = ({ errors, value, onChange, placeholder, label }) => {
  const { ref, unmaskedValue } = useIMask({
    mask: "[+7] (000)-000-00-00",
  });

  return (
    <Input
      errors={errors}
      ref={ref}
      val={value}
      onChange={(e) => {
        onChange(unmaskedValue);
      }}
      placeholder={placeholder}
      label={label}
    />
  );
};
