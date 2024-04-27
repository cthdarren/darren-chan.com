import React from "react";

function LandingButton({ link, name }) {
    return (
        <a href={link}>
            <button
                type="button"
                className="mr-8 text-lg border-black border rounded-md py-2 px-8"
            >
                {name}
            </button>
        </a>
    );
}
export default LandingButton;
