/* eslint-disable */
export const getElemArr = (arr, id) =>
  arr.reduce(
    (res, elem) =>
      Number(elem.id) === Number(id) && elem.id !== undefined && id !== undefined ? elem : res,
    false,
  );

export const isNumber = (value) => typeof value === 'number' && isFinite(value);

export const maskPhone = (event) => {
  const { keyCode } = event;
  const { value } = event.target;
  const template = '+_ (___) ___-__-__';
  const def = template.replace(/\D/g, '');
  const val = event.target.value.replace(/\D/g, '');
  let i = 0;
  let newValue = template.replace(/[_\d]/g, (a) =>
    i < val.length ? val.charAt(i++) || def.charAt(i) : a,
  );
  i = newValue.indexOf('_');
  if (i !== -1) {
    newValue = newValue.slice(0, i);
  }
  let reg = template
    .substr(0, value.length)
    .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
    .replace(/[+()]/g, '\\$&');
  reg = new RegExp(`^${reg}$`);
  if (!reg.test(value) || value.length < 5 || (keyCode > 47 && keyCode < 58)) {
    return newValue;
  }
  if (event.type === 'blur' && value.length < 5) {
    return '';
  }
  return 0;
};


export const getRole = (role) => {
  switch (role) {
    case 'cook':
      return 'Повар';
    case 'driver':
      return 'Водитель';
    case 'waiter':
      return 'Офицциант';
    default:
      return '---';
  }
};