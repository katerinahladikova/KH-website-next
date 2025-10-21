import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
    locales: ["cs", "en"],
    defaultLocale: "cs",
    localeDetection: true,
    localePrefix: {
        mode: "as-needed"
    }
})
