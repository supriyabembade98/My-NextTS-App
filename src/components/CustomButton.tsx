import { customButtonProps } from '@/types';
import React from 'react'

function CustomButton(props: customButtonProps) {
    return (
        <div>
            <button
                disabled={false}
                type={props.btnType || "button"}
                className={`custome-btn ${props.containerStyles}`}
                onClick={props.handleClick}
            >
                <span className={`flex-1`}>
                {props.title}
                </span>
            </button>
        </div>
    )
}

export default CustomButton;