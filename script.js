var items=0;
            function cart(){
            this.items=this.items+1;
            
            document.getElementById("al2").style.display="none";
            document.getElementById("al1").style.display="none";
            document.getElementById("h2").innerHTML=(items+"::Items added to cart");
           
            document.getElementById("b_c").style.backgroundColor = "white"
            
                    }

                    function cart2()
                    {     this.items=this.items+1;
                        document.getElementById("h3").innerHTML=(this.items+"::Items added to cart");
                    }