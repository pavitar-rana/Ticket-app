import Link from "next/link";
import { ticketsPath } from "@/paths";

export default function Home() {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
                <p className="text-sm text-muted-foreground">
                    Your home place to start
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <Link href={ticketsPath}>Go to ticket</Link>
            </div>
        </div>
    );
}
