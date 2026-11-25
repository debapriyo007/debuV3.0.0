import React, { useState } from 'react';

const FILE_SYSTEM = {
    "/home/debu": {
        name: "Home",
        folders: [
            { id: "docs", name: "Documents", path: "/home/debu/Documents", icon: "folder", items: 4 },
            { id: "projects", name: "Projects", path: "/home/debu/Projects", icon: "folder", items: 5 },
            { id: "downloads", name: "Downloads", path: "/home/debu/Downloads", icon: "folder", items: 3 },
            { id: "pictures", name: "Pictures", path: "/home/debu/Pictures", icon: "folder", items: 4 },
            { id: "music", name: "Music", path: "/home/debu/Music", icon: "folder", items: 2 },
        ],
        files: [
            { id: "f1", name: "debapriya_das_resume.pdf", size: "115.8 KB", type: "pdf", modified: "Nov 24, 2026", path: "./files/debapriya_das_resume.pdf" },
            { id: "f2", name: "README.md", size: "2.4 KB", type: "text", modified: "Nov 24, 2026", content: "# Debapriya Das Portfolio\nFull Stack Java Engineer | Spring Boot, React, MySQL\n\n- Phone: +91-6295672418\n- Email: debapriya.edu.27@gmail.com\n- GitHub: debapriyo007\n- LinkedIn: linkedin.com/in/debapriya\n\nProjects:\n1. Apply Drive (Spring Boot, React, MySQL, JWT)\n2. Prescriptio Vault (React, Clerk, Tailwind)\n3. GitHub Searcher (React, GitHub REST API)\n4. Sales Savvy (Spring Boot, React, JPA)\n5. LinkHub (React, Netlify)" },
            { id: "f3", name: "skills_summary.txt", size: "1.2 KB", type: "text", modified: "Nov 23, 2026", content: "Core Stack:\n- Java, JavaScript, SQL\n- Spring Boot, Spring Security, JWT, JPA/Hibernate\n- React.js, Tailwind CSS, HTML5, CSS3\n- MySQL, Git, VS Code, IntelliJ IDEA\n- OOP, DSA, DBMS" }
        ]
    },
    "/home/debu/Documents": {
        name: "Documents",
        folders: [],
        files: [
            { id: "doc1", name: "debapriya_das_resume.pdf", size: "115.8 KB", type: "pdf", modified: "Nov 24, 2026", path: "./files/debapriya_das_resume.pdf" },
            { id: "doc2", name: "Bengal_Institute_of_Technology_Degree.pdf", size: "248.5 KB", type: "pdf", modified: "Jun 15, 2025", path: "./files/debapriya_das_resume.pdf" },
            { id: "doc3", name: "KodNest_Java_FullStack_Certificate.pdf", size: "182.0 KB", type: "pdf", modified: "Jan 10, 2026", path: "./files/debapriya_das_resume.pdf" },
            { id: "doc4", name: "Celebal_Technologies_Internship_Letter.pdf", size: "195.4 KB", type: "pdf", modified: "Aug 20, 2024", path: "./files/debapriya_das_resume.pdf" }
        ]
    },
    "/home/debu/Projects": {
        name: "Projects",
        folders: [
            { id: "p1", name: "apply-drive-fullstack", path: "/home/debu/Projects/apply-drive-fullstack", icon: "folder-code", items: 6 },
            { id: "p2", name: "prescriptio-vault", path: "/home/debu/Projects/prescriptio-vault", icon: "folder-code", items: 4 },
            { id: "p3", name: "github-searcher", path: "/home/debu/Projects/github-searcher", icon: "folder-code", items: 4 },
            { id: "p4", name: "link-hub-v1.0.0", path: "/home/debu/Projects/link-hub-v1.0.0", icon: "folder-code", items: 5 },
            { id: "p5", name: "java-dsa", path: "/home/debu/Projects/java-dsa", icon: "folder-code", items: 8 }
        ],
        files: [
            { id: "pf1", name: "architecture_overview.txt", size: "3.1 KB", type: "text", modified: "Nov 20, 2026", content: "Architecture Overview:\nApply Drive: Spring Boot 3 + Spring Security + JWT + React + MySQL.\nPrescriptio Vault: React 18 + Clerk Authentication + Tailwind CSS.\nLinkHub: React + Vite + Netlify Edge CDN." }
        ]
    },
    "/home/debu/Pictures": {
        name: "Pictures",
        folders: [],
        files: [
            { id: "pic1", name: "debu_avatar.jpg", size: "435.0 KB", type: "image", modified: "Nov 24, 2026", path: "./images/logos/debu_avatar.jpg" },
            { id: "pic2", name: "wall-anime-chess.webp", size: "138.2 KB", type: "image", modified: "Nov 24, 2026", path: "./images/wallpapers/wall-9.webp" },
            { id: "pic3", name: "wall-luffy-gear5.webp", size: "57.9 KB", type: "image", modified: "Nov 24, 2026", path: "./images/wallpapers/wall-10.webp" },
            { id: "pic4", name: "ubuntu-desktop-wallpaper.webp", size: "582.1 KB", type: "image", modified: "Nov 13, 2026", path: "./images/wallpapers/wall-1.webp" }
        ]
    },
    "/home/debu/Downloads": {
        name: "Downloads",
        folders: [],
        files: [
            { id: "dl1", name: "debapriya_das_resume.pdf", size: "115.8 KB", type: "pdf", modified: "Nov 24, 2026", path: "./files/debapriya_das_resume.pdf" },
            { id: "dl2", name: "openjdk-21_linux-x64_bin.tar.gz", size: "192.4 MB", type: "archive", modified: "Oct 12, 2026", content: "OpenJDK 21 LTS Archive Binary for Linux x86_64" },
            { id: "dl3", name: "spring-boot-starter-parent-3.2.0.zip", size: "4.2 MB", type: "archive", modified: "Nov 01, 2026", content: "Spring Boot Starter Zip Archive" }
        ]
    },
    "/home/debu/Music": {
        name: "Music",
        folders: [],
        files: [
            { id: "m1", name: "eminem_kendrick_jcole_playlist.m3u", size: "1.4 KB", type: "audio", modified: "Nov 24, 2026", content: "Spotify Playlist M3U File: Eminem, Kendrick Lamar, J. Cole Favorites." }
        ]
    }
};

