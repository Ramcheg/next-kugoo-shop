"use client";
import { ComponentProps } from "react";
import InputMask from "react-input-mask";

export function InputPhone({ ...props }: ComponentProps<"input">): JSX.Element {
    return (
        <InputMask
            className=" w-full  2xl:w-2/3 px-6 rounded flex-1 py-2 lg:py-4 border border-solid border-gray-editible  text-gray-dark 2xl:text-lg  placeholder:gray-dark placeholder:2xl:text-lg"
            mask="+380 (099) 99-99-999"
            placeholder="+380 (0__) __-__-___"
            name="phone"
            type="tel"
            required
            {...props}
        />
    );
}
