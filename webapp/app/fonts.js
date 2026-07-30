import localFont from 'next/font/local';

export const josefinSans = localFont({
  src: "./fonts/Neo-castel.ttf",
  variable: "--font-josefin",
  weight: "100 700", // variable axis range
});

export const monaspaceArgon = localFont({
  src: "./fonts/monaspace_krypton_var.ttf",
  variable: "--font-mona",
  weight: "100 700",
});