/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import Textfit from "react-textfit";
import Twemoji from "react-twemoji";
import { render } from "react-dom";

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
        backgroundImage: `linear-gradient(0.25turn, #7086B7, #DEF2F7, #7086B7);`,
        position: "absolute",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <link rel="stylesheet" href="https://use.typekit.net/osf8fyt.css" />
      <Global
        styles={{
          ".emoji": {
            height: "1em",
            width: "1em",
            margin: "0 .05em 0 .1em",
            verticalAlign: "-0.1em"
          },
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui"
          }
        }}
      />
      <div
        css={{
          background: "#041016",
          margin: "40px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          borderRadius: 10,
          boxShadow: `hsl(197, 23%, 55%)`
        }}
      >
        <h1
          css={{
            color: "#E9F5FB",
            height: "100%",
            textAlign: "center",
            padding: "5rem",
            fontFamily: "system-ui",
            fontWeight: 400
          }}
        >
          <Textfit
            max={180}
            min={48}
            style={{
              minHeight: "80%",
              maxHeight: "80%",
              lineHeight: 1
            }}
          >
            <Twemoji
              options={{ className: "emoji", folder: "svg", ext: ".svg" }}
            >
              {window.title}
            </Twemoji>
          </Textfit>
        </h1>
        <div
          css={{
            color: "#E9F5FB",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 36,
            padding: "2rem"
          }}
        >
          {
            <Twemoji
              options={{ className: "emoji", folder: "svg", ext: ".svg" }}
            >
              {window.type}
            </Twemoji>
          }
          <span>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('corgi'))

