import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Amy and Brigitte',
    location: '3A',
    issue: 'Just checking in'
  },
  {
    names: 'Chloe and Diana',
    location: '3B',
    issue: 'Just checking in too'
  },
  {
    names: 'Ellen and Fiona',
    location: '5A',
    issue: 'Just checking in as well'
  }
];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) => 
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default TicketList;