const SVG_NS = 'http://www.w3.org/2000/svg';

const svgVk = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97312 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92644 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70111C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
</g>
</svg>
`;

const svgFb = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
</g>
</svg>
`;

const svgPhone = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<circle cx="8" cy="8" r="8" fill="#9873FF"/>
<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
</g>
</svg>
`;

const svgEmail = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
</svg>
`;

const svgOther = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
</svg>
`;

const createTooltip = (type, value) => {
  const tooltip = document.createElement('div');
  const tooltipType = document.createElement('span');
  const tooltipValue = document.createElement('a');

  tooltip.classList.add('contact__tooltip', 'tooltip');
  tooltipType.classList.add('contact__tooltip-type');
  tooltipValue.classList.add('contact__tooltip-value');

  tooltipType.textContent = `${type}: `;
  tooltipValue.textContent = value;

  tooltip.append(tooltipType, tooltipValue);

  return {
    tooltip,
    tooltipType,
    tooltipValue,
  };
};

const createContactLink = (type, value, svg, item) => {
  const { tooltip, tooltipValue } = createTooltip(type, value);
  const element = document.createElement('a');

  element.classList.add('contacts__link');
  element.innerHTML = svg;

  if (type === 'Email') {
    element.href = `mailto:${value.trim()}`;
  } else if (type === 'Телефон') {
    element.href = `tel:${value.trim()}`;
    tooltipValue.style.color = 'var(--color-white-1)';
    tooltipValue.style.textDecoration = 'none';
  } else {
    element.href = value.trim();
  }

  element.append(tooltip);
  item.append(element);
};

const createContactItemByType = (type, value, item) => {
  switch (type) {
    case 'Телефон':
    case 'Доп. телефон':
      createContactLink(type, value, svgPhone, item);
      break;
    case 'Facebook':
      createContactLink(type, value, svgFb, item);
      break;
    case 'VK':
      createContactLink(type, value, svgVk, item);
      break;
    case 'Email':
      createContactLink(type, value, svgEmail, item);
      break;
    case 'Другое':
    default:
      createContactLink(type, value, svgOther, item);
      break;
  }
};

const getFormattedDate = (date) => {
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return newDate.toLocaleString('numeric', options);
};

const getFormattedTime = (date) => {
  const newDate = new Date(date);
  const options = { hour: 'numeric', minute: 'numeric' };
  return newDate.toLocaleString('numeric', options);
};

const createSortIcon = () => {
  const span = document.createElement('span');
  const boxWidth = 12;
  const boxHeight = 12;
  const iconSort = document.createElementNS(SVG_NS, 'svg');
  const g = document.createElementNS(SVG_NS, 'g');
  const defs = document.createElementNS(SVG_NS, 'defs');
  const clipPath = document.createElementNS(SVG_NS, 'clipPath');
  const rect = document.createElementNS(SVG_NS, 'rect');
  const path = document.createElementNS(SVG_NS, 'path');

  span.classList.add('client__icon-sort');
  iconSort.classList.add('client__icon-arrow');
  iconSort.setAttributeNS(null, 'viebox', `0 0 ${boxWidth / 2} ${boxHeight / 2}`);
  iconSort.setAttributeNS(null, 'width', String(boxWidth));
  iconSort.setAttributeNS(null, 'height', String(boxHeight));
  iconSort.setAttributeNS(null, 'fill', 'none');
  g.setAttributeNS(null, 'clip-path', 'url(#clip0_211_4869)');
  path.setAttributeNS(
    null,
    'd',
    'M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z'
  );
  path.setAttributeNS(null, 'fill', '#9873FF');
  rect.setAttributeNS(null, 'width', String(boxWidth));
  rect.setAttributeNS(null, 'width', String(boxHeight));
  rect.setAttributeNS(null, 'fill', '#ffffff');
  clipPath.setAttribute(null, 'id', 'clip0_211_4869');

  g.append(path);
  defs.append(clipPath, rect);
  iconSort.append(g, defs);
  span.append(iconSort);

  return span;
};

const createIconBtnAdd = () => {
  const boxWidth = 23;
  const boxHeight = 16;
  const iconAdd = document.createElementNS(SVG_NS, 'svg');
  const path = document.createElementNS(SVG_NS, 'path');

  iconAdd.href = '/';
  iconAdd.classList.add('table__clients__icon');
  iconAdd.setAttributeNS(null, 'viebox', `0 0 ${boxWidth / 2} ${boxHeight / 2}`);
  iconAdd.setAttributeNS(null, 'width', String(boxWidth));
  iconAdd.setAttributeNS(null, 'height', String(boxHeight));
  iconAdd.setAttributeNS(null, 'fill', 'none');
  path.setAttributeNS(
    null,
    'd',
    'M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z'
  );
  iconAdd.append(path);

  return iconAdd;
};

const createIconCloseBtn = () => {
  const boxWidth = 17;
  const boxHeight = 17;
  const iconBtnClose = document.createElementNS(SVG_NS, 'svg');
  const path = document.createElementNS(SVG_NS, 'path');

  iconBtnClose.setAttributeNS(null, 'viebox', '0 0 17 17');
  iconBtnClose.setAttributeNS(null, 'width', String(boxWidth));
  iconBtnClose.setAttributeNS(null, 'height', String(boxHeight));
  iconBtnClose.setAttributeNS(null, 'fill', 'none');
  path.setAttributeNS(
    null,
    'd',
    'M16.2332 1.73333L15.2665 0.766664L8.49985 7.53336L1.73318 0.766696L0.766515 1.73336L7.53318 8.50003L0.766542 15.2667L1.73321 16.2333L8.49985 9.46669L15.2665 16.2334L16.2332 15.2667L9.46651 8.50003L16.2332 1.73333Z'
  );
  path.setAttributeNS(null, 'fill-rule', 'evenodd');
  path.setAttributeNS(null, 'clip-rule', 'evenodd');

  iconBtnClose.classList.add('modal__btn-icon');
  iconBtnClose.append(path);

  return iconBtnClose;
};

const createIconBtnAddDefault = () => {
  const boxWidth = 16;
  const boxHeight = 16;
  const iconAddDefault = document.createElementNS(SVG_NS, 'svg');
  const g = document.createElementNS(SVG_NS, 'g');
  const defs = document.createElementNS(SVG_NS, 'defs');
  const clipPath = document.createElementNS(SVG_NS, 'clipPath');
  const rect = document.createElementNS(SVG_NS, 'rect');
  const path = document.createElementNS(SVG_NS, 'path');

  iconAddDefault.setAttributeNS(null, 'viebox', `0 0 ${boxWidth / 2} ${boxHeight / 2}`);
  iconAddDefault.setAttributeNS(null, 'width', String(boxWidth));
  iconAddDefault.setAttributeNS(null, 'height', String(boxHeight));
  iconAddDefault.setAttributeNS(null, 'fill', 'none');
  g.setAttributeNS(null, 'clip-path', 'url(#clip0_124_2)');
  path.setAttributeNS(
    null,
    'd',
    'M7.99998 4.66683C7.63331 4.66683 7.33331 4.96683 7.33331 5.3335V7.3335H5.33331C4.96665 7.3335 4.66665 7.6335 4.66665 8.00016C4.66665 8.36683 4.96665 8.66683 5.33331 8.66683H7.33331V10.6668C7.33331 11.0335 7.63331 11.3335 7.99998 11.3335C8.36665 11.3335 8.66665 11.0335 8.66665 10.6668V8.66683H10.6666C11.0333 8.66683 11.3333 8.36683 11.3333 8.00016C11.3333 7.6335 11.0333 7.3335 10.6666 7.3335H8.66665V5.3335C8.66665 4.96683 8.36665 4.66683 7.99998 4.66683ZM7.99998 1.3335C4.31998 1.3335 1.33331 4.32016 1.33331 8.00016C1.33331 11.6802 4.31998 14.6668 7.99998 14.6668C11.68 14.6668 14.6666 11.6802 14.6666 8.00016C14.6666 4.32016 11.68 1.3335 7.99998 1.3335ZM7.99998 13.3335C5.05998 13.3335 2.66665 10.9402 2.66665 8.00016C2.66665 5.06016 5.05998 2.66683 7.99998 2.66683C10.94 2.66683 13.3333 5.06016 13.3333 8.00016C13.3333 10.9402 10.94 13.3335 7.99998 13.3335Z'
  );
  path.setAttributeNS(null, 'fill', '#9873FF');
  rect.setAttributeNS(null, 'width', String(boxWidth));
  rect.setAttributeNS(null, 'width', String(boxHeight));
  clipPath.setAttribute(null, 'id', 'clip0_124_2');

  iconAddDefault.classList.add('modal__icon-add-default');

  g.append(path);
  defs.append(clipPath, rect);
  iconAddDefault.append(g, defs);

  return iconAddDefault;
};

const createIconBtnAddActive = () => {
  const boxWidth = 16;
  const boxHeight = 16;
  const iconAddActive = document.createElementNS(SVG_NS, 'svg');
  const g = document.createElementNS(SVG_NS, 'g');
  const defs = document.createElementNS(SVG_NS, 'defs');
  const clipPath = document.createElementNS(SVG_NS, 'clipPath');
  const rect = document.createElementNS(SVG_NS, 'rect');
  const path = document.createElementNS(SVG_NS, 'path');

  iconAddActive.setAttributeNS(null, 'viebox', `0 0 ${boxWidth / 2} ${boxHeight / 2}`);
  iconAddActive.setAttributeNS(null, 'width', String(boxWidth));
  iconAddActive.setAttributeNS(null, 'height', String(boxHeight));
  iconAddActive.setAttributeNS(null, 'fill', 'none');
  g.setAttributeNS(null, 'clip-path', 'url(#clip0_124_14)');
  path.setAttributeNS(
    null,
    'd',
    'M1.33331 8.00016C1.33331 4.32016 4.31998 1.3335 7.99998 1.3335C11.68 1.3335 14.6666 4.32016 14.6666 8.00016C14.6666 11.6802 11.68 14.6668 7.99998 14.6668C4.31998 14.6668 1.33331 11.6802 1.33331 8.00016ZM7.33329 5.33366C7.33329 4.96699 7.63329 4.66699 7.99996 4.66699C8.36663 4.66699 8.66663 4.96699 8.66663 5.33366V7.33366H10.6666C11.0333 7.33366 11.3333 7.63366 11.3333 8.00033C11.3333 8.36699 11.0333 8.66699 10.6666 8.66699H8.66663V10.667C8.66663 11.0337 8.36663 11.3337 7.99996 11.3337C7.63329 11.3337 7.33329 11.0337 7.33329 10.667V8.66699H5.33329C4.96663 8.66699 4.66663 8.36699 4.66663 8.00033C4.66663 7.63366 4.96663 7.33366 5.33329 7.33366H7.33329V5.33366Z'
  );
  path.setAttributeNS(null, 'fill', '#9873FF');
  path.setAttributeNS(null, 'fill-rule', 'evenodd');
  path.setAttributeNS(null, 'clip-rule', 'evenodd');
  rect.setAttributeNS(null, 'width', String(boxWidth));
  rect.setAttributeNS(null, 'width', String(boxHeight));
  rect.setAttributeNS(null, 'fill', 'white');
  clipPath.setAttribute(null, 'id', 'clip0_124_14');

  iconAddActive.classList.add('modal__icon-add-active');

  g.append(path);
  defs.append(clipPath, rect);
  iconAddActive.append(g, defs);

  return iconAddActive;
};

const createContactDeleteIcon = () => {
  const boxWidth = 16;
  const boxHeight = 16;
  const iconDeleteBtn = document.createElementNS(SVG_NS, 'svg');
  const g = document.createElementNS(SVG_NS, 'g');
  const defs = document.createElementNS(SVG_NS, 'defs');
  const clipPath = document.createElementNS(SVG_NS, 'clipPath');
  const rect = document.createElementNS(SVG_NS, 'rect');
  const path = document.createElementNS(SVG_NS, 'path');

  iconDeleteBtn.setAttributeNS(null, 'viebox', `0 0 ${boxWidth / 2} ${boxHeight / 2}`);
  iconDeleteBtn.setAttributeNS(null, 'width', String(boxWidth));
  iconDeleteBtn.setAttributeNS(null, 'height', String(boxHeight));
  g.setAttributeNS(null, 'clip-path', 'url(#clip0_121_1083)');
  path.setAttributeNS(
    null,
    'd',
    'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z'
  );
  path.setAttributeNS(null, 'fill-rule', 'evenodd');
  path.setAttributeNS(null, 'clip-rule', 'evenodd');
  rect.setAttributeNS(null, 'width', String(boxWidth));
  rect.setAttributeNS(null, 'width', String(boxHeight));
  clipPath.setAttribute(null, 'id', 'clip0_121_1083');

  iconDeleteBtn.classList.add('contact__btn-delete-icon');

  g.append(path);
  defs.append(clipPath, rect);
  iconDeleteBtn.append(g, defs);

  return iconDeleteBtn;
};

const createContactField = () => {
  const contact = document.createElement('div');
  const contactType = document.createElement('div');
  const contactNameBtn = document.createElement('button');
  const contactList = document.createElement('ul');
  const contactPhone = document.createElement('li');
  const contactEmail = document.createElement('li');
  const contactVk = document.createElement('li');
  const contactFc = document.createElement('li');
  const contactOther = document.createElement('li');
  const contactInput = document.createElement('input');
  const contactDeleteBtn = document.createElement('button');
  const contactTooltip = document.createElement('span');
  const contactIconDeleteBtn = createContactDeleteIcon();

  contact.classList.add('modal__contact', 'contact');
  contactTooltip.classList.add('contact__tooltip', 'tooltip');
  contactType.classList.add('contact__type');
  contactNameBtn.classList.add('btn-resert', 'btn', 'contact__btn-name');
  contactList.classList.add('contact__list', 'list-reset');
  contactPhone.classList.add('contact__item');
  contactEmail.classList.add('contact__item');
  contactVk.classList.add('contact__item');
  contactFc.classList.add('contact__item');
  contactOther.classList.add('contact__item');
  contactInput.classList.add('contact__input');
  contactDeleteBtn.classList.add('btn-reset', 'btn', 'contact__btn-delete');

  contactNameBtn.innerHTML = 'Телефон';
  contactTooltip.innerHTML = 'Удалить контакт';
  contactPhone.innerHTML = 'Доп. телефон';
  contactEmail.innerHTML = 'Email';
  contactVk.innerHTML = 'VK';
  contactFc.innerHTML = 'Facebook';
  contactOther.innerHTML = 'Другое';
  contactInput.placeholder = 'Введите данные контакта';
  contactInput.type = 'text';

  contactDeleteBtn.append(contactIconDeleteBtn);
  contactDeleteBtn.append(contactTooltip);
  contactList.append(contactPhone, contactEmail, contactVk, contactFc, contactOther);
  contactType.append(contactNameBtn, contactList);
  contact.append(contactType, contactInput, contactDeleteBtn);

  contactDeleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contact.remove();
    const addBtn = document.querySelector('.modal__btn-add-contact');
    if (addBtn) {
      addBtn.classList.add('modal__btn-add-contact--active');
    }
  });

  contactNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactList.classList.toggle('contact__list--active');
    contactNameBtn.classList.toggle('contact__list--active');
  });

  contactType.addEventListener('mouseleave', () => {
    contactList.classList.remove('contact__list--active');
    contactNameBtn.classList.remove('contact__list--active');
  });

  const setType = (typeEl) => {
    typeEl.addEventListener('click', () => {
      contactNameBtn.textContent = typeEl.textContent;
      contactList.classList.remove('contact__list--active');
      contactNameBtn.classList.remove('contact__list--active');
    });
  };

  [contactPhone, contactEmail, contactVk, contactFc, contactOther].forEach(setType);

  return {
    contact,
    contactNameBtn,
    contactInput,
    contactDeleteBtn,
  };
};

const createClientForm = () => {
  const removeClass = 'modal__btn-add-contact--active';

  const formTitle = document.createElement('h2');
  const btnClose = document.createElement('button');
  const modalHeader = document.createElement('div');
  const iconBtnClose = createIconCloseBtn();
  const formClient = document.createElement('form');
  const labelLastName = document.createElement('label');
  const labelName = document.createElement('label');
  const labelSurname = document.createElement('label');
  const markerLastName = document.createElement('span');
  const markerName = document.createElement('span');
  const inputLastName = document.createElement('input');
  const inputName = document.createElement('input');
  const inputSurname = document.createElement('input');
  const btnAddContact = document.createElement('button');
  const iconBtnAddDefault = createIconBtnAddDefault();
  const iconBtnAddActive = createIconBtnAddActive();
  const contactBtnSvgDefault = document.createElement('span');
  const contactBtnSvgHover = document.createElement('span');
  const buttonsWrapper = document.createElement('div');
  const btnSave = document.createElement('button');
  const btnCancel = document.createElement('button');
  const selectContactBlock = document.createElement('div');
  const formFloatingLastName = document.createElement('div');
  const formFloatingName = document.createElement('div');
  const formFloatingSurname = document.createElement('div');

  const errorForForm = document.createElement('div');
  const wrongMassage = document.createElement('span');
  const writeLastName = document.createElement('span');
  const writeName = document.createElement('span');
  const writeSurname = document.createElement('span');
  const requiredValue = document.createElement('span');
  const requiredContacts = document.createElement('span');

  modalHeader.classList.add('modal__header');
  formTitle.classList.add('modal__title');
  btnClose.classList.add('btn-reset', 'btn', 'modal__btn-close');
  formClient.classList.add('modal__form');
  labelLastName.classList.add('modal__label-last-name');
  labelName.classList.add('modal__label-name');
  labelSurname.classList.add('modal__label-surname');
  markerLastName.classList.add('modal__label-last-name-marker');
  markerName.classList.add('modal__label-name-marker');
  inputLastName.classList.add('modal__input', 'modal__input-last-name');
  inputName.classList.add('modal__input', 'modal__input-name');
  inputSurname.classList.add('modal__input', 'modal__input-surname');
  btnAddContact.classList.add('btn-reset', 'btn', 'modal__btn-add-contact', removeClass);
  contactBtnSvgDefault.classList.add('modal__svg', 'modal__svg--default', 'modal__svg--active');
  contactBtnSvgHover.classList.add('modal__svg', 'modal__svg--hover');
  buttonsWrapper.classList.add('modal__wrapper-btns');
  btnSave.classList.add('btn-reset', 'btn', 'modal__btn-save');
  btnCancel.classList.add('btn-reset', 'btn', 'modal__btn-cancel');
  formFloatingLastName.classList.add('modal__floating');
  formFloatingName.classList.add('modal__floating');
  formFloatingSurname.classList.add('modal__floating');
  selectContactBlock.classList.add('modal__select-block');

  errorForForm.classList.add('modal__error');
  wrongMassage.id = 'wrong-massage';
  writeLastName.id = 'write-last-name';
  writeName.id = 'write-name';
  writeSurname.id = 'write-surname';
  requiredValue.id = 'required-value';
  requiredContacts.id = 'required-contacts';

  labelLastName.htmlFor = 'floating-last-name';
  labelName.htmlFor = 'floating-name';
  labelSurname.htmlFor = 'floating-surname';
  inputLastName.id = 'floating-last-name';
  inputName.id = 'floating-name';
  inputSurname.id = 'floating-surname';
  formTitle.innerHTML = 'Новый клиент';
  labelLastName.innerHTML = 'Фамилия';
  labelName.innerHTML = 'Имя';
  labelSurname.innerHTML = 'Отчество';
  markerLastName.innerHTML = '*';
  markerName.innerHTML = '*';
  inputLastName.type = 'text';
  inputName.type = 'text';
  inputSurname.type = 'text';
  inputLastName.placeholder = 'Фамилия';
  inputName.placeholder = 'Имя';
  inputSurname.placeholder = 'Отчество';
  btnAddContact.innerHTML = 'Добавить контакт';
  btnSave.innerHTML = 'Сохранить';
  btnCancel.innerHTML = 'Отмена';

  labelLastName.append(markerLastName);
  labelName.append(markerName);

  formFloatingLastName.append(inputLastName, labelLastName);
  formFloatingName.append(inputName, labelName);
  formFloatingSurname.append(inputSurname, labelSurname);

  btnClose.append(iconBtnClose);
  contactBtnSvgDefault.append(iconBtnAddDefault);
  contactBtnSvgHover.append(iconBtnAddActive);
  btnAddContact.append(contactBtnSvgDefault, contactBtnSvgHover);
  selectContactBlock.append(btnAddContact);
  modalHeader.append(formTitle, btnClose);

  buttonsWrapper.append(btnSave, btnCancel);
  errorForForm.append(
    wrongMassage,
    writeLastName,
    writeName,
    writeSurname,
    requiredValue,
    requiredContacts
  );
  formClient.append(
    modalHeader,
    formFloatingLastName,
    formFloatingName,
    formFloatingSurname,
    selectContactBlock,
    errorForForm,
    buttonsWrapper
  );

  btnAddContact.addEventListener('click', (e) => {
    e.preventDefault();

    const contactsItems = document.getElementsByClassName('contact');

    const contactItem = createContactField();
    selectContactBlock.prepend(contactItem.contact);
    selectContactBlock.style.backgroundColor = 'var(--color-grey-opacity-30)';

    if (contactsItems.length >= 9) {
      btnAddContact.classList.remove(removeClass);
    }

    const modalContent = document.querySelector('.site-modal__content');
    if (modalContent) {
      modalContent.style.top = contactsItems.length >= 5 ? '70%' : '50%';
    }
  });

  btnAddContact.addEventListener('mousemove', () => {
    contactBtnSvgDefault.classList.remove('modal__svg--active');
    contactBtnSvgHover.classList.add('modal__svg--active');
  });

  btnAddContact.addEventListener('mouseleave', () => {
    contactBtnSvgDefault.classList.add('modal__svg--active');
    contactBtnSvgHover.classList.remove('modal__svg--active');
  });

  return {
    formTitle,
    btnClose,
    formClient,
    inputLastName,
    inputName,
    inputSurname,
    btnAddContact,
    selectContactBlock,
    btnSave,
    btnCancel,
  };
};

const validateClientForm = () => {
  const userLastName = document.getElementById('floating-last-name');
  const userName = document.getElementById('floating-name');
  const userSurname = document.getElementById('floating-surname');
  const wrongMessage = document.getElementById('wrong-massage');
  const writeLastName = document.getElementById('write-last-name');
  const writeName = document.getElementById('write-name');
  const writeSurname = document.getElementById('write-surname');
  const requiredValue = document.getElementById('required-value');
  const requiredContacts = document.getElementById('required-contacts');
  const validateArr = [
    wrongMessage,
    writeLastName,
    writeName,
    writeSurname,
    requiredValue,
    requiredContacts,
  ];
  const regexp = /[^а-яА-ЯёЁ]+$/g;

  const onInputValue = (input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--color-grey-2)';
      validateArr.forEach((item) => {
        item.textContent = '';
      });
    });

    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--color-grey-2)';
      validateArr.forEach((item) => {
        item.textContent = '';
      });
    };

    input.onchange = () => {
      input.style.borderColor = 'var(--color-grey-2)';

      if (userLastName.value && userName.value && userSurname.value) {
        validateArr.forEach((item) => {
          item.textContent = '';
        });
      }
    };
  };

  [userLastName, userName, userSurname].forEach(onInputValue);

  const checkRequiredName = (input, message, name) => {
    if (!input.value) {
      input.style.borderColor = 'var(--color-red-1)';
      message.textContent = `Введите ${name} клиента!`;
      return false;
    }
    message.textContent = '';
    return true;
  };

  const checkByRegexp = (input, re) => {
    if (re.test(input.value)) {
      input.style.borderColor = 'var(--color-red-1)';
      wrongMessage.textContent = 'Недопустимые символы!';
      return false;
    }

    return true;
  };

  if (!checkRequiredName(userLastName, writeLastName, 'фамилию')) return false;
  if (!checkRequiredName(userName, writeName, 'имя')) return false;
  if (!checkRequiredName(userSurname, writeSurname, 'Отчество')) return false;
  if (!checkByRegexp(userLastName, regexp)) return false;
  if (!checkByRegexp(userName, regexp)) return false;
  if (!checkByRegexp(userSurname, regexp)) return false;

  return true;
};

const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('write-name');
  const onlyNumbers = /[^0-9]+$/g;
  const onlyEmail = /[^a-zA-Z@.]+$/g;

  const onInputValue = (input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--color-grey-2)';
      writeValue.textContent = '';
    });

    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--color-grey-2)';
      writeValue.textContent = '';
    };
  };

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = 'var(--color-red-1)';
  };

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage('Заполните все поля контактов!', writeValue, contactInput);
    return false;
  }

  switch (contactType.innerHTML) {
    case 'Телефон':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Допустимы только цифры!', writeValue, contactInput);
        return false;
      }
      if (contactInput.value.length !== 11) {
        showErrorMessage('Номер должен состоять из 11 цифр!', writeValue, contactInput);
        return false;
      }
      return true;
    case 'Email':
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage('Неправильный Email!', writeValue, contactInput);
        return false;
      }
      return true;
    default:
      return true;
  }
};

const createDeleteClientModal = () => {
  const deleteModalContent = document.createElement('div');
  const deleteHeader = document.createElement('div');
  const modalClose = document.createElement('button');
  const iconBtnClose = createIconCloseBtn();
  const deleteModalTitle = document.createElement('h2');
  const deleteModalText = document.createElement('p');
  const deleteModal = document.createElement('div');
  const deleteClient = document.createElement('button');
  const deleteModalBack = document.createElement('button');

  deleteModal.classList.add('site-modal', 'modal', 'delete-modal', 'modal--active');
  deleteModalContent.classList.add('delete-modal__content', 'site-modal__content', 'modal--active');
  deleteHeader.classList.add('delete-modal__header', 'modal__header', 'flex');
  deleteModalText.classList.add('delete-modal__text');
  deleteModalTitle.classList.add('delete-modal__title', 'modal__title');
  deleteClient.classList.add('delete-modal__delete', 'btn-reset', 'btn');
  deleteModalBack.classList.add('btn-reset', 'btn', 'delete-modal__back');
  modalClose.classList.add('btn-reset', 'btn', 'modal__btn-close');

  deleteModalTitle.textContent = 'Удалить клиента';
  deleteModalText.textContent = 'Вы действительно хотите удалить данного клиента?';
  deleteClient.textContent = 'Удалить';
  deleteModalBack.textContent = 'Отмена';

  modalClose.append(iconBtnClose);

  deleteHeader.append(deleteModalTitle, modalClose);
  deleteModalContent.append(deleteHeader, deleteModalText, deleteClient, deleteModalBack);
  deleteModal.append(deleteModalContent);

  modalClose.addEventListener('click', () => deleteModal.remove());
  deleteModalBack.addEventListener('click', () => deleteModal.remove());

  window.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
      deleteModal.remove();
    }
  });

  return {
    deleteModal,
    deleteClient,
  };
};

export class ClientsSection {
  constructor({ clients, api, onChange }) {
    this.clients = Array.isArray(clients) ? clients : [];
    this.api = api;
    this.onChange = typeof onChange === 'function' ? onChange : null;

    this.mainElement = null;
    this.tbody = null;
  }

  render() {
    if (this.mainElement) return this.mainElement;

    const main = document.createElement('main');
    main.classList.add('main');

    const container = document.createElement('div');
    container.classList.add('container', 'clients__container');

    const section = document.createElement('section');
    const wrapper = document.createElement('div');
    section.classList.add('clients-data');
    wrapper.classList.add('clients-wrapper');

    const title = document.createElement('h1');
    title.classList.add('clients-data__title', 'title');
    title.innerHTML = 'Клиенты';

    const table = this.#createTable();
    const addBtnWrapper = this.#createAddButton();

    wrapper.append(table);
    section.append(title, wrapper, addBtnWrapper);
    container.append(section);
    main.append(container);

    this.mainElement = main;
    this.#renderClients();
    this.#initSorting(table);

    return main;
  }

  updateClients(clients) {
    this.clients = Array.isArray(clients) ? clients : [];
    this.#renderClients();
  }

  #createTable() {
    const table = document.createElement('table');
    table.classList.add('table-clients', 'table');

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');

    const thId = document.createElement('th');
    const thFio = document.createElement('th');
    const thCreateDate = document.createElement('th');
    const thUpdateDate = document.createElement('th');
    const thContacts = document.createElement('th');
    const thActions = document.createElement('th');

    const btnId = document.createElement('button');
    const btnFio = document.createElement('button');
    const btnCreate = document.createElement('button');
    const btnUpdate = document.createElement('button');

    const iconForSortId = createSortIcon();
    const iconForSortFio = createSortIcon();
    const spanAZ = document.createElement('span');
    const iconForSortCreateDate = createSortIcon();
    const iconForSortUpdateDate = createSortIcon();

    thead.classList.add('table__thead');
    headRow.classList.add('table__row-head');
    thId.classList.add('table__id');
    thFio.classList.add('table__fio');
    thCreateDate.classList.add('table__create-date');
    thUpdateDate.classList.add('table__update-date');
    thContacts.classList.add('table__contacts');
    thActions.classList.add('table__action');

    btnId.classList.add('btn-reset', 'btn', 'table__btn-id-sort', 'table-sort');
    btnFio.classList.add('btn-reset', 'btn', 'table__btn-fio-sort', 'table-sort');
    spanAZ.classList.add('table__letters');
    btnCreate.classList.add('btn-reset', 'btn', 'table__btn-create-sort', 'table-sort');
    btnUpdate.classList.add('btn-reset', 'btn', 'table__btn-update-sort', 'table-sort');

    btnId.setAttribute('data-type', 'id');
    btnFio.setAttribute('data-type', 'name');
    btnCreate.setAttribute('data-type', 'create');
    btnUpdate.setAttribute('data-type', 'update');

    btnId.innerHTML = 'ID';
    btnFio.innerHTML = 'Фамилия Имя Отчество';
    spanAZ.innerHTML = 'А-Я';
    btnCreate.innerHTML = 'Дата и время создания';
    btnUpdate.innerHTML = 'Последние изменения';
    thContacts.innerHTML = 'Контакты';
    thActions.innerHTML = 'Действия';

    btnId.append(iconForSortId);
    btnFio.append(iconForSortFio, spanAZ);
    btnCreate.append(iconForSortCreateDate);
    btnUpdate.append(iconForSortUpdateDate);

    thId.append(btnId);
    thFio.append(btnFio);
    thCreateDate.append(btnCreate);
    thUpdateDate.append(btnUpdate);

    headRow.append(thId, thFio, thCreateDate, thUpdateDate, thContacts, thActions);
    thead.append(headRow);

    const tbody = document.createElement('tbody');
    tbody.classList.add('table__tbody');

    this.tbody = tbody;

    table.append(thead, tbody);

    return table;
  }

  #createAddButton() {
    const wrapper = document.createElement('div');
    const addBtn = document.createElement('button');
    const iconBtn = createIconBtnAdd();

    wrapper.classList.add('clients-data__wrapper', 'flex');
    addBtn.classList.add('btn-reset', 'btn', 'clients-data__btn');

    addBtn.innerHTML = 'Добавить клиента';
    addBtn.append(iconBtn);
    wrapper.append(addBtn);

    addBtn.addEventListener('click', () => {
      const modal = this.#createCreateClientModal();
      document.body.append(modal);
    });

    return wrapper;
  }

  #createCreateClientModal() {
    const modalForm = createClientForm();
    const modal = document.createElement('div');

    modal.classList.add('site-modal', 'modal', 'modal__window', 'modal--active');
    modalForm.formClient.classList.add('site-modal__content', 'modal__form', 'modal--active');

    modal.append(modalForm.formClient);

    modalForm.formClient.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateClientForm()) {
        return;
      }

      const contactTypes = document.querySelectorAll('.contact__btn-name');
      const contactValues = document.querySelectorAll('.contact__input');
      const contactsList = [];
      const clientObj = {};

      for (let i = 0; i < contactValues.length; i += 1) {
        if (!validateClientContact(contactTypes[i], contactValues[i])) {
          return;
        }
        contactsList.push({
          type: contactTypes[i].innerHTML,
          value: contactValues[i].value,
        });
      }

      clientObj.lastName = modalForm.inputLastName.value;
      clientObj.name = modalForm.inputName.value;
      clientObj.surname = modalForm.inputSurname.value;
      clientObj.contacts = contactsList;

      try {
        await this.api.create(clientObj);
        modal.remove();
        if (this.onChange) {
          this.onChange();
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.error('Failed to create client', error);
        }
      }
    });

    modalForm.btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      modal.remove();
    });

    modalForm.btnCancel.addEventListener('click', (e) => {
      e.preventDefault();
      modal.remove();
    });

    document.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });

    return modal;
  }

  #createEditClientModal(clientData) {
    const editModal = document.createElement('div');
    const editModalContent = document.createElement('div');
    const form = createClientForm();
    const titleID = document.createElement('span');

    titleID.classList.add('modal__id');
    editModal.classList.add('site-modal', 'modal', 'modal__window', 'modal--active');
    form.formClient.classList.add('modal__form', 'site-modal__content', 'modal__content', 'modal--active');

    titleID.innerHTML = `ID: ${clientData.id.substring(0, 6)}`;
    form.formTitle.innerHTML = 'Изменить данные';
    form.btnCancel.innerHTML = 'Удалить клиента';

    form.btnCancel.addEventListener('click', (e) => {
      e.preventDefault();

      const deleteClientInModal = createDeleteClientModal();
      document.body.append(deleteClientInModal.deleteModal);

      deleteClientInModal.deleteClient.addEventListener('click', async () => {
        try {
          await this.api.delete(clientData.id);
          const row = document.getElementById(clientData.id);
          if (row) row.remove();
          deleteClientInModal.deleteModal.remove();
          editModal.remove();
          if (this.onChange) {
            this.onChange();
          }
        } catch (error) {
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.error('Failed to delete client', error);
          }
        }
      });
    });

    form.btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      editModal.remove();
    });

    if (clientData.contacts.length === 10) {
      form.btnAddContact.classList.remove('modal__btn--active');
    }

    form.formClient.addEventListener('submit', async (e) => {
      e.preventDefault();

      const contactTypes = document.querySelectorAll('.contact__btn-name');
      const contactValues = document.querySelectorAll('.contact__input');
      const contactsList = [];
      const client = {};

      for (let i = 0; i < contactTypes.length; i += 1) {
        contactsList.push({
          type: contactTypes[i].innerHTML,
          value: contactValues[i].value,
        });
      }

      client.lastName = form.inputLastName.value;
      client.name = form.inputName.value;
      client.surname = form.inputSurname.value;
      client.contacts = contactsList;

      try {
        await this.api.update(clientData.id, client);
        editModal.remove();
        if (this.onChange) {
          this.onChange();
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.error('Failed to update client', error);
        }
      }
    });

    form.inputLastName.value = clientData.lastName;
    form.inputName.value = clientData.name;
    form.inputSurname.value = clientData.surname;

    clientData.contacts.forEach((contact) => {
      const { contact: contactEl, contactNameBtn, contactInput } = createContactField();

      contactNameBtn.innerHTML = contact.type;
      contactInput.value = contact.value;

      form.selectContactBlock.prepend(contactEl);
      form.selectContactBlock.style.backgroundColor = 'var(--color-white-3)';
    });

    form.formTitle.append(titleID);
    editModalContent.append(form.formClient);
    editModal.append(editModalContent);

    document.addEventListener('click', (e) => {
      if (e.target === editModal) {
        editModal.remove();
      }
    });

    return editModal;
  }

  #renderClients() {
    if (!this.tbody) return;
    this.tbody.innerHTML = '';

    this.clients.forEach((client) => {
      this.tbody.append(this.#createClientRow(client));
    });
  }

  #createClientRow(clientData) {
    const row = document.createElement('tr');
    const cellId = document.createElement('td');
    const cellFio = document.createElement('td');
    const cellCreatedDateBlock = document.createElement('td');
    const cellUpdatedDateBlock = document.createElement('td');
    const cellCreatedDate = document.createElement('td');
    const cellCreatedTime = document.createElement('td');
    const cellChangeDate = document.createElement('td');
    const cellChangeTime = document.createElement('td');
    const cellContacts = document.createElement('td');
    const cellActions = document.createElement('td');
    const btnEdit = document.createElement('button');
    const btnDelete = document.createElement('button');
    const deleteModal = createDeleteClientModal();
    const editModal = this.#createEditClientModal(clientData);

    row.classList.add('table__client', 'client', 'client__item');
    row.id = clientData.id;
    cellId.classList.add('client__id');
    cellFio.classList.add('client__fio');
    cellCreatedDateBlock.classList.add('client__date-created-block');
    cellCreatedDate.classList.add('client__date-created');
    cellCreatedTime.classList.add('client__time-created');
    cellUpdatedDateBlock.classList.add('client__date-updated-block');
    cellChangeDate.classList.add('client__date-updated');
    cellChangeTime.classList.add('client__time-updated');
    cellContacts.classList.add('client__contacts');
    cellActions.classList.add('client__actions');
    btnEdit.classList.add('btn-reset', 'btn', 'client__edit');
    btnDelete.classList.add('btn-reset', 'btn', 'client__delete');

    const fullName = `${clientData.lastName} ${clientData.name} ${clientData.surname}`;

    clientData.contacts.forEach((contactIcon) => {
      createContactItemByType(contactIcon.type, contactIcon.value, cellContacts);
    });

    cellId.textContent = clientData.id.substring(6);
    cellFio.textContent = fullName;
    cellCreatedDate.textContent = getFormattedDate(clientData.createdAt);
    cellCreatedTime.textContent = getFormattedTime(clientData.createdAt);
    cellChangeDate.textContent = getFormattedDate(clientData.updatedAt);
    cellChangeTime.textContent = getFormattedTime(clientData.updatedAt);
    btnEdit.textContent = 'Изменить';
    btnDelete.textContent = 'Удалить';

    const bindDelete = () => {
      deleteModal.deleteClient.addEventListener('click', async () => {
        try {
          await this.api.delete(clientData.id);
          const existingRow = document.getElementById(clientData.id);
          if (existingRow) existingRow.remove();
          deleteModal.deleteModal.remove();
          if (this.onChange) {
            this.onChange();
          }
        } catch (error) {
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.error('Failed to delete client', error);
          }
        }
      });
    };

    btnDelete.addEventListener('click', () => {
      bindDelete();
      document.body.append(deleteModal.deleteModal);
    });

    btnEdit.addEventListener('click', () => {
      document.body.append(editModal);
    });

    cellCreatedDateBlock.append(cellCreatedDate, cellCreatedTime);
    cellUpdatedDateBlock.append(cellChangeDate, cellChangeTime);
    cellActions.append(btnEdit, btnDelete);
    row.append(
      cellId,
      cellFio,
      cellCreatedDateBlock,
      cellUpdatedDateBlock,
      cellContacts,
      cellActions
    );

    return row;
  }

  #initSorting(table) {
    const headers = table.querySelectorAll('.table-sort');
    const tbody = table.querySelector('.table__tbody');

    const directions = Array.from(headers).map(() => '');

    const transform = (type, content) => {
      switch (type) {
        case 'id':
          return parseFloat(content);
        case 'create':
        case 'update':
          return content.split('.').reverse().join('-');
        case 'name':
        default:
          return content;
      }
    };

    const sortColumn = (index) => {
      const type = headers[index].getAttribute('data-type');
      const rows = tbody.querySelectorAll('tr');
      const direction = directions[index] || 'sortUp';
      const multiply = direction === 'sortUp' ? 1 : -1;
      const newRows = Array.from(rows);

      newRows.sort((row1, row2) => {
        const cellA = row1.querySelectorAll('td')[index].textContent;
        const cellB = row2.querySelectorAll('td')[index].textContent;

        const a = transform(type, cellA);
        const b = transform(type, cellB);

        if (a > b) return 1 * multiply;
        if (a < b) return -1 * multiply;
        return 0;
      });

      rows.forEach((row) => {
        tbody.removeChild(row);
      });

      directions[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp';

      newRows.forEach((newRow) => {
        tbody.appendChild(newRow);
      });
    };

    headers.forEach((header, index) => {
      header.addEventListener('click', () => {
        sortColumn(index);
      });
    });
  }
}

