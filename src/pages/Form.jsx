import { signUpMobile, signUpDesktop, list } from "../assets";
import { points } from "../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";

const Form = () => {
  const [submit, setSubmit] = useState(false);

  const [value, setValue] = useState("");

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (submit === true) {
      if (value.includes(" ")) {
        setError(true);
      } else if (value.includes("@")) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
    if (value.includes(" ")) {
      setError(true);
    } else if (value.includes("@")) {
      sessionStorage.setItem("email", value);
      navigate("./success");
    } else {
      setError(true);
    }
  }

  return (
    <div className="w-full min-h-screen md:min-h-0 bg-news-white max-w-[800px] mx-auto md:rounded-2xl md:h-[75vh] md:mx-10 md:max-h-[550px] flex flex-col items-center md:flex-row-reverse shadow-xl">
      <div className="w-full md:flex-[0.8] md:flex md:justify-end md:h-full md:rounded-md md:p-4">
        <img
          className="w-full md:hidden max-h-[288px] object-cover rounded-b-xl"
          src={signUpMobile}
          alt=""
        />
        <img
          className="h-full w-full object-cover hidden md:block rounded-lg"
          src={signUpDesktop}
          alt=""
        />
      </div>
      <div className="md:flex-1 p-6 md:px-10 flex flex-col gap-6">
        <h1 className="text-[38px] md:text-[48px] text-news-darkgray font-bold">
          Stay updated!
        </h1>
        <p className="text-news-darkgray text-body">
          Join 60.000+ product managers receiving monthly updates on:
        </p>
        <div className="flex flex-col gap-4 text-body text-news-darkgray">
          {points.map((item) => (
            <div key={item.id} className="flex gap-3">
              <img className="w-[24px] h-[24px] object-contain" src={list} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="font-bold text-[12px] text-news-darkgray"
            >
              Email address
            </label>
            <p
              className={`${
                error ? "" : "hidden"
              } text-primary font-bold text-[12px]`}
            >
              {value === ""
                ? "Please enter your email"
                : "Valid email required"}
            </p>
          </div>
          <input
            type="text"
            name="email"
            value={value}
            onChange={handleChange}
            placeholder="email@company.com"
            className={`${
              error
                ? "border-primary bg-primary-opaque text-primary"
                : "border-gray-400 focus:border-news-darkgray hover:border-news-darkgray"
            } border-[2px] rounded-lg border-solid px-4 py-3 mt-1 outline-none`}
          />
          {/* <button
            type="submit"
            className={`${
              error
                ? "bg-gray-400 cursor-default"
                : "hover:bg-gradient-to-r hover:from-primary hover:to-primary-friend hover:shadow-lg hover:shadow-primary-shadow"
            } transition-colors px-4 py-3 bg-news-darkgray font-bold text-news-white mt-4 rounded-lg`}
          >
            Subscribe to monthly newsletter
          </button> */}
          <Button
            type={"submit"}
            text={"Subscribe to monthly newsletter"}
            error={error}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
