import React from 'react';
import Reminder from '../models/Reminder';

interface RreminderListProps{
    items: Reminder[]
    onRemoveReminder: (id: number) => void;
}

function RreminderList({items, onRemoveReminder}: RreminderListProps) {
    return (
        <ul className='list-group'>
            {items.map(item => <li className='list-group-item' key={item.id} > 
            
                {item.title} 
                <button onClick={() => onRemoveReminder(item.id)} className='btn btn-outline-danger mx-2 rounded-pill'>Delete</button>
                </li>)}
        </ul>
    );
}

export default RreminderList;