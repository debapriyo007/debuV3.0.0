import React, { useState } from 'react';

export default function GitHubApp() {
    const [activeTab, setActiveTab] = useState("overview");

    const repos = [
        {
            name: "apply-drive-java-fullstack",
            description: "Full-stack job portal with recruiter and candidate modules using Spring Boot, React.js, and MySQL. Features Spring Security, JWT authentication, and role-based authorization.",
            language: "Java",
            langColor: "#b07219",
            stars: 12,
            forks: 3,
            updated: "Updated Jun 2026",
            url: "https://github.com/debapriyo007/apply-drive-java-fullstack"
        },
        {
            name: "prescriptio-vault",
            description: "Secure prescription management application with Clerk authentication, protected routes, and responsive UI built with React.js and Tailwind CSS.",
            language: "JavaScript",
            langColor: "#f1e05a",
            stars: 8,
            forks: 2,
            updated: "Updated Oct 2025",
            url: "https://github.com/debapriyo007/prescriptio-vault"
        },
        {
            name: "link-hub-v1.0.0",
            description: "Security-focused cloud bookmark vault built to organize, search, and launch personal web links across desktop and mobile without leaking private categories.",
            language: "JavaScript",
            langColor: "#f1e05a",
            stars: 15,
            forks: 4,
            updated: "Updated 2025",
            url: "https://github.com/debapriyo007/link-hub-v1.0.0"
        },
        {
            name: "github-searcher",
            description: "GitHub repository and developer search application using the GitHub REST API. Implements real-time filtering, stars, forks, and language detection.",
            language: "JavaScript",
            langColor: "#f1e05a",
            stars: 6,
            forks: 1,
            updated: "Updated May 2025",
            url: "https://github.com/debapriyo007/github-searcher"
        },
        {
            name: "sales-savvy-fullstack",
            description: "Full-stack sales management application using Spring Boot, React.js, and MySQL. REST APIs, CRUD operations, and MySQL integration via JPA/Hibernate.",
            language: "Java",
            langColor: "#b07219",
            stars: 9,
            forks: 2,
            updated: "Updated 2025",
            url: "https://github.com/debapriyo007"
        },
        {
            name: "bytesblogs-fullstack-java",
            description: "Secure full-stack developer blogging platform built with Spring Boot, Spring Security, OAuth2, Docker, and MySQL.",
            language: "Java",
            langColor: "#b07219",
            stars: 11,
            forks: 3,
            updated: "Updated 2025",
            url: "https://github.com/debapriyo007"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col bg-[#0d1117] text-[#c9d1d9] select-none overflow-hidden font-sans">
            {/* Header / Address Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#161b22] border-b border-[#30363d] text-xs">
                <div className="flex items-center gap-2">
                    <img src="./themes/Yaru/apps/github.png" alt="GitHub" className="w-4 h-4 invert opacity-90" />
                    <span className="font-semibold text-white">GitHub</span>
                </div>
                <div className="flex items-center bg-[#0d1117] px-2.5 py-0.5 rounded border border-[#30363d] text-gray-300 text-xs w-1/2 max-w-sm truncate">
                    <span className="text-gray-500 mr-1.5 text-[11px]">https://</span>
                    <span className="truncate">github.com/debapriyo007</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <a
                        href="https://github.com/debapriyo007"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-2.5 py-1 rounded bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] text-[11px] font-medium"
                    >
                        View External
                    </a>
                </div>
            </div>

            {/* Profile Bar */}
            <div className="px-6 py-4 border-b border-[#30363d] bg-[#161b22] flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-[#30363d]">
                        <img src="./images/logos/debu_avatar.jpg" alt="Debapriya Das" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-white flex items-center gap-2">
                            Debapriya Das
                            <span className="text-xs font-normal text-gray-400 bg-[#21262d] px-2 py-0.5 rounded-full border border-[#30363d]">debapriyo007</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">Software Developer &bull; Full Stack Java Engineer</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Kolkata, India &bull; Bengal Institute of Technology</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`px-3 py-1 rounded-md transition-colors ${activeTab === "overview" ? "bg-[#1f6feb] text-white font-medium" : "text-gray-400 hover:text-white"}`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("repositories")}
                        className={`px-3 py-1 rounded-md transition-colors ${activeTab === "repositories" ? "bg-[#1f6feb] text-white font-medium" : "text-gray-400 hover:text-white"}`}
                    >
                        Repositories ({repos.length})
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow overflow-y-auto p-6 bg-[#0d1117]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-white">
                            {activeTab === "overview" ? "Pinned Repositories" : "All Repositories"}
                        </span>
                        <span className="text-xs text-gray-500">Public Projects</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {repos.map((repo, idx) => (
                            <div
                                key={idx}
                                className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg flex flex-col justify-between hover:border-[#8b949e] transition-colors"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <a
                                            href={repo.url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-sm font-semibold text-[#58a6ff] hover:underline"
                                        >
                                            {repo.name}
                                        </a>
                                        <span className="text-[10px] text-gray-400 border border-[#30363d] px-1.5 py-0.5 rounded-full">
                                            Public
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                                        {repo.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-[#21262d]">
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full inline-block"
                                            style={{ backgroundColor: repo.langColor }}
                                        ></span>
                                        <span>{repo.language}</span>
                                    </div>
                                    <div>Stars: {repo.stars}</div>
                                    <div>Forks: {repo.forks}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const displayGitHub = () => {
    return <GitHubApp />;
};
