import IMask from "imask";

export const digitsMask = (phone) => {
  IMask(phone, {
    mask: "+{375} (00) 000-00-00",
  });
};
