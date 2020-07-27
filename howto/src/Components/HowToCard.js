import React from 'react'


export default function HowToCard({ card }) {
    if (!card) {
        return <h2>Finding Cards</h2>
    }

    return (
        //////////sample PLEASE CHANGE VALUES WHEN ENDPOINT UPDATED////////
        <div>
            <h2>Title</h2>
            <p>Author:{card.first_name}{card.last_name}</p>
            <p>Topic:{card.email}</p>
            <p>Guide:{card.avatar}</p>
        </div>
    )
}