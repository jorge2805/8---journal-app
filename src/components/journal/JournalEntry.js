import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://digital55.com/wp-content/uploads/2022/01/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png)'
            }}
        >           
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Today was a good day
            </p>
            <p className='journal__entry-content'>
                Labore ex amet ex ea eu aliquip incididunt excepteur id reprehenderit magna.
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span className='journal__entry-date-box-day'>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
