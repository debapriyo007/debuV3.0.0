import React, { Component } from 'react'

export class UbuntuApp extends Component {
    lastClickTime = 0;

    openApp = () => {
        const now = Date.now();
        if (now - this.lastClickTime < 350) return;
        this.lastClickTime = now;

        if (this.props.isExternalApp && this.props.url) {
            window.open(this.props.url, "_blank");
        } else {
            this.props.openApp(this.props.id);
        }
    }

    render() {
        return (
            <div
                className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white relative cursor-pointer"
                id={"app-" + this.props.id}
                onDoubleClick={this.openApp}
                onClick={this.openApp}
                tabIndex={0}
            >
                <div className="relative">
                    <img width="40px" height="40px" className="mb-1 w-10 pointer-events-none" src={this.props.icon} alt={"Ubuntu " + this.props.name} />
                </div>
                <span className="truncate w-full pointer-events-none">{this.props.name}</span>
            </div>
        )
    }
}

export default UbuntuApp
