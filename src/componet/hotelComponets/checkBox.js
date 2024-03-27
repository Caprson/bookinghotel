
function CheckBox({amenities}){
    return(
        <div className="flex" >
            <input type="checkbox" />
            <p>{amenities}</p>
        </div>
    );
}
export default CheckBox;