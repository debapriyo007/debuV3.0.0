import React from 'react'

function DefaultMenu(props) {
    return (
        <div id="default-menu" className={(props.active ? " block " : " hidden ") + " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-3 absolute z-50 text-xs font-normal shadow-lg select-none"}>
            <a rel="noreferrer noopener" href="https://github.com/debapriyo007/link-hub-v1.0.0" target="_blank" className="w-full block cursor-default py-1 px-4 hover:bg-ub-warm-grey hover:bg-opacity-20">
                Star this Project
            </a>
            <a rel="noreferrer noopener" href="https://github.com/debapriyo007/link-hub-v1.0.0/issues" target="_blank" className="w-full block cursor-default py-1 px-4 hover:bg-ub-warm-grey hover:bg-opacity-20">
                Report bugs
            </a>
            <Divider />
            <a rel="noreferrer noopener" href="https://www.linkedin.com/in/debapriya" target="_blank" className="w-full block cursor-default py-1 px-4 hover:bg-ub-warm-grey hover:bg-opacity-20">
                Follow on LinkedIn
            </a>
            <a rel="noreferrer noopener" href="https://github.com/debapriyo007" target="_blank" className="w-full block cursor-default py-1 px-4 hover:bg-ub-warm-grey hover:bg-opacity-20">
                Follow on GitHub
            </a>
            <a rel="noreferrer noopener" href="mailto:debapriya.edu.27@gmail.com" target="_blank" className="w-full block cursor-default py-1 px-4 hover:bg-ub-warm-grey hover:bg-opacity-20">
                Contact Me
            </a>
            <Divider />
            <div onClick={() => { localStorage.clear(); window.location.reload() }} className="w-full block cursor-default py-1 px-4 hover:bg-ub-warm-grey hover:bg-opacity-20 text-gray-300 hover:text-white">
                Reset Ubuntu Session
            </div>
        </div>
    )
}

function Divider() {
    return (
        <div className="flex justify-center w-full my-1">
            <div className="border-t border-gray-800 w-11/12"></div>
        </div>
    );
}

export default DefaultMenu
