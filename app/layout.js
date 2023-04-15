import "./globals.css";
import { Inter } from "next/font/google";
import clsxm from "./utils/clsxm";

export const metadata = {
  title: "Discord Anime Profile Picture",
  description: "Generate the perfect discord anime profile picture",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={clsxm(inter.className)}>{children}</body>
    </html>
  );
}
