"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import GoogleLogo from "@/public/google.svg"
import GithubLogo from "@/public/github.svg"
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled variant={"outline"} className="w-full">
                    <Loader2 className="size-4 mr-3 animate-spin">
                        Please Wait
                    </Loader2>
                </Button>
            ) : (
                <Button variant={"outline"} className="w-full">
                    <Image src={GoogleLogo} alt="Google Logo" className="size-4 mr-2" />
                    Sign in with Google
                </Button>
            )
            }
        </>
    )
}
export function GithubAuthButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled variant={"outline"} className="w-full">
                    <Loader2 className="size-4 mr-3 animate-spin">
                        Please Wait
                    </Loader2>
                </Button>
            ) : (
                <Button variant={"outline"} className="w-full">
                    <Image src={GithubLogo} alt="Github Logo" className="size-4 mr-2" />
                    Sign in with Github
                </Button>
            )
            }
        </>
    )
}