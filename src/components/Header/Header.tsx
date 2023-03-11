import HeaderText from "./HeaderText";
import BgWaveOne from "../../assets/BgWaveOne";

const Header = () => {

    // type HeaderTextObjType = {
    //     text: string,
        // icon?: string,
        // iconClass?: string
    // }

    // type HeaderTextDataType = HeaderTextObjType[];

    // const headerTextData: HeaderTextDataType = [
    //     {
    //         text: "Having a dinner party, but unsure of what to cook for your friends?",
    //         icon: "bowl-food",
    //         iconClass: "bowlFood faIcon"
    //     },
    //     {
    //         text: "Concerned about creating the PERFECT dish for your allergy-stricken guests? Looking to experiment with your culinary options?",
    //         icon: "utensils",
    //         iconClass: "utensils faIcon"
    //     },
    //     {
    //         text: "You're in the right place! Simply name a party, type in your guests' names, select their dietary restrictions, and our app will search for recipes that cater to everyone's tastes, no matter what they are!",
    //         icon: "champagne-glasses",
    //         iconClass: "champagneGlasses faIcon"
    //     },
    //     {
    //         text: "Hosting has never been as stress-free, simple, and easy, allowing you to focus on doing the things that you love!"
    //     },
    //     {
    //         text: "After all, who doesn't want some Love In a Time Of Allergies?",
    //         icon: "heart", 
    //         iconClass: "hearts faIcon"
    //     }
    // ]

    return (
        <header>
            <div className="headerContainer">
                <div className="textContainer wrapper">
                    <>
                        <h1>Love in a Time of Allergies</h1>
                        
                        <p>Having a dinner party, but unsure of what to cook for your friends?</p>
                        <p>Concerned about creating the PERFECT dish for your allergy-stricken guests? Looking to experiment with your culinary options?</p>
                        <p>You're in the right place! Simply name a party, type in your guests' names, select their dietary restrictions, and our app will search for recipes that cater to everyone's tastes, no matter what they are!</p>
                        <p>"Hosting has never been as stress-free, simple, and easy, allowing you to focus on doing the things that you love!</p>
                        <p>After all, who doesn't want some Love In a Time Of Allergies?</p>
                        {/* {
                            headerTextData.map((data, i) => {
                                <HeaderText
                                    key={i}
                                    text={data.text}
                                    icon={data.icon}
                                    iconClass={data.iconClass}
                                />
                            })
                        } */}
                    </>
                </div>
                <BgWaveOne />
            </div>
        </header>
    )
}

export default Header