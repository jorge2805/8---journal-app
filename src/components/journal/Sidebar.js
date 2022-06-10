import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar'>
            <h3 className='mt-5'>
                <i className='bi bi-moon'></i>
                <span> Jorge</span>
            </h3>

            <button className='btn'>
                Logout
            </button>
        </div>
        <div className='journal__new-entry'>
            <i className='bi bi-calendar-plus'></i>
            <p className='mb-5'>
                New Entry
            </p>
        </div>

        <JournalEntries />
    </aside>
  )
}
