import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/Card"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Textarea } from "@/components/Textarea"
import { Button } from "@/components/Button"

export default function ContactForm() {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <h2 id="contact" className="text-2xl font-semibold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </div>
    )
}