const modalService = () => {
  let resolveModal;
  let rejectModal;

  return {
    openModal() {
      return new Promise((resolve, reject) => {
        resolveModal = resolve;
        rejectModal = reject;
      });
    },

    resolve() {
      if (resolveModal) resolveModal();
    },

    reject() {
      if (rejectModal) rejectModal();
    },
  };
};

export { modalService };
