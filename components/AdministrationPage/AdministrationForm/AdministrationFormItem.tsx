"use client";

import { Input } from "@/components";
import { IInputArr, NameIdType } from "./AdministrationFormTypes";
import { ChangeEvent, useEffect, useState } from "react";

interface IFormItemProps extends IInputArr {
    addInArr: (arg: string, name: NameIdType) => void;
    succeess: boolean;
    setSucc: (e: boolean) => void;
}

export function AdministrationFormItem({
    name,
    nameId,
    placeholder,
    type,
    addInArr,
    select,
    succeess,
    setSucc,
}: IFormItemProps): JSX.Element {
    const [valueName, setValueName] = useState<string>("");
    useEffect(() => {
        if (succeess) {
            setValueName("");
            setSucc(false);
        }
    }, [succeess, setSucc]);

    const changeValue = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        setValueName(e.target.value);
        addInArr(e.target.value.trim(), nameId);
    };

    if (select) {
        return (
            <label>
                <div className="mb-1 text-gray-800">{name}</div>
                <select
                    className="p-[1rem] border-gray-dark text-gray-dark "
                    name={name}
                    onChange={(e) => changeValue(e)}
                    defaultValue={select[0]}
                    required
                >
                    {select.map((item, i) => {
                        return (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    }

    return (
        <label>
            <div className="mb-1 text-gray-800">{name}</div>
            <Input
                inputType={type ? "text" : "text"}
                nameInput="phone"
                placeholderInput={placeholder ? placeholder : ""}
                value={valueName}
                onChange={(e) => changeValue(e)}
                required
            />
        </label>
    );
}
