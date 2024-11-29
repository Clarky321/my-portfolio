"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { SelectValue } from "@radix-ui/react-select"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+40) 321 654 876"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "youremail@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Adress street 7"
    },
];

export default function Contact() {
    return (
        <div className="container mx-auto py-6">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#313134] rounded-xl">
                        <h3 className="text-2xl text-accent">Let`s work together</h3>
                        <p className="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis veniam placeat sunt quidem nulla similique cum odio. Cum illo dignissimos consequuntur, quisquam eaque nemo excepturi voluptas molestias debitis explicabo totam!
                        </p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Имя" />
                            <Input type="lastname" placeholder="Фамилия" />
                            <Input type="email" placeholder="Почта" />
                            <Input type="phone" placeholder="Номер телефона" />
                        </div>
                        {/* select */}
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Выберите услугу</SelectLabel>
                                    <SelectItem value="est">Web Development</SelectItem>
                                    <SelectItem value="cst">UI/UX Design</SelectItem>
                                    <SelectItem value="mst">Logo Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* textarea */}
                        <Textarea
                            className="h-[200px]"
                            placeholder="Введите ваше сообщение"
                        />
                        {/* btn */}
                        <Button>Отправить сообщение</Button>
                    </form>
                </div>
                {/* info */}

            </div>
        </div>
    )
};