import './AntSwitchDarkMode.css'

const AntSwitchDarkMode = () => {
  return (
    <label className="ui-switch">
        <input type="checkbox"/>
        <div className="slider">
            <div className="circle"></div>
        </div>
    </label>
  )
}
export default AntSwitchDarkMode