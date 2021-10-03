console.log("konsol")

//to make sure page loads before making document calls
window.onload=function(){
    const hamburgerButton = document.querySelector(".hamburger-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");
    const modalSelection = document.querySelector(".modal-selection");
    const backProject = document.querySelector(".back-project");
    const modalCompleteButton = document.querySelectorAll(".modal-complete-btn");
    const modalSelectionClose = document.querySelector(".modal-selection-icon");
    const modalCompleted = document.querySelector(".modal-completed");
    const modalClose = document.querySelector(".btn__got-it")

    //donation stats
    const amountBacked = document.querySelector(".amount__backed");
    const totalBackers = document.querySelector(".amount__backers");
    const bambooRemaining = document.querySelector(".amount__left-bamboo");
    const blackRemaining = document.querySelector(".amount__left-black");
    const progressBar = document.querySelector(".progress-bar");

    let currenAmountBacked = 69914;
    let currentTotalBackers = 5007;
    let currentBambooRemaining = 101;
    let currentBlackRemaining = 64;
   
    hamburgerButton.addEventListener("click", function(){
        if (mobileMenu.classList.contains("mb-close") && overlay.classList.contains("mb-close")){
            mobileMenu.classList.remove("mb-close");
            overlay.classList.remove("mb-close");
            hamburgerButton.src="images/icon-close-menu.svg"
        } else {
            mobileMenu.classList.add("mb-close");
            overlay.classList.add("mb-close");
            hamburgerButton.src="images/icon-hamburger.svg";   
        }
    });

    modalCompleteButton.forEach(function(currentBtn){
        currentBtn.addEventListener("click", function(){
            overlay.classList.remove("mb-close");
            modalCompleted.classList.remove("mb-close");

            if (currentBtn.classList.contains("bamboo") &&  currentBambooRemaining >= 1) {
                currentBambooRemaining -= 1
                bambooRemaining.innerHTML = currentBambooRemaining
                currenAmountBacked += 25
                amountBacked.innerHTML = `$${currenAmountBacked.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
                currentTotalBackers += 1
                totalBackers.innerHTML = currentTotalBackers.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                progressBar.value = currenAmountBacked / 1000
            } else if (currentBtn.classList.contains("black") &&  currentBlackRemaining >= 1) {
                currentBlackRemaining -= 1
                blackRemaining.innerHTML = currentBlackRemaining;
                currenAmountBacked += 25
                amountBacked.innerHTML = `$${currenAmountBacked.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
                currentTotalBackers += 1
                totalBackers.innerHTML = urrentTotalBackers.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }

        });
    });

    console.log(currenAmountBacked, currentBambooRemaining, currentBlackRemaining, currentTotalBackers )

    backProject.addEventListener("click", function(){
            overlay.classList.remove("mb-close");
            modalSelection.classList.remove("mb-close");
        });

    modalClose.addEventListener("click", function(){
        overlay.classList.add("mb-close");
        modalCompleted.classList.add("mb-close");
    });

    modalSelectionClose.addEventListener("click", function(){
        overlay.classList.add("mb-close");
        modalSelection.classList.add("mb-close");
    });


// donation related stuff

    const donationCards = document.querySelector(".donation__cards");
    const noRewardCard = document.querySelector("#noReward");
    const donationCardsSubmit = document.querySelector(".donation__cards-submit");

    if (noRewardCard.checked) {
        donationCards.style.border = "2px solid #3AB4AB";
    }

    noRewardCard.addEventListener("change", function(){
        if (noRewardCard.checked) {
            donationCards.style.border = "2px solid #3AB4AB";
            donationCardsSubmit.classList.remove("mb-close");
        } else {
            donationCards.style.border = "1px solid #F2F2F2";
            donationCardsSubmit.classList.add("mb-close")
        }
    });


// donation stats 




}