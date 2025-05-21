"use client"

import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2">
      <SunIcon className="h-4 w-4" />
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <MoonIcon className="h-4 w-4" />
      <Label htmlFor="theme-toggle" className="sr-only">
        Toggle dark mode
      </Label>
    </div>
  )
}
