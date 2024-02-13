"use client";

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    address: "",
    mobile: "",
    admissionClass: "Select",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState({ type: "", text: "" });

  const displayMessage = (type, text) => {
    setMessage({ type, text });

    // Clear the message after a certain duration (e.g., 5 seconds)
    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 5000);
  };

  const handleChange = (e) => {
    const { id, value, name } = e.target;

    setFormData({
      ...formData,
      [id]: value,
      [name]: value,
    });

    // Filter out non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Clear specific error when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
      [name]: "", // Clear error for the current field
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation for full name
    if (formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    // Validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validation for mobile number (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    // Validation for address not empty
    if (formData.address.trim() === "") {
      newErrors.address = "Address cannot be empty";
    }

    // Validation for date of birth
    if (formData.dob === "") {
      newErrors.dob = "Date of Birth is required";
    }

    // Validation for gender selection
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    // Validation for admission class
    if (!formData.admissionClass || formData.admissionClass === "Select") {
      newErrors.admissionClass = "Please select a class";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Form has errors. Please correct them.");
    } else {
      const rawResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // console.log(await rawResponse.json());
      // Check if the submission was successful
      if (rawResponse.ok) {
        // Reset errors if form submission is successful
        setErrors({});

        // Clear form data after successful submission
        setFormData({
          fullName: "",
          email: "",
          dob: "",
          address: "",
          mobile: "",
          admissionClass: "Select",
          gender: "",
        });

        // Display success message
        displayMessage("success", "Form submitted successfully!");
      } else {
        // If there was an error during form submission, display an error message
        displayMessage(
          "error",
          "Form submission failed. Please try again later."
        );
      }
    }
  };

  return (
    <div>
      <HeroSection
        imageSrc="/images/enquiry/enquiry-hero.png"
        title="Enquiry"
      />

      <section className="enquiry-bg-1 px-4 md:px-28 py-4 md:py-8">
        <section className="rounded-lg bg-white mt-4 p-4 md:px-16 md:py-10 shadow-[0_4px_18px_0_rgba(0,0,0,0.1)]">
          <div className="mb-4">
            <p className="text-lg md:text-3xl font-semibold md:font-bold">
              Get In Touch With Us
            </p>
          </div>
          <div className="my-6 md:my-10 w-full">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-3 gap-4 md:gap-10">
                <div>
                  <InputField
                    label="Enter Your Full Name"
                    id="fullName"
                    type="text"
                    placeholder="Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <InputField
                    label="Enter Your Email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <InputField
                    label="Enter Your Date of Birth"
                    id="dob"
                    type="date"
                    placeholder="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <InputField
                    label="Enter Your Address"
                    id="address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>

                <div>
                  <InputField
                    label="Mobile No"
                    id="mobile"
                    type="tel"
                    placeholder="+91"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <label
                    className="text-sm font-medium"
                    htmlFor="admissionClass"
                  >
                    Select Class for which Admission is sought{" "}
                    <span className="text-[#FF0D00]">*</span>
                  </label>
                  <select
                    id="admissionClass"
                    className="border rounded py-2 px-3 mt-2 w-full focus:outline-none cursor-pointer"
                    onChange={handleChange}
                    value={formData.admissionClass}
                  >
                    {classOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.admissionClass && (
                    <p className="text-red-500 text-sm">
                      {errors.admissionClass}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-start items-start flex-col mt-1">
                    <label className="text-sm font-medium">
                      Gender <span className="text-[#FF0D00]">*</span>{" "}
                    </label>
                    <div className="mt-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          className="form-radio w-4 h-4 cursor-pointer"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-sm font-medium">Male</span>
                      </label>
                      <label className="inline-flex items-center cursor-pointer ms-8">
                        <input
                          type="radio"
                          className="form-radio w-4 h-4 cursor-pointer"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-sm font-medium">Female</span>
                      </label>
                    </div>
                    {errors.gender && (
                      <p className="text-red-500 text-sm">{errors.gender}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-8 md:mt-12">
                <button
                  className="bg-[#10171D] text-white px-8 py-2 rounded-lg"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center w-full p-4 mt-4">
              {message.type && (
                <div
                  className={`${
                    message.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  } font-semibold text-center `}
                >
                  {message.text}
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="mb-4 md:mb-8"></div>
      </section>
    </div>
  );
};

export default Enquiry;

const InputField = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div className="flex justify-start items-start flex-col">
        <label className="text-sm font-medium" htmlFor={id}>
          {label} <span className="text-[#FF0D00]">*</span>
        </label>
        <input
          className="border rounded py-2 px-3 mt-2 w-full focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

// Array of class options
const classOptions = [
  "Select",
  "Nursery",
  "Kindergarten (KG)",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11 (Science)",
  "Class 11 (Commerce)",
  "Class 11 (Arts)",
  "Class 12 (Science)",
  "Class 12 (Commerce)",
  "Class 12 (Arts)",
];
