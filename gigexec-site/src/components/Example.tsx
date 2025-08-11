import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Example() {
  return (
    <div className="p-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary">GigExec Site</h1>
        <p className="text-foreground">Built with React, TypeScript, Tailwind CSS, and shadcn/ui</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card Example */}
        <Card className="bg-background border-border">
          <CardHeader>
            <CardTitle className="text-primary">Design System</CardTitle>
            <CardDescription>Your custom color palette in action</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="bg-primary text-white">Primary</Badge>
              <Badge variant="secondary" className="bg-yellow text-white">Yellow</Badge>
              <Badge variant="outline" className="border-blue text-blue">Blue</Badge>
            </div>
            <div className="space-y-2">
              <Input placeholder="Enter your name..." className="border-border" />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Avatar Example */}
        <Card className="bg-background border-border">
          <CardHeader>
            <CardTitle className="text-primary">Team Members</CardTitle>
            <CardDescription>Avatar components with fallbacks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-primary text-white">CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">Frontend Developer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="bg-background border-border">
          <CardHeader>
            <CardTitle className="text-primary">Color Palette</CardTitle>
            <CardDescription>Your custom colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 bg-primary rounded"></div>
              <div className="h-8 bg-yellow rounded"></div>
              <div className="h-8 bg-blue rounded"></div>
              <div className="h-8 bg-gray rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
