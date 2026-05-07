import { Outlet } from "react-router";
import { ProgressBar } from "../ProgressBar";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <ProgressBar />
      <Outlet />
      <footer className="site-footer">
        <p>Frontend desde Cero — 2026</p>
      </footer>
    </>
  );
}
