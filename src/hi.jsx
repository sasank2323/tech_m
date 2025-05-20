
function Hi({num})
{
    //{ here we can use javascript code}
    let h="sasank";
    let color=num >1000;
    return(
        <div style={{color:color?"red":"blue"}}> 
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