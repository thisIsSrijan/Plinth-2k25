import React, { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        // Create the central cursor element
        const centralCursor = document.createElement('div');
        centralCursor.id = 'central-cursor';
        document.body.appendChild(centralCursor);

        let trail = [];
        const trailLength = 20;

        // Mouse move event to update cursor and create trail
        const handleMouseMove = (e) => {
            // Update central cursor position
            centralCursor.style.left = `${e.pageX}px`;
            centralCursor.style.top = `${e.pageY}px`;

            // Create trail bubble
            const trailBubble = document.createElement('div');
            trailBubble.classList.add('cursor-trail');
            document.body.appendChild(trailBubble);

            // Position trail bubble
            trailBubble.style.left = `${e.pageX}px`;
            trailBubble.style.top = `${e.pageY}px`;

            // Add to trail for cleanup
            trail.push(trailBubble);

            // Remove old trail elements
            if (trail.length > trailLength) {
                const oldTrail = trail.shift();
                oldTrail.remove();
            }
        };

        // Cleanup on animation end
        const handleAnimationEnd = (e) => {
            if (e.target.classList.contains('cursor-trail')) {
                e.target.remove();
            }
        };

        // Event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('animationend', handleAnimationEnd);

        // Cleanup on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('animationend', handleAnimationEnd);
            centralCursor.remove();
        };
    }, []);

    return null; // No UI elements in this component
};

export default CustomCursor;