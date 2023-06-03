import { success } from "../assets";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const email = sessionStorage.getItem("email");

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="mx-10 min-h-full max-w-[420px] md:min-h-0 bg-news-white rounded-2xl shadow-xl flex flex-col p-10 justify-between">
      <img
        src={success}
        alt="succes-icon"
        className="w-[40px] object-contain"
      />
      <h1 className="font-bold text-[28px] sm:text-[38px] md:text-[42px] text-news-darkgray leading-none py-6">
        Thanks for subscribing!
      </h1>
      <p className="text-news-darkgray pb-4">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscribtion.
      </p>
      <Button
        type={"button"}
        text={"Dismiss message"}
        error={false}
        onclick={handleClick}
      />
    </div>
  );
};

export default Success;
