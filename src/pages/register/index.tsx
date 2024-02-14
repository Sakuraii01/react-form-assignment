import { Form } from "react-final-form";

import { InputField } from "../../components/Field";
import { InputRadio } from "../../components/Radio";
import { Checkbox } from "../../components/Checkbox";
import UploadPicture from "../../components/UploadPicture";

import COLORS from "../../data/colors";
import GENDER from "../../data/genders";

import useViewModel from "./viewModel";
const Register = () => {
  const { handleOnSubmit, validation, registerInitialValues } = useViewModel();
  return (
    <div className="c-container">
      <h1 className="mb-4 text-xl">Register</h1>
      <Form
        initialValues={registerInitialValues}
        onSubmit={(values) => handleOnSubmit(values)}
        validate={validation}
        render={({ handleSubmit, submitting, pristine }) => {
          return (
            <div>
              <form onSubmit={handleSubmit}>
                <UploadPicture />
                <div>
                  <InputField
                    type="text"
                    name="firstname"
                    label="Firstname"
                    placeholder="Your firstname"
                  />
                  <InputField
                    type="text"
                    name="lastname"
                    label="Lastname"
                    placeholder="Your lastname"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    name="username"
                    label="Username"
                    placeholder="Your username"
                  />
                  <InputField
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Your password"
                  />
                  <InputField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Your email"
                  />
                </div>
                <InputRadio name="gender" label="Gender" options={GENDER} />
                <div className="flex gap-3">
                  <Checkbox
                    name={"color"}
                    label={"Favorite Colors"}
                    options={COLORS}
                  />
                </div>

                <button
                  type="submit"
                  className="btn"
                  disabled={submitting || pristine}
                >
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Register;
