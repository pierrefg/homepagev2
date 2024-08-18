export function isMobileDevice() {
    if (typeof window !== "undefined") { // Ensure this runs only in the browser
        return window.matchMedia("(max-width: 767px)").matches;
    }
    return false;
}