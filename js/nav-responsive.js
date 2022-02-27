
        function openNav() {
            document.getElementById("mySidebar").style.transition = "2s";
            document.getElementById("mySidebar").style.opacity = "50px";
            document.getElementById("mySidebar").style.display = "block";
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("contactFor").style.zIndex = "1";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.transition = "2s";
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("contactFor").style.zIndex = "2";
          }
