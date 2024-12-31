```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component renders.
    console.log('Component mounted');
    //Attempting to update state in the cleanup function will result in an error
    return () => {
      console.log('Component unmounting');
      setCount(1);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```