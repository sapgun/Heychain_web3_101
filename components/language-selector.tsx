"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { languages, type Language } from "@/lib/i18n"

interface LanguageSelectorProps {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  showLabel?: boolean
}

export default function LanguageSelector({ variant = "ghost", size = "sm", showLabel = true }: LanguageSelectorProps) {
  const { language, setLanguage, t, isLoading } = useLanguage()

  const currentLanguage = languages[language]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          {showLabel && (
            <span className="hidden sm:inline">
              {currentLanguage.flag} {currentLanguage.nativeName}
            </span>
          )}
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>{t.language}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(languages).map(([code, info]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <span>{info.flag}</span>
              <span>{info.nativeName}</span>
            </div>
            {language === code && <Check className="w-4 h-4 text-green-500" />}
          </DropdownMenuItem>
        ))}
        {isLoading && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled className="text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <span>번역 중...</span>
              </div>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
