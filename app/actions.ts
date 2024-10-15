"use server";

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";

export async function OnboardingAction(formData: FormData) {
    const user = await requireUser();

    const data = await prisma.user.update({
        where: {
            id: sessionStorage.user?.id,
        },
        data: {
            userName: 'ddhad',
            name: 'ddsf',
        }
    })
}
