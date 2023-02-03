import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="48.0007" cy="48" r="38.069" fill="#111111" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96ZM43.3051 66.6501C45.5766 70.2751 46.9783 73.6584 47.51 76.8H50.555C51.0866 73.6101 52.4883 70.2025 54.76 66.5775C56.3067 64.1126 58.2884 61.7684 60.705 59.545C63.1216 57.2733 65.7316 55.3159 68.5349 53.6725C71.3867 52.0292 74.1416 50.9417 76.8 50.41V47.3651C72.8367 46.4951 68.9458 44.7067 65.1275 42C62.5658 40.1634 60.2458 38.1092 58.1675 35.8376C56.1376 33.5175 54.47 31.1009 53.1649 28.5876C51.86 26.0259 50.9899 23.5368 50.555 21.12H47.51C46.785 24.8417 45.1174 28.6118 42.5074 32.43C39.9459 36.1517 36.7558 39.3417 32.9375 42C29.1675 44.6101 25.2284 46.3984 21.12 47.3651V50.41C25.2767 51.2801 29.4333 53.2859 33.59 56.4276C37.7949 59.5692 41.0334 62.9767 43.3051 66.6501Z"
          fill="white"
        />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 600 }}>Values DOCS</span>
    </>
  ),
  project: {
    link: "https://github.com/ValuesDAO",
  },
  chat: {
    link: "https://twitter.com/ValuesDAO",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },

  docsRepositoryBase: "https://github.com/thevaluesdao/values-finance-docs",
  footer: {
    text: "Values DAO // Stand with 🇺🇦",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Values DOCS",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Values DOCS" />
      <meta property="og:description" content="Official Values documentation" />
      <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
    </>
  ),
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://u24.gov.ua/" target="_blank">
        🇺🇦 Stand with Ukraine. Help now →
      </a>
    ),
  },
};

export default config;
