export class Background {
    name: string
    path: string

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}

export const Backgrounds: Array<Background> = [
    new Background("Transparent", "/images/others/Transparent.png"),
    new Background("Black", "/images/others/Black.png"),
    new Background("Rainbow Foustling", "/images/nfts/RainbowFoustling.png"),
    new Background("The Eyes", "/images/nfts/TheEyes.png"),
    new Background("Julia Jewels", "/images/nfts/JuliaJewels.png"),
];
