<script>
    document.querySelector("form").addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (!username || !password) {
            alert("Please fill in both username and password.");
            event.preventDefault();  // Prevent form submission
        }
     } ;
</script>
