
    // Function to redirect to the update item page
   
   
    function redirectToDash() {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      window.location.href = `dashboard.html?token=${token}`;
    }
   
   
   
   
    function redirectToUpdateItem() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        window.location.href = `updateItem.html?token=${token}`;
      }
  
      // Function to redirect to the delete item page
      function redirectToDeleteItem() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        window.location.href = `deleteItem.html?token=${token}`;
      }
  
      // Function to redirect to the protected route
      function redirectToRoute() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        window.location.href = `protectedRoute.html?token=${token}`;
      }
  
      // Function to redirect to the item page
   
      function redirectToReg() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        window.location.href = `registration.html?token=${token}`;
      }