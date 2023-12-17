import { useState } from "react"
import "./trends.css"
import Button from "../Buttons/button"

function Trends() {
  const [isFocus, setIsFocus] = useState(false);
  const onFocus = () => {
    setIsFocus(true);
  }
  const onBlur = () => {
    setIsFocus(false);
  }
  console.log("isFocus: ", isFocus);
  return (
    <>
      <div className="trends">
        <div className="trends-header">
          <div className={`trends-header-input bg__gray${isFocus ? ' inputFocus' : ''}`}>
            <label htmlFor="input">
              <i className="ri-search-line"></i>
            </label>
            <input onFocus={onFocus} onBlur={onBlur} type="email" placeholder="Search" id="input" />
          </div>
        </div>
        <div className="trends-subs_premium bg__gray">
          <div className="trends-title">
            <span className="">Subscribe to Premium</span>
          </div>
          <div className="">
            <span className="">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
          </div>
          <Button content="Subscribe" textColor="#fff" backgroundColor="#1d9bf0" />
        </div>
        <div className="trends-subs_premium bg__gray">
          <div className="trends-title">
            <span className="">Subscribe to Premium</span>
          </div>
          <div className="">
            <span className="">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
          </div>
          <Button content="Subscribe" textColor="#fff" backgroundColor="#1d9bf0" />
        </div>
        <div className="trends-subs_premium bg__gray">
          <div className="trends-title">
            <span className="">Subscribe to Premium</span>
          </div>
          <div className="">
            <span className="">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
          </div>
          <Button content="Subscribe" textColor="#fff" backgroundColor="#1d9bf0" />
        </div>
        <div className="trends-subs_premium bg__gray">
          <div className="trends-title">
            <span className="">Subscribe to Premium</span>
          </div>
          <div className="">
            <span className="">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
          </div>
          <Button content="Subscribe" textColor="#fff" backgroundColor="#1d9bf0" />
        </div>
        {/* <h1>Trends</h1> */}
      </div>
    </>
  )
}

export default Trends;
