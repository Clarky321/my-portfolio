import Link from "next/link";
import { FaGithub, FaTelegram, FaYoutube } from "react-icons/fa";

const social = [
    { icon: <FaGithub />, path: "https://github.com/Clarky321" },
    { icon: <FaTelegram />, path: "" },
    { icon: <FaYoutube />, path: "" },
];

export default function Socail({ containerStyle, iconStyle }) {
    return (
        <div className={`flex space-x-4 ${containerStyle}`}>
            {social.map(({ icon, path }, index) => (
                <Link
                    key={index}
                    href={path}
                    className={`${iconStyle} text-xl`}
                >
                    {icon}
                </Link>
            ))}
        </div>
    );
}