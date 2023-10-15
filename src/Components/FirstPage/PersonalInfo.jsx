import React from "react";
import { CustomButton, Field, Input, Form } from "../FirstPage";
import { useForm } from "react-hook-form";
import { useAppState } from "../../state";
function PersonalInfo(props) {
  const [state, setState] = useAppState();
  const saveData = (data) => {
    setState({ ...state, ...data });
    props.handleNext();
  };
  const {
    handleSubmit,
    register,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onBlur" });
  const handleInputChange = (e) => {
    // Set the input value using react-hook-form's setValue
    setValue(e.target.name, e.target.value);
  };
  return (
    <React.Fragment>
      <Form
        onSubmit={handleSubmit(saveData)}
      >
        <Field label="Name">
          <Input
            {...register("firstName", { required: "First name is required" })}
            id="first-name"
            onChange={handleInputChange}
          />
        </Field>
        {errors.firstName && (
          <p className="errorMsg">{errors.firstName.message}</p>
        )}
        <Field label="Email">
          <Input
            {...register("email", {
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter valid email address.",
              },
              required: "Email is required",
            })}
            type="email"
            id="email"
            onChange={handleInputChange}
          />
        </Field>
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        <Field label="Phone Number">
          <Input
            {...register("phonenumber", {
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter valid phone number.",
              },
              maxLength: "10",
              required: "Phone Number is required",
            })}
            type="text"
            id="phone-number"
            onChange={()=>trigger('phone-number')}
          />
        </Field>
        {errors.phonenumber && (
          <p className="errorMsg">{errors.phonenumber.message}</p>
        )}
        <CustomButton  color="primary.main">Next Step</CustomButton>
      </Form>
    </React.Fragment>
  );
}

export default PersonalInfo;
