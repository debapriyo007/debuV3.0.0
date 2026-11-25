import React, { Component } from 'react';

export class Firefox extends Component {
    constructor() {
        super();
        this.home_url = 'https://www.google.com/webhp?igu=1';
        this.state = {
            url: 'https://www.google.com/webhp?igu=1',
            display_url: "https://www.google.com",
        }
    }

    componentDidMount() {
        let lastVisitedUrl = localStorage.getItem("firefox-url") || localStorage.getItem("chrome-url");
        let lastDisplayedUrl = localStorage.getItem("firefox-display-url") || localStorage.getItem("chrome-display-url");
        if (lastVisitedUrl) {
            this.setState({ url: lastVisitedUrl, display_url: lastDisplayedUrl || lastVisitedUrl }, this.refreshFirefox);
        }
    }

    storeVisitedUrl = (url, display_url) => {
        localStorage.setItem("firefox-url", url);
        localStorage.setItem("firefox-display-url", display_url);
    }

    refreshFirefox = () => {
        const screen = document.getElementById("firefox-screen");
        if (screen) {
            screen.src += '';
        }
    }

    goToHome = () => {
        this.setState({ url: this.home_url, display_url: "https://www.google.com" });
        this.refreshFirefox();
    }

    goToUrl = (targetUrl, displayUrl) => {
        this.setState({ url: targetUrl, display_url: displayUrl || targetUrl });
        this.storeVisitedUrl(targetUrl, displayUrl || targetUrl);
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let url = e.target.value;
            let display_url = "";

            url = url.trim();
            if (url.length === 0) return;

            if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
                url = "https://" + url;
            }

            url = encodeURI(url);
            display_url = url;
            if (url.includes("google.com")) {
                url = 'https://www.google.com/webhp?igu=1';
                display_url = "https://www.google.com";
            }
            this.setState({ url, display_url: url });
            this.storeVisitedUrl(url, display_url);
            document.getElementById("firefox-url-bar")?.blur();
        }
    }

    handleDisplayUrl = (e) => {
        this.setState({ display_url: e.target.value });
    }

    displayUrlBar = () => {
        return (
            <div className="w-full flex flex-col bg-[#2B2A33] text-white text-xs select-none border-b border-black border-opacity-40">
                {/* Firefox Tab Bar */}
                <div className="flex items-center justify-between px-2 pt-1.5 pb-1 bg-[#1C1B22]">
                    <div className="flex items-center gap-1.5 bg-[#2B2A33] px-3 py-1 rounded-t-md text-xs font-medium text-gray-200 border-t border-x border-[#383740] max-w-xs truncate shadow-sm">
                        <img className="w-3.5 h-3.5" src="./themes/Yaru/apps/firefox.svg" alt="Firefox" />
                        <span className="truncate">{this.state.display_url || "New Tab"}</span>
                    </div>
                </div>

                {/* Navigation and Address Bar */}
                <div className="w-full py-1.5 px-2 flex justify-start items-center gap-2">
                    <button
                        onClick={this.refreshFirefox}
                        title="Reload page"
                        className="p-1 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                        <img className="w-4 h-4" src="./themes/Yaru/status/chrome_refresh.svg" alt="Reload" />
                    </button>
                    <button
                        onClick={this.goToHome}
                        title="Firefox Home"
                        className="p-1 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                        <img className="w-4 h-4" src="./themes/Yaru/status/chrome_home.svg" alt="Home" />
                    </button>
                    <div className="flex-grow flex items-center bg-[#1C1B22] border border-[#42414D] rounded-md px-2.5 py-1 focus-within:border-[#0df] transition-colors">
                        <svg className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input
                            onKeyDown={this.checkKey}
                            onChange={this.handleDisplayUrl}
                            value={this.state.display_url}
                            id="firefox-url-bar"
                            className="outline-none bg-transparent w-full text-gray-200 text-xs placeholder-gray-500"
                            type="url"
                            spellCheck={false}
                            autoComplete="off"
                            placeholder="Search with Google or enter address"
                        />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                {this.displayUrlBar()}
                <iframe
                    src={this.state.url}
                    className="flex-grow w-full border-0 bg-white"
                    id="firefox-screen"
                    title="Mozilla Firefox"
                ></iframe>
            </div>
        )
    }
}

export default Firefox;

export const displayFirefox = () => {
    return <Firefox />;
};
