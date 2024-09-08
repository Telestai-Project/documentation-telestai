import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Telestai</span>,
  project: {
    link: 'https://github.com/Telestai-Project/documentation-telestai',
  },
  chat: {
    link: 'https://discord.gg/VmFXfHnZE5',
  },
  docsRepositoryBase: 'https://github.com/Telestai-Project/documentation-telestai/tree/main',

  // Main SEO Titles and Open Graph Tags
  useNextSeoProps() {
    return {
      titleTemplate: 'Telestai Docs', // General title template for SEO
      description: 'Telestai is a gateway to a thriving open-source ecosystem designed to bring decentralized applications into the hands of everyday users.', // Meta description
      openGraph: {
        type: 'website',
        url: 'https://www.telestai.io/', // Main website URL
        title: 'Telestai - Open Source Blockchain Ecosystem',
        description: 'Telestai is built by passionate blockchain developers, committed to providing tools that power decentralized technology.',
        images: [
          {
            url: 'https://www.telestai.io/opengraph-image.png', // Replace with your Open Graph image URL
            width: 1200,
            height: 630,
            alt: 'Telestai Open Graph Image'
          }
        ]
      },
    }
  },

  // Custom Head Tags (for favicon and viewport settings)
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Telestai - Open Source Blockchain Ecosystem" />
      <meta property="og:description" content="Telestai is built by passionate blockchain developers, committed to providing tools that power decentralized technology." />
      <meta property="og:image" content="https://www.telestai.io/opengraph-image.png" /> {/* Open Graph Image */}
      <link rel="icon" href="https://www.telestai.io/favicon.ico" /> {/* Favicon */}
    </>
  ),

  // Footer Text
  footer: {
    text: 'Telestai Docs © ' + new Date().getFullYear(), // Dynamically sets the year in the footer
  },
}

export default config
