'use client';

import { useSettings } from '@/contexts/SettingsContext';
import { useTranslations } from '@/hooks/use-translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function SettingsPage() {
  const { theme, setTheme, language, setLanguage } = useSettings();
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">{t('settingsTitle')}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t('settingsTitle')}</CardTitle>
          <CardDescription>{t('settingsDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-medium">{t('theme')}</h3>
            <p className="text-sm text-muted-foreground">{t('themeDescription')}</p>
            <RadioGroup onValueChange={setTheme} value={theme} className="grid max-w-md grid-cols-2 gap-8 pt-2 md:grid-cols-3">
              <Label className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="light" className="sr-only" />
                <span className="mb-2 text-sm font-medium">{t('light')}</span>
                <span className="block w-full rounded-md bg-white p-2 text-center text-black shadow-sm">Aa</span>
              </Label>
              <Label className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="dark" className="sr-only" />
                 <span className="mb-2 text-sm font-medium">{t('dark')}</span>
                <span className="block w-full rounded-md bg-slate-950 p-2 text-center text-white shadow-sm">Aa</span>
              </Label>
              <Label className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="system" className="sr-only" />
                 <span className="mb-2 text-sm font-medium">{t('system')}</span>
                <span className="block w-full rounded-md border bg-background p-2 text-center shadow-sm">Aa</span>
              </Label>
            </RadioGroup>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">{t('language')}</h3>
            <p className="text-sm text-muted-foreground">{t('languageDescription')}</p>
            <RadioGroup onValueChange={setLanguage} value={language} className="grid max-w-md grid-cols-2 gap-4 pt-2">
              <Label className="flex cursor-pointer items-center gap-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="en" />
                {t('english')}
              </Label>
              <Label className="flex cursor-pointer items-center gap-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                <RadioGroupItem value="hi-en" />
                {t('hinglish')}
              </Label>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
