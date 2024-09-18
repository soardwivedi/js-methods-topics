function useState(initialValue) {
    let state = initialValue; // Initialize state with the provided initial value
    const setState = newValue => {
      state = newValue; // Update the state with the new value
      // Trigger re-render (you would have to implement this part depending on your environment)
    };
    return [state, setState]; // Return state and setState function as an array
  }
  
  // Example usage:
  const [count, setCount] = useState(0); // Initialize state with 0
  console.log(count); // Output: 0
  
  setCount(5); // Update state to 5
  console.log(count); // Output: 5
  