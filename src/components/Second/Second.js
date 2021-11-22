import React, { useEffect, useState } from 'react';

function Second() {
    const [isCheckBox, setIsCheckBox] = useState(true);
    const [range, setRange] = useState(256 * 7 - 1);
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
    const [backGround, setBackGround] = useState({ backgroundColor: `rgb(${r},${g},${b})` })
    const [styleFont, setStyleFont] = useState({ color: `rgb(255,255,255)` });

    const styleApp = { ...backGround, ...styleFont };

    const maxValue = 256 * 7 - 1;

    const changeButton = () => {
        setIsCheckBox((isCheckBox) => !isCheckBox);
    }

    const changeRange = (e) => {
        setRange(e.target.value);
    }


    useEffect(() => {
        if (range < 256) {
            setB(range);
        } else if (range < 256 * 2) {
            setG(range % 256);
            setB(256 - range % 256);
        } else if (range < 256 * 3) {
            setG(255);
            setB(range % 256);
        } else if (range < 256 * 4) {
            setR(range % 256);
            setG(256 - range % 256);
            setB(256 - range % 256);
        } else if (range < 256 * 5) {
            setR(255);
            setG(0);
            setB(range % 256);
        } else if (range < 256 * 6) {
            setR(255);
            setG(range % 256);
            setB(256 - range % 256);
        } else if (range < 256 * 7) {
            setR(255);
            setG(255);
            setB(range % 256);
        }
        if (isCheckBox) {
            setBackGround({ backgroundColor: `rgb(${r},${g},${b})` });
        } else {
            setStyleFont({ color: `rgb(${r},${g},${b})` });
        }
    }, [range])

    return (
        <div className="container">
            <div className="form-check form-switch second">
                <span className="second__check_text">Text</span>
                {isCheckBox ?
                    <input className="form-check-input second__check"
                        value={backGround}
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        onChange={changeButton}
                        checked
                    />
                    :
                    <input className="form-check-input second__check"
                        value={styleFont}
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        onChange={changeButton}
                    />
                }
                <span className="second__check_text">Background</span>
            </div>
            <input type="range"
                value={range}
                className="form-range"
                min="0" max={maxValue}
                id="customRange"
                onChange={changeRange} />
            <div className="second__text" style={styleApp}>In eu luctus metus. Mauris finibus ipsum in sapien maximus, vel vestibulum leo sodales. Vivamus sit amet libero ipsum. Donec fermentum tempus arcu, et gravida sem tincidunt non. Pellentesque et condimentum urna. Donec et vestibulum dui. Curabitur sit amet orci consequat, iaculis purus eu, vulputate quam. Nulla nec orci ut lacus fermentum faucibus id et orci. Nam hendrerit pulvinar quam. Curabitur congue ullamcorper mi, vel ornare diam blandit id. Pellentesque aliquam libero nibh, a euismod mauris iaculis facilisis. Mauris blandit, nunc quis pretium pretium, velit eros tempus nibh, at maximus neque libero vel erat.</div>
        </div>
    );
}

export default Second;