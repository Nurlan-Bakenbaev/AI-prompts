import "@styles/globals.css";
import { Html } from "next/document";
export const metadata = {
  title: "Promptland",
  description: "Discover & Share AI Prompts",
};

const layout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
            <div className="gradient"/>
            <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default layout;
