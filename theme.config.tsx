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
      <span style={{ marginLeft: ".4em", fontWeight: 600 }}>
        Values Bridge DOCS
      </span>
    </>
  ),
  project: {
    link: "https://github.com/ValuesDAO",
  },
  chat: {
    link: "https://twitter.com/ValuesDAO",
  },

  docsRepositoryBase: "https://github.com/thevaluesdao/values-finance-docs",
  footer: {
    text: "Values DAO",
  },
};

export default config;
