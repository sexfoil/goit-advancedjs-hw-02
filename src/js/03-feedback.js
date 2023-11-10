import throttle from "lodash.throttle";

const LS_FEEDBACK_STATE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

const onSubmitFeedback = event => {
    if (message.value.trim().length > 0) {        
        event.preventDefault();
        console.log(fedbackState);
        localStorage.removeItem(LS_FEEDBACK_STATE_KEY);
        updateFeedbackState("");
        updateFeedbackForm();
    }        
}

const onInput = throttle(() => saveFeedbackState(), 500);


let fedbackState = getEmptyFeedbackState();
updateFeedbackState(localStorage.getItem(LS_FEEDBACK_STATE_KEY));
updateFeedbackForm();


form.addEventListener("submit", onSubmitFeedback);
email.addEventListener("input", onInput);
message.addEventListener("input", onInput);


function updateFeedbackState(jsonStr) {
    fedbackState = jsonStr ? JSON.parse(jsonStr) : getEmptyFeedbackState();    
}

function saveFeedbackState() {
    fedbackState.email = email.value;
    fedbackState.message = message.value;
    localStorage.setItem(LS_FEEDBACK_STATE_KEY, JSON.stringify(fedbackState));
}

function updateFeedbackForm() {
    email.value = fedbackState.email;
    message.value = fedbackState.message;
}

function getEmptyFeedbackState() {
    return { email: "", message: "" };
}
