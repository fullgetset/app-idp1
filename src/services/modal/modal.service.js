const modalService = (() => {
  const modals = new Map();

  return {
    openModal(id) {
      return new Promise((resolve, reject) => {
        modals.set(id, { resolve, reject });
      });
    },

    resolve(id) {
      if (modals.has(id)) {
        modals.get(id).resolve();
        modals.delete(id);
      }
    },

    reject(id) {
      if (modals.has(id)) {
        modals.get(id).reject();
        modals.delete(id);
      }
    },
  };
})();

export { modalService };
