import avatarBackgroundsJson from '~/assets/data/avatar-backgrounds.json';

export class AvatarBackground {
    name: string
    path: string

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}

export function getAvatarBackgrounds(): AvatarBackground[] {
    let avatarBackgrounds: Array<AvatarBackground> = [
        new AvatarBackground("Transparent", "/images/others/Transparent.png"),
        new AvatarBackground("Black", "/images/others/Black.png"),
        new AvatarBackground("Aww Friends", "/images/nfts/AwwFriends.png"),
        new AvatarBackground("Drip Squad", "/images/nfts/DripSquad.png"),
        new AvatarBackground("Meme Team", "/images/nfts/MemeTeam.png"),
        new AvatarBackground("The Singularity", "/images/nfts/TheSingularity.png"),
    ]

    for (let entry of avatarBackgroundsJson) {
        avatarBackgrounds.push(new AvatarBackground(entry.title, entry.backgroundImage));
    }

    return avatarBackgrounds;
}
