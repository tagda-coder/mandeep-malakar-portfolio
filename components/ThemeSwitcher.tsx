'use client';
import { useEffect, useRef, useState } from 'react';
import { Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const THEMES = [
    {
        key: 'violet',
        name: 'Midnight Violet',
        primary: '#8B5CF6',
        secondary: '#F5A524',
    },
    {
        key: 'ocean',
        name: 'Ocean Depths',
        primary: '#22D3EE',
        secondary: '#FB7185',
    },
    {
        key: 'sunset',
        name: 'Sunset Ember',
        primary: '#FF7A3D',
        secondary: '#F5C518',
    },
    {
        key: 'emerald',
        name: 'Emerald Noir',
        primary: '#10B981',
        secondary: '#EAB308',
    },
    {
        key: 'crimson',
        name: 'Crimson Steel',
        primary: '#EF4444',
        secondary: '#60A5FA',
    },
] as const;

export const THEME_STORAGE_KEY = 'portfolio-theme';

const ThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState('violet');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = document.documentElement.getAttribute('data-theme');
        if (current) setActiveTheme(current);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const applyTheme = (key: string) => {
        document.documentElement.setAttribute('data-theme', key);
        localStorage.setItem(THEME_STORAGE_KEY, key);
        setActiveTheme(key);
        setIsOpen(false);
    };

    return (
        <div
            className="fixed top-24 right-5 md:right-10 z-[100]"
            ref={containerRef}
        >
            <div
                className={cn(
                    'absolute top-full right-0 mt-3 flex flex-col gap-2 p-2 rounded-2xl bg-card border border-border shadow-xl transition-all duration-300 origin-top-right',
                    isOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-90 pointer-events-none',
                )}
            >
                {THEMES.map((theme) => (
                    <button
                        key={theme.key}
                        onClick={() => applyTheme(theme.key)}
                        title={theme.name}
                        aria-label={`Switch to ${theme.name} theme`}
                        className={cn(
                            'group size-9 rounded-full flex items-center justify-center transition-all hover:scale-110',
                            activeTheme === theme.key &&
                                'ring-2 ring-foreground/60 ring-offset-2 ring-offset-card',
                        )}
                    >
                        <span
                            className="size-7 rounded-full block"
                            style={{
                                background: `linear-gradient(135deg, ${theme.primary} 50%, ${theme.secondary} 50%)`,
                            }}
                        />
                    </button>
                ))}
            </div>

            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Change color theme"
                className="size-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all shadow-lg"
            >
                <Palette size={20} />
            </button>
        </div>
    );
};

export default ThemeSwitcher;
