const themes = {
    "default": {
        "--back":       "oklch(20%   0   0)",
        "--back-block": "oklch(24%   0   0)",
        "--back-item1": "oklch(24%   0   0)",
        "--back-item2": "oklch(32%   0   0)",
        "--back-code":  "oklch(16%   0   0)",
        "--back-file":  "oklch(32%   0   0)",
        "--border":     "oklch(28%   0   0)",
        "--a-white":    "oklch(80%   0   0)",
        "--b-white":    "oklch(90%   0   0)",
        "--a-gray":     "oklch(48%   0   0)",
        "--b-gray":     "oklch(64%   0   0)",
        "--a-red":      "oklch(80% 0.1  20)",
        "--a-yellow":   "oklch(80% 0.1  80)",
        "--a-green":    "oklch(80% 0.1 140)",
        "--a-cyan":     "oklch(80% 0.1 200)",
        "--a-blue":     "oklch(80% 0.1 260)",
        "--a-purple":   "oklch(80% 0.1 320)"
    }
};

function load_theme(theme_name) {
    let theme = themes[theme_name];

    for (let key in theme) {
        document.documentElement.style.setProperty(key, theme[key]);
    }

    console.log("Загружена тема:", theme_name);
};

load_theme("default");
