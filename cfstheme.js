import base from "mdx-deck/themes";

const brandColors = {
  red: "#c72931"
};

const cfstheme = Object.assign({}, base, {
  font: 'Input, "IBM Plex Mono", monospace',
  monospace: 'Input, "IBM Plex Mono", monospace',
  colors: {
    text: "#333",
    background: "#ededed",
    link: brandColors.red,
    pre: "#fff",
    preBackground: brandColors.red,
    code: "#fff",
    codeBackground: brandColors.red
  },
  css: {
    textAlign: "left",
    fontSize: "16px",
    "@media screen and (min-width: 64em)": {
      fontSize: "32px"
    },
    "& .Slide > div": {
      minWidth: "80vw",
      minHeight: "60vh"
    }
  }
});

export default cfstheme;
