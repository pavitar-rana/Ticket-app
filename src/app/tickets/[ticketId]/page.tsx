import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
    params: {
        ticketId: string;
    };
};

const TicketPage = ({ params }: TicketPageProps) => {
    const ticket = initialTickets.find(
        (ticket) => ticket.id === params.ticketId
    );

    if (!ticket) {
        return (
            <Placeholder
                label="Ticket Not Found"
                Button={
                    <Button asChild variant={"outline"}>
                        <Link href={ticketsPath}>Back to Tickets</Link>
                    </Button>
                }
            />
        );
    }

    return (
        <div className="flex justify-center animate-fade-in-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    );
};

export default TicketPage;
