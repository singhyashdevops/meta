import React, { useState } from 'react'

export default function TextUtils(props) {

    let btnStyle = { fontSize: "0.8em", width: "6em", height: "4em", margin: "2em 0.6em", backgroundColor: props.mode==="light"?"#3f51b5":"#ffbe30", color: props.mode==="light"?"white":"black"}
    let image = { backgroundImage: props.mode === "dark" ? "url(textutils-dark.jpg)" : "url(textutils-light.jpg)", height: "20em", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }
    let buttons = { fontSize: "1em", backgroundColor: props.mode === "light" ? "black" : "white", color: props.mode === "light" ? "white" : "black", border: "none", width: "5em", overFlow: "hidden" }
    let style = { textAlign: "center", fontSize: "1em" }
    let title = { textAlign: "center", color: "white", fontSize: "5em" }
    let imagePara = { color: "white", fontSize: "1em", fontFamily: 'oswald' }
    let headStyle = { fontSize: "2em", textAlign: "center", color: props.mode === "light" ? "black" : "#0070ff", padding: "0.5em 0em", fontFamily: 'oswald' }
    let paraStyle = { textAlign: "justify", fontSize: "1em", color: props.mode === "light" ? "black" : "white", padding: "0.5em 0em", fontFamily: 'oswald' }
    let factTile = { backgroundColor: props.mode === "light" ? "#00277e" : "#0070ff", overflow: "auto", padding: "2em 2em" }
    let factHead = { fontSize: "1.5em", color: props.mode === "light" ? "white" : "black", padding: "0.5em 0em" }
    let factPara = { fontSize: "1em", color: props.mode === "light" ? "#85c1ff" : "white", fontFamily: 'oswald', padding: "0.5em 0em" }


    const [text, newText] = useState("")
    const newTextForm = (e) => {
        newText(e.target.value)
    }

    const uCase = () => {
        let capital = text.toUpperCase();
        newText(capital)
    }

    const lCase = () => {
        let lower = text.toLowerCase();
        newText(lower)
    }

    const removeSpaces = () => {
        let lower = text.split(/[ ]+/);
        newText(lower.join(" "))
    }

    const cText = () => {
        let copyText = document.getElementById("formControl");
        copyText.select();
        copyText.setSelectionRange(0, 999);
        navigator.clipboard.writeText(copyText.value);
    }

    const rDefault = () => {
        newText("")
    }

    const gJokes = () => {
        let jumbler = ["What do you call advice from a cow? Beef Tips.", "Why are pediatricians always so grumpy? They have little patients.", "Why did the scarecrow win an award? Because he was outstanding in his field.", "Why did the melon jump into the lake? It wanted to be a water-melon.", "What did the duck say when it bought lipstick? “Put it on my bill.”", "What do you call a pig that does karate? A pork chop.", "What has a bed that you can’t sleep in? A river.", "Why were the teacher’s eyes crossed? She couldn’t control her pupils.", "What starts with E, ends with E, and has only 1 letter in it? An Envelope.", "How does the ocean say hello? It waves.", "What lights up a soccer stadium? A soccer match.", "What creature is smarter than a talking parrot? A spelling bee.", "Helvetica and Times New Roman walk into a bar. The bartender says, “We don’t serve your type.”", "Why wouldn’t the shrimp share his treasure? Because he was a little shellfish.", "Why should you knock on the refrigerator before opening the door? In case there is a salad dressing", "When is a door not a door? When it is ajar", "What did the fish say when he swam into a wall? Dam.", "What’s red and bad for your teeth? A brick.", "Two guys walk into a bar. The third guy ducks.", "What did the tie say to the hat? You go on ahead. I’ll hang around.", "What do you call a musician with problems? A trebled man.", "What washes up on very small beaches? Micro-waves.", "What do you call a belt with a watch on it? A waist of time.", "What did the grape do when it got stepped on? It let out a little wine.", "What does a pig put on dry skin? Oinkment.", "What do you call it when a snowman throws a tantrum? A meltdown.", "How do you open a banana? With a mon-key.", "Why do oranges wear sunscreen? So they don’t peel.", "What did the mama tomato say to the baby tomato? Catch up!", "How did the pig get to the hogspital? In a hambulance.", "Why does Humpty Dumpty love autumn? Because he had a great fall.", "What do you call a pudgy psychic? A four-chin teller.", "What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.", "How do celebrities stay cool? They have many fans.", "How much money does a pirate pay for corn? A buccaneer."]
        let manager = jumbler[Math.floor(Math.random() * jumbler.length)]
        newText(manager)
    }

    return (
        <>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active" id='picture1' style={image}>
                            <div className="carousel-caption d-md-block">
                                <h5 className='headerCaption' style={title}>TEXT UTILS</h5>
                                <p className='caption' style={imagePara}>"Welcome to Text-Utils, an Online Word Converter"</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            <div className="container" style={style}>
                <p className="form-label" style={headStyle}>ENTER YOUR TEXT TO ANALYSE</p>
                <p className="form-label" style={paraStyle}>TextUtils is built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes!</p>
                <textarea className="form-control label" value={text} onChange={newTextForm} id="formControl" rows="8" placeholder='Start Typing...'></textarea>
                <button type="button" style={btnStyle} className="btn" onClick={cText}>Copy Text</button>
                <button type="button" style={btnStyle} className="btn" onClick={uCase}>Upper Case</button>
                <button type="button" style={btnStyle} className="btn" onClick={lCase}>Lower Case</button>
                <button type="button" style={btnStyle} className="btn" onClick={removeSpaces}>Handle Spaces</button>
                <button type="button" style={btnStyle} className="btn" onClick={rDefault}>Reset</button>
                <button type="button" style={btnStyle} className="btn" onClick={gJokes}>Generate Jokes</button>
            </div >

            <div className="container">
            <p className="form-label" style={headStyle}>ENTER YOUR TEXT TO ANALYSE</p>
                <p style={paraStyle}>1. There are {text.length}  characters and {text.split(" ").length} words in the text area</p>
                <p style={paraStyle}>2. With slow speed you'll be able to read in {text.split(" ").length * 0.08} mins.</p>
                <p style={paraStyle}>3. With fast speed you'll be able to read in {text.split(" ").length * 0.010} mins.</p>
                <p style={paraStyle}>4. With normal speed you'll be able to read in {text.split(" ").length * 0.016} mins.</p>
                <p style={paraStyle}>5. With average speed you'll be able to read in {text.split(" ").length * 0.020} mins.</p>
            </div>

            <div >
                <p className="form-label" style={headStyle}>AMAZING FACTS ABOUT WORDS</p>
                <div style={factTile}>
                    <p style={factHead} className='container'>1. An infinity sign is called a "lemniscate."</p>
                    <p style={factPara} className='container'>The term refers to a plane curve in which two loops meet at a central point, creating what we might call a sideways figure-eight. As Merriam-Webster explains, it's derived from the Latin word for "with hanging ribbons."</p>
                    <p style={factHead} className='container'>2. The longest English word is nearly 190,000 letters.</p>
                    <p style={factPara} className='container'>That would be the chemical name of Titin, the largest known protein. It begins, "Methionyl​threonyl​threonyl​glutaminyl​alanyl​prolyl​threonyl​phenyl​alanyl​threonyl​glutaminyl​prolyl​leucyl​glutaminyl​seryl​valyl​valyl​valyl​leucyl​glutamyl​glycyl​seryl​threonyl​alanyl​threonyl​phenyl​alanyl​glutamyl​alanyl​histidyl​isoleucyl​seryl​glycyl​phenyl​alanyl​prolyl​valyl​prolyl​glutamyl​valyl​seryl​tryptophyl​phenyl​alanyl​arginyl​aspartyl​glycyl​glutaminyl​valyl​isoleucyl​seryl​threonyl​seryl​threonyl​leucyl​pro" and goes on for tens of thousands of letters.</p>
                    <p style={factHead} className='container'>3. The longest word found in a major dictionary is 45 letters long.</p>
                    <p style={factPara} className='container'>The word, pneumonoultramicroscopicsilicovolcanoconiosis, technically refers to a type of lung disease caused by silica dust. But according to Lexico, it was actually coined in the 1930s by Everett M. Smith, the president of the National Puzzlers League, for the express purpose of becoming the longest word in the English language, so it's a bit of a cheat.</p>
                    <p style={factHead} className='container'>4. The word "bankrupt" comes from the Italian term for "broken bench."</p>
                    <p style={factPara} className='container'>According to the Online Etymology Dictionary, the word "bankrupt" grew out of an Italian phrase that literally refers to breaking something—not just the bank. That Italian phrase is banca rotta, meaning "broken bench," and it refers to an old custom that involved literally breaking the bench of money dealers who ran out of funds.</p>
                </div>

            </div>
            <div className="container btn-class" style={style}>
                <p htmlFor="examplehtmlformControlTextarea1 " className="form-label" style={headStyle}>LANGUAGE OF COMPUTER</p>
                <p htmlFor="examplehtmlformControlTextarea1 " className="form-label" style={paraStyle}>This is an index to notable programming languages, in current or historical use. Dialects of BASIC, esoteric programming languages, and markup languages are not included. A programming language does not need to be imperative or Turing-complete, but must be executable and so does not include markup languages such as HTML or XML, but does include domain-specific languages such as SQL and its dialects.</p>
                <a href='https://www.w3schools.com/c/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">C</button></a>
                <a href='https://www.w3schools.com/js/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">JAVASCRIPT</button></a>
                <a href='https://www.w3schools.com/cs/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">C#</button></a>
                <a href='https://www.w3schools.com/java/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">JAVA</button></a>
                <a href='https://www.w3schools.com/typescript/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">TYPESCRIPT</button></a>
                <a href='https://www.w3schools.com/html/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">HTML</button></a>
                <a href='https://www.w3schools.com/kotlin/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">KOTLIN</button></a>
                <a href='https://www.w3schools.com/django/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">DJANGO</button></a>
                <a href='https://www.w3schools.com/sass/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">SASS</button></a>
                <a href='https://www.w3schools.com/cpp/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">C++</button></a>
                <a href='https://www.w3schools.com/go/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">GO</button></a>
                <a href='https://www.w3schools.com/sql/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">SQL</button></a>
                <a href='https://www.w3schools.com/python/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">PYTHON</button></a>
                <a href='https://www.w3schools.com/php/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">PHP</button></a>
                <a href='https://www.w3schools.com/php/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">JQUERY</button></a>
                <a href='https://www.w3schools.com/python/pandas/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">PANDAS</button></a>
                <a href='https://www.w3schools.com/xml/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">XML</button></a>
                <a href='https://www.w3schools.com/aws/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">AWS</button></a>
                <a href='https://www.w3schools.com/vue/index.php'><button type="button" style={buttons} className="btn mx-1 my-2">VUE</button></a>
                <a href='https://www.w3schools.com/asp/default.asp'><button type="button" style={buttons} className="btn mx-1 my-2">ASP</button></a>
            </div>
        </>
    )
}
