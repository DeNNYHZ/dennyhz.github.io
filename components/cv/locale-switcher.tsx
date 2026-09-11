"use client"

import { Languages } from "lucide-react"
import { useLocale } from "@/lib/locale"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
          aria-label="Switch language"
        >
          <Languages className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-mono text-xs">
        <DropdownMenuItem
          onClick={() => setLocale("id")}
          className="gap-2 cursor-pointer"
        >
          <span className="text-chart-4">locale</span>
          <span className="text-muted-foreground">=</span>
          <span className="text-chart-2">{'"id"'}</span>
          {locale === "id" && <span className="ml-auto text-primary">*</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLocale("en")}
          className="gap-2 cursor-pointer"
        >
          <span className="text-chart-4">locale</span>
          <span className="text-muted-foreground">=</span>
          <span className="text-chart-2">{'"en"'}</span>
          {locale === "en" && <span className="ml-auto text-primary">*</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
