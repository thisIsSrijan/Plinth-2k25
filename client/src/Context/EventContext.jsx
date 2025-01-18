import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create the context
const EventContext = createContext();

/**
 * Provider component to wrap the application
 * @param {React.ReactNode} children - The child components to wrap
 */
export const EventProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState("Quizzing");

  return (
    <EventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Prop validation
EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Custom hook to access the EventContext
 * @returns {object} - Contains `selectedEvent` and `setSelectedEvent`
 */

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
};