export default function FilesApp(props) {
    const [currentPath, setCurrentPath] = useState("/home/debu");
    const [history, setHistory] = useState(["/home/debu"]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
    const [selectedItem, setSelectedItem] = useState(null);
    const [previewFile, setPreviewFile] = useState(null);

    const currentFolder = FILE_SYSTEM[currentPath] || {
        name: currentPath.split("/").pop(),
        folders: [],
        files: []
    };

    const navigateTo = (path) => {
        if (FILE_SYSTEM[path]) {
            const nextHistory = history.slice(0, historyIndex + 1);
            nextHistory.push(path);
            setHistory(nextHistory);
            setHistoryIndex(nextHistory.length - 1);
            setCurrentPath(path);
            setSelectedItem(null);
            setSearchQuery("");
        }
    };

    const goBack = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setCurrentPath(history[newIndex]);
            setSelectedItem(null);
        }
    };

    const goForward = () => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setCurrentPath(history[newIndex]);
            setSelectedItem(null);
        }
    };

    const goUp = () => {
        const parts = currentPath.split("/").filter(Boolean);
        if (parts.length > 2) {
            parts.pop();
            const parent = "/" + parts.join("/");
            if (FILE_SYSTEM[parent]) {
                navigateTo(parent);
            }
        }
    };

    const handleItemDoubleClick = (item, isFolder) => {
        if (isFolder) {
            navigateTo(item.path);
        } else {
            setPreviewFile(item);
        }
    };

    const allFolders = currentFolder.folders.filter(f =>
        !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const allFiles = currentFolder.files.filter(f =>
        !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const places = [
        { name: "Home", path: "/home/debu", icon: "user-home" },
        { name: "Documents", path: "/home/debu/Documents", icon: "folder-documents" },
        { name: "Downloads", path: "/home/debu/Downloads", icon: "folder-download" },
        { name: "Projects", path: "/home/debu/Projects", icon: "folder" },
        { name: "Pictures", path: "/home/debu/Pictures", icon: "folder-pictures" },
        { name: "Music", path: "/home/debu/Music", icon: "folder-music" },
    ];

    const breadcrumbs = currentPath.split("/").filter(Boolean);

    const getFileIcon = (file) => {
        if (file.type === "pdf") {
            return (
                <div className="w-10 h-10 rounded bg-red-600 flex items-center justify-center text-white font-bold text-[11px] shadow">
                    PDF
                </div>
            );
        }
        if (file.type === "image") {
            return (
                <div className="w-10 h-10 rounded bg-purple-600 flex items-center justify-center text-white font-bold text-[11px] shadow overflow-hidden">
                    {file.path ? (
                        <img src={file.path} alt={file.name} className="w-full h-full object-cover" />
                    ) : (
                        "IMG"
                    )}
                </div>
            );
        }
        if (file.type === "archive") {
            return (
                <div className="w-10 h-10 rounded bg-amber-600 flex items-center justify-center text-white font-bold text-[10px] shadow">
                    ZIP
                </div>
            );
        }
        return (
            <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[11px] shadow">
                TXT
            </div>
        );
    };

    return (
        <div className="w-full h-full flex flex-col bg-[#2D2D2D] text-white select-none overflow-hidden font-sans">
            {/* Top Nautilus Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#242424] border-b border-[#3D3D3D] text-xs gap-2">
                {/* Back / Forward / Up Buttons */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={goBack}
                        disabled={historyIndex === 0}
                        title="Back"
                        className={`p-1.5 rounded transition-colors ${
                            historyIndex === 0
                                ? "text-gray-600 cursor-not-allowed"
                                : "text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white"
                        }`}
                    >
                        &larr;
                    </button>
                    <button
                        onClick={goForward}
                        disabled={historyIndex >= history.length - 1}
                        title="Forward"
                        className={`p-1.5 rounded transition-colors ${
                            historyIndex >= history.length - 1
                                ? "text-gray-600 cursor-not-allowed"
                                : "text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white"
                        }`}
                    >
                        &rarr;
                    </button>
                    <button
                        onClick={goUp}
                        disabled={currentPath === "/home/debu"}
                        title="Open Parent Folder"
                        className={`p-1.5 rounded transition-colors ${
                            currentPath === "/home/debu"
                                ? "text-gray-600 cursor-not-allowed"
                                : "text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white"
                        }`}
                    >
                        &uarr;
                    </button>
                </div>

                {/* Path Breadcrumbs */}
                <div className="flex-grow flex items-center bg-[#1E1E1E] border border-[#3C3C3C] rounded px-2.5 py-1 overflow-x-auto gap-1 text-xs">
                    <button
                        onClick={() => navigateTo("/home/debu")}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ~
                    </button>
                    {breadcrumbs.map((crumb, idx) => {
                        const isLast = idx === breadcrumbs.length - 1;
                        if (crumb === "home" || crumb === "debu") return null;
                        const subPath = "/home/debu/" + breadcrumbs.slice(2, idx + 1).join("/");
                        return (
                            <React.Fragment key={idx}>
                                <span className="text-gray-600">/</span>
                                <button
                                    onClick={() => navigateTo(subPath)}
                                    className={`transition-colors truncate ${
                                        isLast ? "font-bold text-white" : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {crumb}
                                </button>
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Search & View Switcher */}
                <div className="flex items-center gap-1.5">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-[#1E1E1E] border border-[#3C3C3C] rounded px-2.5 py-1 text-xs text-white placeholder-gray-500 w-28 md:w-36 outline-none focus:border-ub-orange transition-colors"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                            >
                                ×
                            </button>
                        )}
                    </div>
                    <div className="flex bg-[#1E1E1E] border border-[#3C3C3C] rounded overflow-hidden">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`px-2 py-1 text-xs ${
                                viewMode === "grid" ? "bg-ub-orange text-white" : "text-gray-400 hover:text-white"
                            }`}
                            title="Grid View"
                        >
                            :::
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`px-2 py-1 text-xs ${
                                viewMode === "list" ? "bg-ub-orange text-white" : "text-gray-400 hover:text-white"
                            }`}
                            title="List View"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Explorer Body */}
            <div className="flex flex-grow overflow-hidden">
                {/* Left Places Sidebar */}
                <div className="w-1/4 md:w-1/5 bg-[#242424] border-r border-[#383838] p-2 flex flex-col justify-between overflow-y-auto text-xs">
                    <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-2.5 py-1">
                            Places
                        </div>
                        <div className="space-y-0.5 mt-1">
                            {places.map((place) => {
                                const isActive = currentPath === place.path;
                                return (
                                    <button
                                        key={place.path}
                                        onClick={() => navigateTo(place.path)}
                                        className={`w-full text-left px-2.5 py-1.5 rounded flex items-center gap-2.5 transition-colors font-medium ${
                                            isActive
                                                ? "bg-ub-orange text-white font-semibold shadow-sm"
                                                : "text-gray-300 hover:bg-white hover:bg-opacity-5 hover:text-white"
                                        }`}
                                    >
                                        <img
                                            src="./themes/Yaru/system/folder.png"
                                            alt={place.name}
                                            className="w-4 h-4"
                                        />
                                        <span className="truncate">{place.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Storage Info */}
                    <div className="p-2 border-t border-[#383838] text-[11px] text-gray-400">
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                            <span>Storage</span>
                            <span>68 GB / 512 GB</span>
                        </div>
                        <div className="w-full bg-[#1C1C1C] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-ub-orange h-full rounded-full" style={{ width: "13%" }}></div>
                        </div>
                        <div className="text-[10px] text-gray-500 mt-1 font-mono">ext4 &bull; 444 GB free</div>
                    </div>
                </div>

                {/* Right Folder Content Area */}
                <div
                    className="w-3/4 md:w-4/5 flex-grow p-4 overflow-y-auto bg-[#2D2D2D]"
                    onClick={() => setSelectedItem(null)}
                >
                    {allFolders.length === 0 && allFiles.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                            <img src="./themes/Yaru/system/folder.png" alt="Empty" className="w-16 h-16 opacity-30 mb-2" />
                            <div className="text-sm font-medium text-gray-400">This folder is empty</div>
                        </div>
                    ) : viewMode === "grid" ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {/* Folder Tiles */}
                            {allFolders.map((folder) => {
                                const isSelected = selectedItem === folder.id;
                                return (
                                    <div
                                        key={folder.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedItem(folder.id);
                                        }}
                                        onDoubleClick={() => handleItemDoubleClick(folder, true)}
                                        className={`p-3 rounded-lg flex flex-col items-center text-center cursor-pointer transition-all ${
                                            isSelected
                                                ? "bg-ub-orange bg-opacity-40 border border-ub-orange"
                                                : "hover:bg-white hover:bg-opacity-5 border border-transparent"
                                        }`}
                                    >
                                        <img
                                            src="./themes/Yaru/system/folder.png"
                                            alt={folder.name}
                                            className="w-12 h-12 mb-2 drop-shadow"
                                        />
                                        <span className="text-xs text-gray-200 truncate w-full font-medium">
                                            {folder.name}
                                        </span>
                                        <span className="text-[10px] text-gray-500 mt-0.5">
                                            {folder.items} items
                                        </span>
                                    </div>
                                );
                            })}

                            {/* File Tiles */}
                            {allFiles.map((file) => {
                                const isSelected = selectedItem === file.id;
                                return (
                                    <div
                                        key={file.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedItem(file.id);
                                        }}
                                        onDoubleClick={() => handleItemDoubleClick(file, false)}
                                        className={`p-3 rounded-lg flex flex-col items-center text-center cursor-pointer transition-all ${
                                            isSelected
                                                ? "bg-ub-orange bg-opacity-40 border border-ub-orange"
                                                : "hover:bg-white hover:bg-opacity-5 border border-transparent"
                                        }`}
                                    >
                                        <div className="mb-2">
                                            {getFileIcon(file)}
                                        </div>
                                        <span className="text-xs text-gray-200 truncate w-full font-medium">
                                            {file.name}
                                        </span>
                                        <span className="text-[10px] text-gray-500 mt-0.5">
                                            {file.size}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        /* List View */
                        <div className="w-full text-xs">
                            <div className="grid grid-cols-12 pb-2 border-b border-[#3D3D3D] text-[11px] font-semibold text-gray-400">
                                <span className="col-span-6">Name</span>
                                <span className="col-span-3 text-right">Size</span>
                                <span className="col-span-3 text-right">Modified</span>
                            </div>
                            <div className="divide-y divide-[#353535] mt-1">
                                {allFolders.map((folder) => (
                                    <div
                                        key={folder.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedItem(folder.id);
                                        }}
                                        onDoubleClick={() => handleItemDoubleClick(folder, true)}
                                        className={`grid grid-cols-12 py-2 px-1 items-center cursor-pointer rounded ${
                                            selectedItem === folder.id ? "bg-ub-orange bg-opacity-30" : "hover:bg-white hover:bg-opacity-5"
                                        }`}
                                    >
                                        <div className="col-span-6 flex items-center gap-2 truncate">
                                            <img src="./themes/Yaru/system/folder.png" alt="" className="w-4 h-4 flex-shrink-0" />
                                            <span className="truncate font-medium text-white">{folder.name}</span>
                                        </div>
                                        <span className="col-span-3 text-right text-gray-400">{folder.items} items</span>
                                        <span className="col-span-3 text-right text-gray-500 font-mono">--</span>
                                    </div>
                                ))}
                                {allFiles.map((file) => (
                                    <div
                                        key={file.id}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedItem(file.id);
                                        }}
                                        onDoubleClick={() => handleItemDoubleClick(file, false)}
                                        className={`grid grid-cols-12 py-2 px-1 items-center cursor-pointer rounded ${
                                            selectedItem === file.id ? "bg-ub-orange bg-opacity-30" : "hover:bg-white hover:bg-opacity-5"
                                        }`}
                                    >
                                        <div className="col-span-6 flex items-center gap-2 truncate">
                                            <span className="text-[10px] font-bold uppercase text-ub-orange flex-shrink-0">[{file.type}]</span>
                                            <span className="truncate font-medium text-gray-200">{file.name}</span>
                                        </div>
                                        <span className="col-span-3 text-right text-gray-400 font-mono">{file.size}</span>
                                        <span className="col-span-3 text-right text-gray-500 font-mono">{file.modified}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-1.5 bg-[#242424] border-t border-[#383838] flex items-center justify-between text-[11px] text-gray-400">
                <span>
                    {allFolders.length + allFiles.length} item{allFolders.length + allFiles.length === 1 ? "" : "s"}
                </span>
                <span className="font-mono">ext4 &bull; 444.2 GB free</span>
            </div>

            {/* File Preview Modal */}
            {previewFile && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#242424] border border-[#3E3E3E] rounded-xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl text-white overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#1E1E1E] border-b border-[#333333]">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm">{previewFile.name}</span>
                                <span className="text-xs text-gray-400 font-mono">({previewFile.size})</span>
                            </div>
                            <button
                                onClick={() => setPreviewFile(null)}
                                className="text-gray-400 hover:text-white text-lg leading-none"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4 flex-grow overflow-y-auto">
                            {previewFile.type === "pdf" ? (
                                <div className="space-y-4 text-center">
                                    <p className="text-xs text-gray-300">Document preview for {previewFile.name}</p>
                                    <iframe
                                        src={previewFile.path}
                                        title={previewFile.name}
                                        className="w-full h-96 border border-[#383838] rounded"
                                    ></iframe>
                                    <a
                                        href={previewFile.path}
                                        download={previewFile.name}
                                        className="inline-block px-4 py-1.5 bg-ub-orange hover:bg-opacity-90 text-white rounded text-xs font-semibold"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            ) : previewFile.type === "image" ? (
                                <div className="flex flex-col items-center">
                                    <img src={previewFile.path} alt={previewFile.name} className="max-h-96 object-contain rounded" />
                                </div>
                            ) : (
                                <pre className="bg-[#181818] p-4 rounded text-xs text-gray-200 font-mono whitespace-pre-wrap leading-relaxed border border-[#333]">
                                    {previewFile.content || "Empty file content"}
                                </pre>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export const displayFiles = (openApp) => {
    return <FilesApp openApp={openApp} />;
};
