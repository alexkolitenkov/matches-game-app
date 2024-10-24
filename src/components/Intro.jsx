import '../assets/css/intro.css'
export const Intro = () => {
    return (
        <>
            <div className="introSection">
                <h1 className="introductionTitle">Introduction</h1>
                <p>
                    Two people are playing a game. From the pile of 25 matches,
                    each player takes either 1, 2 or 3 matches on each turn.
                    The game is over once all matches are taken.
                    Whoever has the even amount of matches wins.
                </p>
            </div>
        </>
    )
}