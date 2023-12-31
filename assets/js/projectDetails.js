document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('createIssueModal');
  
    function openCreateIssueModal() {
      modal.style.display = 'block';
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 100);
    }
  
    function closeCreateIssueModal() {
      modal.style.opacity = '0';
      modal.style.transform = 'translate(-50%, -50%) scale(0)';
  
      setTimeout(() => {
        modal.style.display = 'none';
      }, 500); // Waiting for the transition to complete before hiding
    }
  
    window.openCreateIssueModal = openCreateIssueModal;
    window.closeCreateIssueModal = closeCreateIssueModal;
  });
  