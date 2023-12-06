import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 py-5 mt-auto non-printable">
      <p className="text-center">
        &copy; 2022-{year} <a className="hover:text-white cursor-pointer" target="_blank" href="https://freakdevs.in">FreakDevs</a>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
