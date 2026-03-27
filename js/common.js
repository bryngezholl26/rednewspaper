// js/common.js
// common.js
async function loadComponent(targetId, componentPath) {
    try {
        const container = document.getElementById(targetId);
        if (!container) return;

        const response = await fetch(componentPath);
        if (!response.ok) throw new Error("加载失败");

        container.innerHTML = await response.text();
        console.log(`✅ 组件加载成功: ${componentPath}`);
    } catch (error) {
        console.error("❌ 加载组件失败:", error);
    }
}

window.loadComponent = loadComponent;