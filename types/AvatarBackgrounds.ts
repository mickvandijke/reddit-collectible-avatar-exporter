import avatarBackgroundsJson from '~/assets/data/avatar-backgrounds.json';

export class avatarBackground {
    name: string
    path: string

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}

export function getAvatarBackgrounds(): avatarBackground[] {
    let avatarBackgrounds: Array<avatarBackground> = [
        new avatarBackground("Transparent", "/images/others/Transparent.png"),
        new avatarBackground("Black", "/images/others/Black.png"),
        new avatarBackground("Aww Friends", "/images/nfts/AwwFriends.png"),
        new avatarBackground("Drip Squad", "/images/nfts/DripSquad.png"),
        new avatarBackground("Meme Team", "/images/nfts/MemeTeam.png"),
        new avatarBackground("The Singularity", "/images/nfts/TheSingularity.png"),
    ]

    for (let entry of avatarBackgroundsJson) {
        avatarBackgrounds.push(new avatarBackground(entry.title, entry.backgroundImage));
    }

    return avatarBackgrounds;
}
