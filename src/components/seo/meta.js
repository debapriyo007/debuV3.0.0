import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Debapriya Das | Full Stack Java Engineer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Debapriya Das Portfolio - Software Developer | Full Stack Java Engineer" />
            <meta name="description"
                content="Debapriya Das's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Debapriya Das (debapriyo007)" />
            <meta name="keywords"
                content="debapriyo007, debu, debapriya das, debu portfolio, debapriyo007 github, java full stack developer, spring boot developer, ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Debapriya Das Portfolio - Software Developer | Full Stack Java Engineer" />
            <meta itemProp="description"
                content="Debapriya Das's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Debapriya Das Portfolio - Software Developer | Full Stack Java Engineer" />
            <meta name="twitter:description"
                content="Debapriya Das's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="debapriyo007" />
            <meta name="twitter:creator" content="debapriyo007" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Debapriya Das Portfolio - Software Developer | Full Stack Java Engineer" />
            <meta name="og:description"
                content="Debapriya Das's Personal Portfolio Website. Made with Ubuntu 20.04 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://debu21.netlify.app/" />
            <meta name="og:site_name" content="Debapriya Das Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" type="image/png" href="images/logos/fevicon.png" />
            <link rel="shortcut icon" href="favicon.ico" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
        </Head>
    )
}
