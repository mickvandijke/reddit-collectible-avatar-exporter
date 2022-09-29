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
    new Background("Fishy Foustling", "/images/nfts/FishyFoustling.png"),
    new Background("The Eyes", "/images/nfts/TheEyes.png"),
    new Background("Julia Jewels", "/images/nfts/JuliaJewels.png"),
    new Background("Cheeky Beak", "/images/nfts/CheekyBeak.png"),
    new Background("Mouse au Chocolate", "/images/nfts/MouseAuChocolate.png"),
    new Background("Classic Animation", "/images/nfts/ClassicAnimation.png"),
    new Background("Cone Head", "/images/nfts/ConeHead.png"),
    new Background("Birdie", "/images/nfts/Birdie.png"),
    new Background("Silver Age Comics", "/images/nfts/SilverAgeComics.png"),
    new Background("The Singularity", "/images/nfts/TheSingularity.png"),
    new Background("Mia Flames", "/images/nfts/MiaFlames.png"),
    new Background("Bow Wow Bandits", "/images/nfts/BowWowBandits.png"),
    new Background("Knoo", "/images/nfts/Knoo.png"),
    new Background("Butterfly of Diamonds", "/images/nfts/ButterflyOfDiamonds.png"),
    new Background("Groovy", "/images/nfts/Groovy.png"),
];
