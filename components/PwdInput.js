"use client";
import { Input, Progress, CircularProgress } from "@nextui-org/react";
import { useState, useMemo } from "react";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { commonPasswords } from "@/utils/passlist";
export default function PwdLabel() {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
function isCommonPassword(password, commonPasswords) {
  if (commonPasswords.includes(password)) {
    return 100.00; // If the password is in the common passwords list, return 100% immediately
  }
  let maxMatchCount = 0;
  for (const commonPassword of commonPasswords) {
    let matchCount = 0;
    for (let i = 0; i < Math.min(password.length, commonPassword.length); i++) {
      if (password[i] === commonPassword[i]) {
        matchCount++;
      }
    }
    maxMatchCount = Math.max(maxMatchCount, matchCount);
  }

  return (
    ((maxMatchCount / Math.max(password.length, 1)) * 100).toFixed(2)
  ); // return % of the filter
}
  function getColor(score) {
    if (score >= 100) {
      return "success";
    } else if (score >= 80) {
      return "secondary";
    } else if (score >= 60) {
      return "warning";
    } else if (score >= 20) {
      return "danger";
    }
  }

  const getPasswordStrength = (password) => {
    var counter = 0;
    //lowercase
    if (/(?=.*[a-z])/.test(password)) {
      counter++;
    }
    //uppercase
    if (/(?=.*[A-Z])/.test(password)) {
      counter++;
    }
    //digit
    if (/(?=.*\d)/.test(password)) {
      counter++;
    }
    //special character
    if (/(?=.*[@$!%*?&])/.test(password)) {
      counter++;
    }
    //len
    if (password.length >= 12) {
      counter++;
    }
    var totalSteps = 5;
    var score = Math.round((counter / totalSteps) * 100);

    return score;
  };
  const passwordStrength = useMemo(
    () => getPasswordStrength(password),
    [password]
  );
  const color = useMemo(() => getColor(passwordStrength), [password]);
  const commonPercentage = useMemo(
    () => isCommonPassword(password, commonPasswords),
    [password]
  );
  return (
    <>
      <div className='flex w-[65%] flex-wrap md:flex-nowrap gap-4'>
        <Input
          classNames={{
            label: [
              "text-neutral-100/90",
              "group-data-[filled-within=true]:text-neutral-300/80",
            ],
            description: ["text-neutral-300/80"],
          }}
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          size='md'
          label='Enter a password'
          variant='underlined'
          description='Add 12 charachters or more, including lowercase letters, uppercase letters, numbers and symbols to make the password really strong!'
          value={password}
          onValueChange={setPassword}
        />
        <CircularProgress
          label='Common'
          size='md'
          value={commonPercentage}
          color='success'
          formatOptions={{ style: "percent" }}
          showValueLabel={true}
        />
      </div>
      <Progress
        color={color}
        value={passwordStrength}
        className='w-[70%] p-4'
      />
      <div></div>
    </>
  );
}
