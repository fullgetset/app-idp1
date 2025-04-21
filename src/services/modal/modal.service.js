class ModalService {
  constructor() {
    this.promiseResolve = null;
    this.promiseReject = null;
  }

  openModal() {
    return new Promise((resolve, reject) => {
      this.promiseResolve = resolve;
      this.promiseReject = reject;
    });
  }

  handleYes = () => {
    if (this.promiseResolve) {
      this.promiseResolve('Пользователь нажал "Окей"');
    }
    this.promiseResolve = null;
    this.promiseReject = null;
  };

  handleNo = () => {
    if (this.promiseReject) {
      this.promiseReject('Пользователь нажал "Нет"');
    }
    this.promiseResolve = null;
    this.promiseReject = null;
  };
}

const modalService = new ModalService();

export { modalService };
