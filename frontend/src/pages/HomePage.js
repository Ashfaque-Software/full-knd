import React, { useState } from 'react';
import KanbanBoard from '../components/KanbanBoard';

const HomePage = ({ token }) => {
    return (
        <div>
            <h1>Kanban Board</h1>
            <KanbanBoard token={token} />
        </div>
    );
};

export default HomePage;
