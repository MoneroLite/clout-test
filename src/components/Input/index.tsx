import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./input.scss";
import attach from "../../assets/icons/attach.svg";
import send from "../../assets/icons/send.svg";

export const Input = () => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const ref: MutableRefObject<any> = useRef();

  const handleInput = (e: any) => {
    if (isEdited === false) {
      setIsEdited(true);
      ref.current.textContent("");
    }
    ref.current.textContent(e);
  };

  useEffect(() => {
    ref.current.textContent = "Введите сообщение";
  }, []);
  return (
    <div id="sendinput" className="input">
      <div
        ref={ref}
        onChange={(e) => {
          handleInput(e);
        }}
        contentEditable={true}
        defaultValue={"Введите сообщение"}
        onFocus={() => {
          ref.current.textContent = "";
        }}
        onBlur={() => {
          if (ref.current.textContent === "")
            ref.current.textContent = "Введите сообщение";
        }}
        className="input__field"
      ></div>
      <div className="control__buttons">
        <img src={attach} alt="attach" onClick={() => {}} />
        <img src={send} alt="send" onClick={() => {}} />
      </div>
    </div>
  );
};
