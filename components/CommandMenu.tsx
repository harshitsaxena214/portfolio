'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  LayoutGrid,
  Briefcase,
  FileText,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Copy,
  Home,
} from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { toast } from 'sonner'

const navigationItems = [
  { icon: Home,     label: 'Go to Home',     shortcut: 'Shift+H', action: 'navigate', path: '/' },
  { icon: Briefcase,label: 'Go to Projects', shortcut: 'Shift+P', action: 'navigate', path: '/projects' },
  { icon: FileText, label: 'Go to Writing',  shortcut: 'Shift+W', action: 'navigate', path: '/writing' },
]

const linkItems = [
  { icon: Twitter,  label: 'X Profile',        shortcut: 'Shift+X', action: 'link', url: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn Profile',  shortcut: 'Shift+L', action: 'link', url: 'https://linkedin.com' },
  { icon: Github,   label: 'GitHub Profile',   shortcut: 'Shift+G', action: 'link', url: 'https://github.com/harshitsaxena214' },
  { icon: Mail,     label: 'Email',            shortcut: 'Shift+E', action: 'link', url: 'mailto:hello@harshitsaxena.dev' },
]

const generalItems = [
  { icon: Copy, label: 'Copy Link', shortcut: 'Shift+C', action: 'copy' },
]

type AnyItem = typeof navigationItems[0] | typeof linkItems[0] | typeof generalItems[0]

export const CommandMenu = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }

      if (open && e.shiftKey) {
        switch (e.key.toUpperCase()) {
          case 'H': e.preventDefault(); router.push('/');         setOpen(false); break
          case 'P': e.preventDefault(); router.push('/projects'); setOpen(false); break
          case 'W': e.preventDefault(); router.push('/writing');  setOpen(false); break
          case 'X': e.preventDefault(); window.open('https://twitter.com', '_blank'); setOpen(false); break
          case 'L': e.preventDefault(); window.open('https://linkedin.com', '_blank'); setOpen(false); break
          case 'G': e.preventDefault(); window.open('https://github.com', '_blank'); setOpen(false); break
          case 'E': e.preventDefault(); window.location.href = 'mailto:hello@harshitsaxena.dev'; setOpen(false); break
          case 'C':
            e.preventDefault()
            navigator.clipboard.writeText(window.location.href)
            toast.success('Link copied to clipboard!')
            setOpen(false)
            break
        }
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, router])

  const handleSelect = (item: AnyItem) => {
    if (item.action === 'navigate' && 'path' in item) {
      router.push(item.path)
    } else if (item.action === 'link' && 'url' in item) {
      window.open(item.url, '_blank')
    } else if (item.action === 'copy') {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link copied to clipboard!')
    }
    setOpen(false)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      {/* Header block matching your original */}
      <div className="flex items-center gap-3 p-4 border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
          <LayoutGrid className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-foreground">Home</h3>
          <p className="text-sm text-muted-foreground">About me and what I&apos;m up to</p>
        </div>
      </div>

      <CommandInput placeholder="Search for actions..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleSelect(item)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span>{item.label}</span>
              </div>
              <CommandShortcut>{item.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          {linkItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleSelect(item)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span>{item.label}</span>
              </div>
              <CommandShortcut>{item.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="General">
          {generalItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleSelect(item)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span>{item.label}</span>
              </div>
              <CommandShortcut>{item.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
