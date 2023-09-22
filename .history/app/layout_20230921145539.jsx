import "styles/globals.css";
import Nav from "../components/Nav";
import { Provider } from "react";
export const metadata = {
  title: "Next JS ",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>

        <div className="main">
          <div className="gradient" />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
