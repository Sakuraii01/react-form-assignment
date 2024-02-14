import * as yup from "yup";

const profileFormSchema = () => {
  const profileFormValidationSchema = yup.object({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Must has 8 characters"),
    gender: yup.string().required("Gender is required"),
    color: yup.array().required("Favorite Color is required"),
    profileImage: yup.mixed().required("Profile Image is required"),
  });

  return {
    profileFormValidationSchema,
  };
};

export default profileFormSchema;
