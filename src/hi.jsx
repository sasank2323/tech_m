
function Hi()
{
    let h="sasank";
    return(
        <div> 
            <h1>hi {h.toUpperCase()}</h1>
            <h2>{2*2}</h2>
            <p>hello world</p>
        </div>
    );
}

function Hello()
{
    return(
        <div>
            <h1>sasank</h1>
            <p>hello world</p>
        </div>
    );
}

export {Hello,Hi};