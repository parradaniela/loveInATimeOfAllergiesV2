import BgWaveOne from "../../assets/BgWaveOne";

const Header = () => {

    return (
        <header>
            <div className="headerContainer relContainer">
                <div className="textContainer wrapper">
                    <h1>Love in a Time of Allergies</h1>
                    <p>
                        Having a dinner party, but unsure of what to cook for your friends?
                        <span className="block">
                            Concerned about creating the PERFECT dish for your allergy-stricken guests? Looking to experiment with your culinary options?
                        </span>
                    </p>
                    <span>🍽️</span>
                    <p>
                        You're in the right place! Simply name a party, type in your guests' names, select their dietary restrictions, and this app will search for recipes that cater to everyone's tastes, no matter what they are!
                        <span className="block">
                            Hosting has never been as stress-free, simple, and easy, allowing you to focus on doing the things that you love!
                        </span>
                    </p>
                    <span>🥂</span>
                    <p>After all, who doesn't want some Love In a Time Of Allergies?</p>
                    <span>💖</span>
                </div>
                <BgWaveOne />
            </div>
        </header>
    )
}

export default Header