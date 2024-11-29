import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Avatars() {
    return (
        <Avatar className="w-20 h-20 md:w-20 md:h-20 border-2 rounded-full shadow-lg overflow-hidden">
            <AvatarImage
                src="/image/photos.png"
                alt="Profile picture"
                className="object-cover w-full h-full"
            />
            <AvatarFallback>СР</AvatarFallback>
        </Avatar>
    )
};