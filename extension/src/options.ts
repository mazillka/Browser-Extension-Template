import "./scss/options.scss";

if (process.env.NODE_ENV !== "development") {
    document.addEventListener("contextmenu", event => event.preventDefault());
}
