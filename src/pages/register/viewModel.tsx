import { useState } from "react";
import { registerDTO, registerInterface } from "./registerDto";
import profileFormSchema from "../common/profileFormSchema";
import useValidation from "../../utils/useValidation";

const useViewModel = () => {
  const [registerInfo, setRegisterInfo] = useState<registerDTO | null>();
  const registerInitialValues = {
    firstName: registerInfo?.firstName || "",
    lastName: registerInfo?.lastName || "",
    userName: registerInfo?.userName || "",
    password: registerInfo?.password || "",
    email: registerInfo?.email || "",
    gender: registerInfo?.gender || "",
    color: registerInfo?.color || null,
    profileImage: registerInfo?.profileImage || null,
  };
  const handleOnSubmit = (values: registerInterface) => {
    const formData = new FormData();
    formData.append("profileImage", values?.profileImage[0] ?? null);

    const registerData: registerDTO = {
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
      password: values.password,
      email: values.email,
      gender: values.gender,
      color: values.color,
      profileImage: formData || null,
    };

    setRegisterInfo(registerData);
    console.log(registerData);
  };

  const { profileFormValidationSchema } = profileFormSchema();
  const { validation } = useValidation(profileFormValidationSchema);
  return {
    handleOnSubmit,
    validation,
    registerInitialValues,
  };
};

export default useViewModel;
