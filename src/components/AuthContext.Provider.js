import React from 'react';
import AuthContext from './AuthContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userId, setUserId] = React.useState(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId }}>
      {/* Your app components */}
    </AuthContext.Provider>
  );
}

export default App;
