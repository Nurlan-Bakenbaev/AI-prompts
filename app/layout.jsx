import "styles/globals.css";
import Nav from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
  title: "Next JS ",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="gradient" />
          <div className="main">
            <Nav />
            <main className="app">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
