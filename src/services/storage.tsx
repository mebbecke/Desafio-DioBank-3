interface IDioBank {
  login: boolean;
  user?: string;
  email?: string;
}

const dioBank: IDioBank = {
  login: false,
  user: "",
  email: "",
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (updatedDioBank: Partial<IDioBank>): void => {
  const currentData = localStorage.getItem("diobank");
  const parsedData = currentData ? JSON.parse(currentData) : {};

  const newData = {
    ...parsedData,
    ...updatedDioBank,
  };

  localStorage.setItem("diobank", JSON.stringify(newData));
};
