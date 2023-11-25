let currentStep = 1;

function showStep(step) {
     document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
     document.getElementById(`step${step}`).classList.add('active');
}

function prevStep() {
     if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
     }
}

function nextStep() {
     const currentInput = document.getElementById(getInputId(currentStep));
     if (currentInput && !currentInput.value.trim()) {
          alert("Please fill out the current step before proceeding.");
          return;
     }

     if (currentStep < 6) {
          currentStep++;
          showStep(currentStep);
     } else {
          // Submit the form or perform any final actions here
          alert("Form submitted successfully!\n" + getFormData());
          resetForm();
          currentStep = 1;
          showStep(currentStep);
     }
}

function getInputId(step) {
     return {
          1: 'name',
          2: 'telephone',
          3: 'email',
          4: 'address',
          5: 'comment',
          6: 'someOption',
     } [step];
}

function getFormData() {
     const formData = {
          Name: document.getElementById('name').value,
          Telephone: document.getElementById('telephone').value,
          Email: document.getElementById('email').value,
          Address: document.getElementById('address').value,
          Comment: document.getElementById('comment').value,
          Gender: document.getElementById('someOption').value,
     };

     return JSON.stringify(formData, null, 2);
}

function resetForm() {
     document.querySelectorAll('input, textarea, select').forEach(el => {
          el.value = '';
     });
}