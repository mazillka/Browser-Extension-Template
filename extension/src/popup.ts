import "./scss/popup.scss";

if (process.env.NODE_ENV !== "development") {
    document.addEventListener("contextmenu", event => event.preventDefault());
}
