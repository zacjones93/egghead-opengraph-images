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
        background: `hsl(197, 23%, 55%)`,
        position: "absolute",
        display: "flex",
        overflow: "hidden"
      }}
    >
         <link rel="stylesheet" href="https://use.typekit.net/osf8fyt.css"></link>
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "adobe-garamond-pro"
          },
          ".emoji": {
            height: "1em",
            width: "1em",
            margin: "0 .05em 0 .1em",
            verticalAlign: "-0.1em"
          }
        }}
      />
      <div
        css={{
          background: "hsl(0, 0%, 100%)",
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
            color: "black",
            height: "100%",
            textAlign: "center",
            padding: "6rem"
          }}
        >
          <Textfit
            max={256}
            min={24}
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
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 36,
            padding: "2rem"
          }}
        >
          {window.timeToRead.length > 0 && <div>{window.timeToRead} min read</div>}
          <span>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));
