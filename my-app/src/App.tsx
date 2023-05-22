import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RreminderList from './components/RreminderList';
import Reminder from './models/Reminder';
import reminderService from './services/reminder'
import reminder from './services/reminder';


function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() =>{
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  return (
    <div className="App">
        <RreminderList items={reminders} onRemoveReminder={ removeReminder}/>
    </div>
  );
}

export default App;
