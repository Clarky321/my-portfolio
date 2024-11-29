import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Avatars() {
    return (
        <Avatar className="w-24 h-24 md:w-24 md:h-24 border-2 rounded-full shadow-lg overflow-hidden">
            <AvatarImage
                src="/image/photos.png"
                alt="Profile picture"
                className="object-cover w-full h-full"
            />
            <AvatarFallback>СР</AvatarFallback>
        </Avatar>
    )
};