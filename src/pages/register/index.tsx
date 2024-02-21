import { cx, css } from "@emotion/css";

import { Form } from "react-final-form";
import { InputField } from "../../components/Field";
import { InputRadio } from "../../components/Radio";
import { Checkbox } from "../../components/Checkbox";
import UploadPicture from "../../components/UploadPicture";

import COLORS from "../../data/colors";
import GENDER from "../../data/genders";

import useViewModel from "./viewModel";
import { useState, useEffect } from "react";

const Register = () => {
  const { handleOnSubmit, validation, registerInitialValues } = useViewModel();
  const [changeColor, setChangeColor] = useState<boolean>(true);

  const [btnColor, setBtnColor] = useState(
    `bg-gray-500 hover:bg-primary-700 focus-visible:outline-primary-700`
  );
  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  useEffect(() => {
    if (changeColor) {
      setBtnColor(
        `bg-gray-500 hover:bg-primary-700 focus-visible:outline-primary-700`
      );
    } else {
      setBtnColor(
        `bg-gray-500 hover:bg-green-700 focus-visible:outline-green-700`
      );
    }
  }, [changeColor]);
  return (
    <>
      <button
        className={cx(
          `fixed bottom-5 font-medium right-5 btn w-32 ${btnColor}`
        )}
        onClick={handleChangeColor}
      >
        Change color
      </button>
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
                      name="firstName"
                      label="Firstname"
                      placeholder="Your firstname"
                    />
                    <InputField
                      type="text"
                      name="lastName"
                      label="Lastname"
                      placeholder="Your lastname"
                    />
                  </div>
                  <div>
                    <InputField
                      type="text"
                      name="userName"
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
                    className={cx(`btn ${btnColor} `)}
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
    </>
  );
};

export default Register;
