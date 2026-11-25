import React, { useState, useEffect } from 'react';

const INITIAL_LINKS = [
    {
        id: "link-1",
        title: "LinkHub Web App",
        url: "https://linkhub-v1.netlify.app",
        category: "Cloud & DevOps",
        tag: "Production",
        desc: "Live production deployment of LinkHub personal cloud bookmark vault on Netlify.",
        starred: true,
    },
    {
        id: "link-2",
        title: "Apply Drive Portal",
        url: "https://github.com/debapriyo007/apply-drive-java-fullstack",
        category: "Development",
        tag: "Full Stack",
        desc: "Full-stack job portal built with Spring Boot, Spring Security, JWT, React, and MySQL.",
        starred: true,
    },
    {
        id: "link-3",
        title: "GitHub - debapriyo007",
        url: "https://github.com/debapriyo007",
        category: "Development",
        tag: "Source Code",
        desc: "Official GitHub profile, open-source repositories, and code contributions.",
        starred: true,
    },
    {
        id: "link-4",
        title: "Spring Initializr",
        url: "https://start.spring.io",
        category: "Development",
        tag: "Backend",
        desc: "Bootstrap Spring Boot applications with starter dependencies, Gradle, and Maven.",
        starred: false,
    },
    {
        id: "link-5",
        title: "React Documentation",
        url: "https://react.dev",
        category: "Development",
        tag: "Frontend",
        desc: "Official modern React documentation covering components, state, hooks, and architecture.",
        starred: false,
    },
    {
        id: "link-6",
        title: "Prescriptio Vault",
        url: "https://github.com/debapriyo007/prescriptio-vault",
        category: "Development",
        tag: "React & Clerk",
        desc: "Secure prescription management application with Clerk authentication and Tailwind CSS.",
        starred: false,
    },
    {
        id: "link-7",
        title: "MySQL Documentation",
        url: "https://dev.mysql.com/doc",
        category: "Databases",
        tag: "SQL & RDBMS",
        desc: "Official reference manuals, query syntax, indexing strategies, and database optimization.",
        starred: false,
    },
    {
        id: "link-8",
        title: "Clerk Authentication",
        url: "https://clerk.com",
        category: "Databases",
        tag: "Security",
        desc: "Drop-in authentication, user management, and JWT session handling for web apps.",
        starred: false,
    },
    {
        id: "link-9",
        title: "Netlify Dashboard",
        url: "https://app.netlify.com",
        category: "Cloud & DevOps",
        tag: "Deployment",
        desc: "Global CDN, automated CI/CD builds, and edge routing management console.",
        starred: false,
    },
    {
        id: "link-10",
        title: "Tailwind CSS",
        url: "https://tailwindcss.com",
        category: "UI & Design",
        tag: "Styling",
        desc: "Utility-first CSS framework for rapid and scalable frontend interface design.",
        starred: false,
    },
    {
        id: "link-11",
        title: "LeetCode Practice",
        url: "https://leetcode.com",
        category: "Development",
        tag: "DSA & Algorithms",
        desc: "Technical problem solving, data structures, and algorithmic complexity practice.",
        starred: false,
    },
    {
        id: "link-12",
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        category: "UI & Design",
        tag: "Reference",
        desc: "Definitive standards and reference documentation for HTML5, CSS3, JavaScript, and Web APIs.",
        starred: false,
    },
];

