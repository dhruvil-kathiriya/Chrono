import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingRoute() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Welcome to Chrono<span className="text-primary">App</span>
                    </CardTitle>
                    <CardDescription>
                        We Need the Following Information to set up your Profile!!
                    </CardDescription>
                </CardHeader>
                <form>
                    <CardContent className="flex flex-col gap-y-5">
                        <div className="grid gap-y-2">
                            <Label>Full Name</Label>
                            <input type="text" placeholder="Chrono" />
                        </div>
                        <div className="grid gap-y-2">
                            <Label>Username</Label>
                            <div className="flex rounded-md">
                                <span className="inline-flex items-center px-3 border rounded-l-md border-r-0 border-muted bg-muted text-sm text-muted-foreground">chrono.com/</span>
                                <Input className="rounded-l-none" placeholder="example-user-1" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Submit</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}