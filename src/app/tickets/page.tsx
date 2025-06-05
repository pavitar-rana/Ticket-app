import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
    OPEN: <LucideFileText />,
    IN_PROGRESS: <LucidePencil />,
    DONE: <LucideCircleCheck />,
};

function TicketPage() {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
                <p className="text-sm text-muted-foreground">
                    All your tickets at one place
                </p>
            </div>
            <Separator />
            <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
                {initialTickets.map((ticket) => (
                    <Card key={ticket.id} className="w-full max-w-[420px] ">
                        <CardHeader>
                            <CardTitle className="flex gap-x-2 min-w-0 justify-center items-center">
                                <h3 className="">
                                    {TICKET_ICONS[ticket.status]}
                                </h3>
                                <h3 className="truncate flex-1 text-2xl font-bold">
                                    {ticket.title}
                                </h3>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="line-clamp-3 whitespace-break-spaces">
                                {ticket.content}
                            </span>
                        </CardContent>
                        <CardFooter>
                            <Link
                                className="text-sm underline"
                                href={ticketPath(ticket.id)}
                            >
                                View
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default TicketPage;
