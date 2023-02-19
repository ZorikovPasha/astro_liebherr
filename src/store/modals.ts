import { atom } from 'nanostores';

const modalsStore = atom({
  opened: {
    request: false,
    order: false,
    message: false,
    error: false,
  },
});

export default modalsStore