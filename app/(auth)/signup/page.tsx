import Link from "next/link"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup"
import { Button } from "@/components/Button"
import { ChromeIcon } from "@/components/icons/ChromeIcon"
import { signup } from "../actions"

export default function Signup() {
    return (
        <div className="flex min-h-[75dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
                        Sign up for your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Or{" "}
                        <Link href="/login" className="font-medium text-red-500 hover:underline" prefetch={false}>
                            login to your existing account
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <Label htmlFor="email-address" className="sr-only">
                                Email address
                            </Label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-t-md border border-input px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" className="sr-only">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-b-md border border-input px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="py-4">
                            <Label htmlFor="role">
                                Role
                            </Label>
                            <RadioGroup defaultValue="Member" name="role">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Member" id="member" />
                                    <Label htmlFor="Member">Member</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Staff" id="staff" />
                                    <Label htmlFor="Staff">Staff</Label>
                                </div>
                            </RadioGroup>

                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            formAction={signup}
                        >
                            Sign up
                        </Button>
                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-muted" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <div>
                    <Button
                        variant="outline"
                        className="group relative flex w-full justify-center rounded-md border border-input py-2 px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        disabled
                    >
                        <ChromeIcon className="mr-2 h-5 w-5" />
                        Sign up with Google
                    </Button>
                </div>
            </div>
        </div>
    )
}