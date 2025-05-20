function handleformSubmit(event) {
console.log("form submited");
event.preventDefault();
}
export default function Form() {
return (
    <form onClick={handleformSubmit}>
       <input placeholder="write some thing" ></input>
       
       <button type="submit" >Submit</button>
    </form>
);
}