export default function LinkHub() {
    const [links, setLinks] = useState(INITIAL_LINKS);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [copiedId, setCopiedId] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newUrl, setNewUrl] = useState("");
    const [newCategory, setNewCategory] = useState("Development");
    const [newDesc, setNewDesc] = useState("");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("linkhub_user_vault");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setLinks(parsed);
                }
            }
        } catch (e) {
            console.error("Failed to load LinkHub saved vault:", e);
        }
    }, []);

    const saveLinks = (updatedLinks) => {
        setLinks(updatedLinks);
        try {
            localStorage.setItem("linkhub_user_vault", JSON.stringify(updatedLinks));
        } catch (e) {
            console.error("Failed to persist LinkHub vault:", e);
        }
    };

    const handleCopy = (id, url) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).catch(() => {});
        }
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const toggleStar = (id) => {
        const updated = links.map((l) => (l.id === id ? { ...l, starred: !l.starred } : l));
        saveLinks(updated);
    };

    const handleAddLink = (e) => {
        e.preventDefault();
        if (!newTitle.trim() || !newUrl.trim()) return;

        let cleanUrl = newUrl.trim();
        if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
            cleanUrl = "https://" + cleanUrl;
        }

        const newEntry = {
            id: `link-${Date.now()}`,
            title: newTitle.trim(),
            url: cleanUrl,
            category: newCategory,
            tag: "Custom",
            desc: newDesc.trim() || "User-added bookmark in LinkHub vault.",
            starred: false,
        };

        const updated = [newEntry, ...links];
        saveLinks(updated);
        setNewTitle("");
        setNewUrl("");
        setNewDesc("");
        setShowAddModal(false);
    };

    const handleDelete = (id) => {
        const updated = links.filter((l) => l.id !== id);
        saveLinks(updated);
    };

    const categories = ["All", "Starred", "Development", "Cloud & DevOps", "Databases", "UI & Design"];

    const filteredLinks = links.filter((item) => {
        const matchesCat =
            activeCategory === "All"
                ? true
                : activeCategory === "Starred"
                ? item.starred
                : item.category === activeCategory;

        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
            !q ||
            item.title.toLowerCase().includes(q) ||
            item.url.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            (item.tag && item.tag.toLowerCase().includes(q));

        return matchesCat && matchesQuery;
    });

    return (
        <div className="w-full h-full flex flex-col bg-[#0B0B0E] text-white select-none overflow-hidden font-sans">
            {/* Top Header / App Bar */}
            <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-[#252529] gap-3">
                <div className="flex items-center gap-3">
                    <img src="./themes/Yaru/apps/link-hub.svg" alt="LinkHub" className="w-6 h-6 rounded" />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-sm tracking-tight text-white">LinkHub</span>
                            <span className="text-[10px] bg-[#FF9000] text-black font-extrabold px-1.5 py-0.2 rounded font-mono">
                                v1.0.0
                            </span>
                        </div>
                        <div className="text-[11px] text-gray-400">Cloud Bookmark Vault</div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex-grow max-w-md mx-2">
                    <div className="flex items-center bg-[#0B0B0E] border border-[#2c2c34] focus-within:border-[#FF9000] rounded-md px-3 py-1.5 transition-colors">
                        <svg className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search vault links, tags, descriptions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none outline-none text-xs text-gray-200 placeholder-gray-500 w-full"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-gray-500 hover:text-white text-xs ml-1"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-3 py-1.5 bg-[#FF9000] hover:bg-[#ff9e1f] text-black font-semibold text-xs rounded transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                        <span>+ Add Link</span>
                    </button>
                    <a
                        href="https://linkhub-v1.netlify.app"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-2.5 py-1.5 bg-[#1F1F24] hover:bg-[#2A2A32] text-gray-300 hover:text-white text-xs rounded border border-[#32323A] transition-colors"
                        title="Open external Netlify site"
                    >
                        Live Site
                    </a>
                </div>
            </div>

            {/* Category Filter Pills */}
            <div className="px-4 py-2 bg-[#101014] border-b border-[#202026] flex items-center gap-1.5 overflow-x-auto text-xs">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors text-xs font-medium ${
                                isActive
                                    ? "bg-[#FF9000] text-black font-semibold"
                                    : "bg-[#18181E] text-gray-400 hover:text-white hover:bg-[#22222A]"
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
                <span className="ml-auto text-[11px] text-gray-500 whitespace-nowrap">
                    {filteredLinks.length} bookmark{filteredLinks.length === 1 ? "" : "s"}
                </span>
            </div>

            {/* Main Bookmarks Grid */}
            <div className="flex-grow p-4 md:p-6 overflow-y-auto bg-[#0B0B0E]">
                {filteredLinks.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-400">
                        <img src="./themes/Yaru/apps/link-hub.svg" alt="LinkHub" className="w-12 h-12 opacity-40 mb-3" />
                        <div className="text-sm font-semibold text-gray-300">No matching bookmarks found</div>
                        <div className="text-xs text-gray-500 mt-1 max-w-sm">
                            Try searching for something else or add a new bookmark to your personal vault using the "+ Add Link" button above.
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {filteredLinks.map((item) => {
                            const isCopied = copiedId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className="bg-[#141419] border border-[#23232A] hover:border-[#383844] rounded-lg p-4 flex flex-col justify-between transition-all hover:shadow-lg group"
                                >
                                    <div>
                                        {/* Card Header */}
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <div className="flex items-center gap-2 truncate">
                                                <div className="w-7 h-7 rounded bg-[#202028] border border-[#2e2e38] flex items-center justify-center text-xs font-bold text-[#FF9000] flex-shrink-0">
                                                    {item.title.charAt(0)}
                                                </div>
                                                <div className="truncate">
                                                    <h3 className="text-sm font-semibold text-white truncate leading-tight group-hover:text-[#FF9000] transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <span className="text-[11px] text-gray-500 truncate block font-mono">
                                                        {item.url.replace(/^https?:\/\//, '')}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleStar(item.id)}
                                                title={item.starred ? "Remove Star" : "Star Bookmark"}
                                                className={`p-1 rounded text-xs transition-colors ${
                                                    item.starred ? "text-[#FF9000]" : "text-gray-600 hover:text-gray-400"
                                                }`}
                                            >
                                                {item.starred ? "★" : "☆"}
                                            </button>
                                        </div>

                                        {/* Card Description */}
                                        <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Card Footer / Actions */}
                                    <div className="pt-2 border-t border-[#1E1E24] flex items-center justify-between text-xs">
                                        <span className="text-[10px] bg-[#1C1C24] text-gray-300 border border-[#2B2B36] px-2 py-0.5 rounded font-mono">
                                            {item.tag || item.category}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => handleCopy(item.id, item.url)}
                                                className="px-2 py-1 rounded bg-[#1C1C22] hover:bg-[#282830] text-gray-300 hover:text-white text-[11px] transition-colors"
                                            >
                                                {isCopied ? "Copied" : "Copy"}
                                            </button>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="px-2.5 py-1 rounded bg-[#FF9000] bg-opacity-15 hover:bg-opacity-25 text-[#FF9000] border border-[#FF9000] border-opacity-30 text-[11px] font-medium transition-colors"
                                            >
                                                Launch
                                            </a>
                                            {item.tag === "Custom" && (
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="px-1.5 py-1 text-gray-600 hover:text-red-400 text-[11px]"
                                                    title="Delete bookmark"
                                                >
                                                    ×
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-1.5 bg-[#101014] border-t border-[#222228] flex items-center justify-between text-[11px] text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                    <span>Vault Synced: linkhub-v1.netlify.app</span>
                </div>
                <div>Debapriya Das &bull; LinkHub v1.0.0</div>
            </div>

            {/* Add Link Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#141418] border border-[#2E2E36] rounded-xl w-full max-w-md p-5 shadow-2xl text-white">
                        <div className="flex items-center justify-between border-b border-[#26262E] pb-3 mb-4">
                            <h2 className="text-sm font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FF9000]"></span>
                                Add Bookmark to LinkHub Vault
                            </h2>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="text-gray-400 hover:text-white text-base"
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleAddLink} className="space-y-3.5 text-xs">
                            <div>
                                <label className="block text-gray-400 mb-1 font-medium">Title</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Docker Hub"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full bg-[#0B0B0E] border border-[#2C2C34] focus:border-[#FF9000] rounded px-3 py-1.5 text-gray-200 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-1 font-medium">URL</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. https://hub.docker.com"
                                    value={newUrl}
                                    onChange={(e) => setNewUrl(e.target.value)}
                                    className="w-full bg-[#0B0B0E] border border-[#2C2C34] focus:border-[#FF9000] rounded px-3 py-1.5 text-gray-200 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-1 font-medium">Category</label>
                                <select
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="w-full bg-[#0B0B0E] border border-[#2C2C34] focus:border-[#FF9000] rounded px-3 py-1.5 text-gray-200 outline-none"
                                >
                                    <option value="Development">Development</option>
                                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                                    <option value="Databases">Databases</option>
                                    <option value="UI & Design">UI & Design</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-1 font-medium">Description</label>
                                <textarea
                                    rows="2"
                                    placeholder="Brief note about this link..."
                                    value={newDesc}
                                    onChange={(e) => setNewDesc(e.target.value)}
                                    className="w-full bg-[#0B0B0E] border border-[#2C2C34] focus:border-[#FF9000] rounded px-3 py-1.5 text-gray-200 outline-none resize-none"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#26262E]">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="px-3 py-1.5 rounded bg-[#1F1F24] hover:bg-[#282830] text-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-1.5 rounded bg-[#FF9000] hover:bg-[#ff9e1f] text-black font-semibold"
                                >
                                    Save Bookmark
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export const displayLinkHub = () => {
    return <LinkHub />;
};
