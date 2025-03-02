function currentDate() {
            const date = document.getElementById('current-date');
            const now = new Date();
            const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            date.textContent = now.toLocaleDateString(undefined, options);
        }
        currentDate();
function changeBgColor(){
            const colors = ['crimson', 'green', 'pink', 'purple', 'orange', 'tomato', 'navy', 'salmon', 'azure','chocolate'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }
let navTaskCount = document.getElementById('navTaskCount');
let taskAssignedCount = document.getElementById('taskAssignedCount');
let activityLog = document.getElementById('activityLog');
let clearHistoryBtn = document.getElementById('clearBtn');
let taskContainer = document.getElementById('taskContainer');

let taskCount = parseInt(navTaskCount?.innerText) || 0;
let assignedCount = parseInt(taskAssignedCount?.innerText) || 0;

taskContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains("completed-btn")) {
        let button = event.target;
        let taskCard = button.closest(".task-card");
        let taskHeading = taskCard.querySelector(".task-title").innerText;

        alert("Board updated Successfully");

        if (taskCount > 0) {
            taskCount++;
            navTaskCount.innerText = taskCount;
        }
        if (assignedCount > 0) {
            assignedCount--;
            taskAssignedCount.innerText = assignedCount;
        }

        let currentTime = new Date().toLocaleTimeString();
        let clickedLog = document.createElement('p');
        clickedLog.innerText = `You have completed the task ${taskHeading} - ${currentTime}`;
        activityLog.appendChild(clickedLog);
        clickedLog.classList.add('activityLogContainer');
        if (assignedCount === 0) {
            alert("Congrats ! You have completed all the tasks");
        }
        button.disabled = true;
    }
});

if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = "";
    });
}