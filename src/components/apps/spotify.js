import React from 'react'

export default function Spotify() {
    return (
        <div className="w-full h-full flex flex-col bg-ub-cool-grey overflow-hidden select-none">
            <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px", border: "0", width: "100%", height: "100%", minHeight: "352px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1IPOOk?utm_source=generator&si=a8b27c808e844a58"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
                className="w-full h-full"
            ></iframe>
        </div>
    )
}

export const displaySpotify = () => {
    return <Spotify />;
}
