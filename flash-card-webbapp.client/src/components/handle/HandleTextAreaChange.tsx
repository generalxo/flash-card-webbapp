import React from 'react';
export type HandleTextAreaChange = <T extends object>(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    data: T,
    setData: React.Dispatch<React.SetStateAction<T>>
) => void;

export const handleTextAreaChange: HandleTextAreaChange = (e, data, setData) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};