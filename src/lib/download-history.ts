import { DownloadHistoryItem } from "@/types";

const HISTORY_KEY = "ig_download_history";
const MAX_HISTORY_ITEMS = 10;

export function getDownloadHistory(): DownloadHistoryItem[] {
    if (typeof window === "undefined") return [];

    try {
        const history = localStorage.getItem(HISTORY_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error("Error reading download history:", error);
        return [];
    }
}

export function addToDownloadHistory(item: Omit<DownloadHistoryItem, "id" | "timestamp">): void {
    if (typeof window === "undefined") return;

    try {
        const history = getDownloadHistory();
        const newItem: DownloadHistoryItem = {
            ...item,
            id: Date.now().toString(),
            timestamp: Date.now(),
        };

        // Add to beginning and limit to MAX_HISTORY_ITEMS
        const updatedHistory = [newItem, ...history].slice(0, MAX_HISTORY_ITEMS);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error("Error saving to download history:", error);
    }
}

export function clearDownloadHistory(): void {
    if (typeof window === "undefined") return;

    try {
        localStorage.removeItem(HISTORY_KEY);
    } catch (error) {
        console.error("Error clearing download history:", error);
    }
}

export function removeFromHistory(id: string): void {
    if (typeof window === "undefined") return;

    try {
        const history = getDownloadHistory();
        const updatedHistory = history.filter(item => item.id !== id);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error("Error removing from history:", error);
    }
}
