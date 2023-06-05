const DropDown = ({error,...rest}) => {
    return (
      <div style={{width:"100%"}} >
      <dropdown className="input-text" type ="text"  {...rest} style={{borderColor:error? "red": "#16a085" }} />
      <p> {error && error} </p>
      </div>
    )
}
  
export default DropDown;