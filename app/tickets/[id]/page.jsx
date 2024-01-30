import { notFound } from "next/navigation";
import React from "react";

const dynamicParams = true;

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
};

const getTicket = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:4000/tickets/` + id, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

const TicketDetail = async ({ params }) => {
  const ticket = await getTicket(params?.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket?.title}</h3>
        <small>Created by {ticket?.email}</small>
        <p>{ticket?.body}</p>
        <div className={`pill ${ticket?.priority}`}>
          {ticket?.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetail;
