import { useEffect } from "react";

export function ContentProtection() {
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      const blockedShortcuts =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "c", "j"].includes(key)) ||
        (e.ctrlKey && ["u", "s", "p", "a", "+", "-", "="].includes(key));

      if (blockedShortcuts) {
        e.preventDefault();
      }
    };

    // Disable image dragging
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    // Disable double click selection
    const handleDoubleClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Clear active selections while dragging
    const clearSelection = () => {
      window.getSelection()?.removeAllRanges();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("mousemove", clearSelection);

    // Global protection styles
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("mousemove", clearSelection);

      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
    };
  }, []);

  return null;
}