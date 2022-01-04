import React from 'react';
import Explore from '../Explore/Explore';

const explored = [
    {
        id:1,
        name:"Acura",
        price:5000000,
        description:"Acura is the luxury and performance division of Honda Motor Company, Ltd.. The 1990 launch of the NSX, a mid-engine exotic sports car, offered a reliable and practical alternative to exotic European sports cars, and introduced Honda's VTEC variable valve timing system to the North American market. .",
        img:"https://i.ibb.co/26QWt0Q/blue-sport-sedan-parked-yard-114579-5078.webp"
        },
        {
            id:2,
            name:"Audi",
            price:4500000,
            description:"German Engineer August Horch founded the company August Horch & Cie. Motorwagenwerke AG, in 1899. Due to misunderstandings among partners, Horch left the company and formed a new company, August Horch Automobilwerke GmbH in 1909. ",
            img:"https://i.ibb.co/CHsB1mf/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows.webp"
            },
            {
                id:3,
                name:"Bentely",
                price:3800000,
                description:"Bentley Motors was founded by W.O. Bentley. The first car to bear his name pulled out of New Street Mews, London in 1919. ... Located in Crewe, England and owned by Volkswagen AG since 1998, Bentley Motors remains the definitive British luxury car company, crafting the world's most desirable high performance grand tourers.",
                img:"https://i.ibb.co/yfkSg4W/red-luxury-sedan-road-114579-5079.webp"
                },
                {
                    id:4,
                    name:"Buick",
                    price:2500000,
                    description:"Buick (/ˈbjuːɪk/) is a division of the American automobile manufacturer General Motors (GM). ... For much of its existence in the North American market, Buick has been marketed as a premium automobile brand, selling luxury vehicles positioned above GM's mainstream brands, while below the flagship luxury Cadillac division.",
                    img:"https://i.ibb.co/kMW5S1g/sporting-car-illustration-104045-995.webp"
                    },
                    {
                        id:5,
                        name:"Cadillac",
                        price:5100000,
                        description:"Cadillac was named after the great French explorer Antoine Laumet de La Mothe, Sieur de Cadillac, who founded Detroit, Michigan in 1701.                        Cadillac is one of the earliest car brands in the US. Founded in 1902, it is known for manufacturing luxury cars. However, the company was later taken over by General Motors in 1909.",
                        img:"https://i.ibb.co/1qLk5NX/white-coupe-sport-car-parking-bridge-114579-4006.webp"
                        },
                        {
                            id:6,
                            name:"Mercedes",
                            price:3900000,
                            description:"Mercedes-Benz traces its origins to Karl Benz, who created the first internal combustion engine used in a car, the Benz Patent Motorwagen, in 1886; and to the Daimler-Motoren-Gesellschaft (DMG), founded by Gottlieb Daimler. Mercedes was a brand built by DMG, who registered the name in 1902. It had originally been applied to an automobile model built by Wilhelm Maybach in 1900. The model contained a newly designed engine designated the Daimler-Mercedes.",
                            img:"https://i.ibb.co/Pr0jrwv/white-sport-car-176382-1594.webp"
                        },
                        {
                            id:7,
                            name:"Aston Martin",
                            price:800000,
                            description:"Curious how cars get their brand names? Today is your lucky day.Did you know that Aston Martin is derived from Aston Hill, where the founder lived?                            Knowing the origins of car brands is quite fascinating and helps us understand why the particular title was given. This list of car brands and their origins will give you more insight into the culture and history of these companies",
                            img:"https://as2.ftcdn.net/v2/jpg/02/97/51/89/1000_F_297518936_hvunQqvS2qSds38ziZwavFERgu9iMP8t.jpg"
                        },
                        {
                            id:8,
                            name:"BMW",
                            price:7000000,
                            description:"BMW started its operation in 1912 and was formed by the merger of three German companies.                           The acronym BMW stands for Bayerische Motoren Werke GmnH, which roughly translates to Bavarian Engine Works Company. The name harks back to the company's origin in the German state of Bavaria. It also indicates BMW's original product range of engines for various applications.",
                            img:"https://as2.ftcdn.net/v2/jpg/02/15/07/71/1000_F_215077173_wtBEj1rwQE8DiEcHmMPTeE2hmFISQIYC.jpg"
                        },
                        {
                            id:9,
                            name:"Chevrolet",
                            price:8900000,
                            description:"Chevrolet, also called Chevy, was founded in 1911 by Louis Chevrolet and William C Durant in Detroit, as the Chevrolet Motor Company. Louis Chevrolet was a Swiss race car driver and automotive engineer. Some people have speculated that when the company was founded, the name sounded foreign and exotic, adding a bit of flair and style to the brand. However, just seven years after its founding, Chevrolet became part of General Motors.",
                            img:"https://as2.ftcdn.net/v2/jpg/04/66/61/83/1000_F_466618360_7E1fiqZwcaEZNAl7iqlf0WWeJA2eTEni.jpg"
                        },
                        {
                            id:10,
                            name:"Datsun",
                            price:4900000,
                            description:"Datsun is a Japanese company associated with the production of small and affordable cars.The company began in 1911 as Kwaishinsha Jidosha Kojo, founded by M. Hashimoto. His dream was to produce cars uniquely suited to Japan. In 1914, he completed work on a small 2-cylinder 10-horsepower car, which he named  DAT, after the initial letters of the surnames of his three investors — K. Den, R. Aoyama, and M. Takeuchi.",
                            img:"https://as1.ftcdn.net/v2/jpg/03/92/71/46/1000_F_392714697_9EumunqnavwtRikpb6dK9LKYgBsZNgKN.jpg"
                        },

]         

const Explored = () => {
    return (
        <div className="text-primary text-center mt-5 mb-5">
            <h2>Explore Items</h2>
             <div className="text-primary bg-lightblue">
                 {
                     explored.map(explore => <Explore
                     key={explore.id}
                     explore={explore}
                     ></Explore>)
                 }
             </div>
        </div>
    );
};

export default Explored;