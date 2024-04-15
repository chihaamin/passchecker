"use client"
import { useState } from "react";
import { Button, Snippet } from "@nextui-org/react";

const PassGenBtn = () => {
  const [generated, setGenerated] = useState("");
  function generateStrongPassword() {
          const minLength = 12;
          const maxLength = 25;
          const passwordLength =
            Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

          const regex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&*()_\\-+=<>?/.,;:|~`;{}\\[\\]])[a-zA-Z\\d@#$%^&*()_\\-+=<>?/.,;:|~`;{}\\[\\] ]{" +
              passwordLength +
              ",}$"
          );

          let password = "";

          do {
            password = "";
            const charset =
              "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_ -+=<>?/.,;:|~`;{}[]";
            for (let i = 0; i < passwordLength; i++) {
              const randomIndex = Math.floor(Math.random() * charset.length);
              password += charset[randomIndex];
            }
          } while (!regex.test(password));

    setGenerated(password);
  }

  return (
    <div className='flex  justify-center gap-4 w-[70%]'>
      <div className={`w-full${generated ? "hidden" : ""}`}></div>
      <Snippet
        hideSymbol
        className={`w-full ${generated ? "" : "hidden"}`}
        hideCopyButton={generated ? false : true}
      >
        {generated}
      </Snippet>
      <Button variant='ghost' onPress={generateStrongPassword}>
        Generate
      </Button>
    </div>
  );
};

export default GenPassBtn;
