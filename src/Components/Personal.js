import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import { userSchema } from "./userValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { state } from "./State";
import { Link } from "react-router-dom";

const userSchema = yup.object().shape({
  fullName: yup.string().required(),
  dob: yup.string().required(),
  sex: yup.string().required(),
  mobile: yup.string().min(10).max(10).required(),
  govtId: yup.string().required(),
  id: yup
    .string()
    .min(12)
    .max(12)
    .required()
    .when("govtId", {
      is: "pan",
      then: () =>
        yup.string().min(10).max(10).required("Enter Valid Pan Number"),
    }),
  emergencyContact: yup.string().min(10).max(10),
});

const Personal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });
  const onSubmit = (data) => {
    fetch("https://test-task-backend-production.up.railway.app/api/user/register", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      if (res.ok) {
        alert("Data uploded successfuly");
        reset();
      }
    });
   
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ----------------Personal Details--------------------- */}

        <section className="hanlde-personal-container">
          <h3>Personal Details</h3>
          <div className="personal-container">
            <div>
              <label htmlFor="">
                Name<span>*</span>
              </label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                placeholder="Enter Name"
              />
              <p>{errors.fullName?.message}</p>
            </div>
            <div>
              <label htmlFor="">
                Date of Birth or Age<span>*</span>
              </label>
              <input
                type="number"
                {...register("dob", { required: true })}
                placeholder="DD/MM/YYYY or Age in Years"
              />
              <p>{errors.dob?.message}</p>
            </div>
            <div>
              <label htmlFor="">
                Sex<span>*</span>
              </label>
              <select {...register("sex", { required: true })}>
                <option value="" disabled selected>
                  Enter Sex
                </option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <p>{errors.sex?.message}</p>
            </div>
          </div>
          <div className="personal-container">
            <div>
              <label htmlFor="">Mobile</label>
              <input
                type="number"
                {...register("mobile")}
                placeholder="Enter Mobile"
              />
              <p>{errors.mobile?.message}</p>
            </div>
            <div>
              <label htmlFor="">Govt Issued ID</label>
              <select {...register("govtId")}>
                <option value="" disabled selected>
                  ID Type
                </option>
                <option value="aadhar">Aadhar</option>
                <option value="pan">Pan</option>
              </select>

              <input
                type="text"
                {...register("id")}
                placeholder="Enter Govt ID"
              />
              <p>{errors.id?.message}</p>
            </div>
          </div>
        </section>

        {/* ----------------Contact Details--------------------- */}

        <section className="hanlde-contact-container">
          <h3>Contact Details</h3>
          <div className="personal-container">
            <div>
              <label htmlFor="">Guardian Details</label>
              <select {...register("guardianLabel")}>
                <option value="" disabled selected>
                  Enter labrl
                </option>
                <option value="mother">Mother</option>
                <option value="father">Father</option>
                <option value="grandFather">Grand Father</option>
              </select>
              <input
                {...register("guardianDetails")}
                placeholder="Enter Grandian Name"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="">Emergency Contact Number</label>
              <input
                type="number"
                {...register("emergencyContact")}
                placeholder="Enter Emergenct No"
              />
            </div>
          </div>
        </section>

        {/* -------------------Address Details--------------------- */}

        <section className="handle-address-container">
          <h3>Address Details</h3>
          <div className="personal-container">
            <div>
              <label htmlFor="">Address</label>
              <input
                type="text"
                {...register("address")}
                placeholder="Enter Address"
              />
            </div>
            <div>
              <label htmlFor="">State</label>
              <select {...register("state")}>
                <option value="" disabled selected>
                  Enter State
                </option>
                {state.map((val) => (
                  <option value={val.name}>{val.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="">City</label>
              <input {...register("city")} placeholder="Enter City" />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <input value="India" {...register("country")} />
            </div>
            <div>
              <label htmlFor="">Pincode</label>
              <input {...register("pinCode")} placeholder="Enter Pincode" />
            </div>
          </div>
        </section>

        {/* --------------------Other Details----------------------- */}

        <section className="handle-other-container">
          <h3>Other Details</h3>
          <div className="personal-container">
            <div>
              <label htmlFor="">Occupation</label>
              <input
                {...register("occupation")}
                placeholder="Enter Occupation"
              />
            </div>
            <div>
              <label htmlFor="">Religion</label>
              <select {...register("religion")}>
                <option value="" disabled selected>
                  Enter Religion
                </option>
                <option value="Hinduism">Hinduism</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
                <option value="Judaism">Judaism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Jainism">Jainism</option>
                <option value="Sikhism">Sikhism</option>
                <option value="Zoroastrianism">Zoroastrianism</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Marital Status</label>

              <select {...register("maritalStatus")}>
                <option value="" disabled selected>
                  Enter Statue
                </option>
                <option value="Single">Single</option>
                <option value="Married">Merried</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Blood Group</label>
              <select {...register("bloodGroup")}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Nationality</label>
              <input {...register("nationality")} value="Indian" />
            </div>
          </div>
        </section>
        <input type="submit" />
      </form>
      <Link to="userData">
        <button>User Data</button>
      </Link>
    </>
  );
};

export default Personal;
