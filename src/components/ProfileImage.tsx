import Image from "next/image";

type ProfileImageProps = {
    src?: string | null
    clasName?: string
}

export function ProfileImage({src, classname = ""}: ProfileImageProps) {
    return <div className={`relative h-12 w-12 overflow-hidden rounded-full ${classname}`}>
        {src == null ? null : <Image fill src={src} alt="Profile image" quality={100}></Image>}
    </div>
}
