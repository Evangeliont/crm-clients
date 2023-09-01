(function () {
  const linkSvg = 'http://www.w3.org/2000/svg';

  function createCrmHeader(clients) {
    const crmHeader = document.createElement('header');
    crmHeader.classList.add('header');

    const container = createCrmContainerForHeader();
    const logo = createCrmLogo();
    const filterField = createCrmSearchFiled(clients);

    container.append(logo, filterField.form);
    crmHeader.append(container);

    return crmHeader;
  }

  function createCrmContainerForHeader() {
    const crmContainer = document.createElement('div');
    crmContainer.classList.add('header__container', 'flex');

    return crmContainer;
  }

  function createCrmLogo() {
    const crmLogoLink = document.createElement('a');
    const xmlns = linkSvg;
    const boxWidth = 50;
    const boxHeight = 50;
    const crmLogoIcon = document.createElementNS(xmlns, 'svg');
    const circle = document.createElementNS(xmlns, 'circle');
    const path = document.createElementNS(xmlns, 'path');

    crmLogoLink.href = '#';
    crmLogoLink.classList.add('header__logo');
    crmLogoIcon.classList.add('header__logo-img');

    crmLogoIcon.setAttributeNS(null, 'viewbox', "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
    crmLogoIcon.setAttributeNS(null, 'width', boxWidth);
    crmLogoIcon.setAttributeNS(null, 'height', boxHeight);
    crmLogoIcon.setAttributeNS(null, 'fill', 'none');
    circle.setAttributeNS(null, 'cx', '25px');
    circle.setAttributeNS(null, 'cy', '25px');
    circle.setAttributeNS(null, 'r', '25px');
    path.setAttributeNS(null, 'd', 'M17.2617 29.082C17.2617 30.0898 16.9102 30.8574 16.207 31.3848C15.5098 31.9121 14.4639 32.1758 13.0693 32.1758C12.3545 32.1758 11.7451 32.126 11.2412 32.0264C10.7373 31.9326 10.2656 31.792 9.82617 31.6045V29.3896C10.3242 29.624 10.8838 29.8203 11.5049 29.9785C12.1318 30.1367 12.6826 30.2158 13.1572 30.2158C14.1299 30.2158 14.6162 29.9346 14.6162 29.3721C14.6162 29.1611 14.5518 28.9912 14.4229 28.8623C14.2939 28.7275 14.0713 28.5781 13.7549 28.4141C13.4385 28.2441 13.0166 28.0479 12.4893 27.8252C11.7334 27.5088 11.1768 27.2158 10.8193 26.9463C10.4678 26.6768 10.21 26.3691 10.0459 26.0234C9.8877 25.6719 9.80859 25.2412 9.80859 24.7314C9.80859 23.8584 10.1455 23.1846 10.8193 22.71C11.499 22.2295 12.46 21.9893 13.7021 21.9893C14.8857 21.9893 16.0371 22.2471 17.1562 22.7627L16.3477 24.6963C15.8555 24.4854 15.3955 24.3125 14.9678 24.1777C14.54 24.043 14.1035 23.9756 13.6582 23.9756C12.8672 23.9756 12.4717 24.1895 12.4717 24.6172C12.4717 24.8574 12.5977 25.0654 12.8496 25.2412C13.1074 25.417 13.667 25.6777 14.5283 26.0234C15.2959 26.334 15.8584 26.624 16.2158 26.8936C16.5732 27.1631 16.8369 27.4736 17.0068 27.8252C17.1768 28.1768 17.2617 28.5957 17.2617 29.082ZM21.9287 26.6562L23.0977 25.1621L25.8486 22.1738H28.8721L24.9697 26.4365L29.1094 32H26.0156L23.1855 28.0186L22.0342 28.9414V32H19.3535V18.3242H22.0342V24.4238L21.8936 26.6562H21.9287ZM35.9824 21.9893C37.1426 21.9893 38.0508 22.4434 38.707 23.3516C39.3633 24.2539 39.6914 25.4932 39.6914 27.0693C39.6914 28.6924 39.3516 29.9492 38.6719 30.8398C37.998 31.7305 37.0781 32.1758 35.9121 32.1758C34.7578 32.1758 33.8525 31.7568 33.1963 30.9189H33.0117L32.5635 32H30.5156V18.3242H33.1963V21.5059C33.1963 21.9102 33.1611 22.5576 33.0908 23.4482H33.1963C33.8232 22.4756 34.752 21.9893 35.9824 21.9893ZM35.1211 24.1338C34.459 24.1338 33.9756 24.3389 33.6709 24.749C33.3662 25.1533 33.208 25.8242 33.1963 26.7617V27.0518C33.1963 28.1064 33.3516 28.8623 33.6621 29.3193C33.9785 29.7764 34.4766 30.0049 35.1562 30.0049C35.707 30.0049 36.1436 29.7529 36.4658 29.249C36.7939 28.7393 36.958 28.001 36.958 27.0342C36.958 26.0674 36.7939 25.3438 36.4658 24.8633C36.1377 24.377 35.6895 24.1338 35.1211 24.1338ZM41.5283 30.7432C41.5283 30.251 41.6602 29.8789 41.9238 29.627C42.1875 29.375 42.5713 29.249 43.0752 29.249C43.5615 29.249 43.9365 29.3779 44.2002 29.6357C44.4697 29.8936 44.6045 30.2627 44.6045 30.7432C44.6045 31.2061 44.4697 31.5723 44.2002 31.8418C43.9307 32.1055 43.5557 32.2373 43.0752 32.2373C42.583 32.2373 42.2021 32.1084 41.9326 31.8506C41.6631 31.5869 41.5283 31.2178 41.5283 30.7432Z');
    path.setAttributeNS(null, 'fill', '#ffffff');

    crmLogoIcon.append(circle);
    crmLogoIcon.append(path);
    crmLogoLink.append(crmLogoIcon);

    return crmLogoLink;
  }

  function createCrmSearchFiled(clients) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const inner = document.createElement('div');
    const findList = document.createElement('ul');

    form.classList.add('header__filter-form', 'filter-form');
    input.classList.add('filter-form-input');
    input.placeholder = 'Введите запрос';
    inner.classList.add('filter-from__inner');
    findList.classList.add('find-list', 'hide');

    clients.forEach(client => {
      const findItem = document.createElement('li');
      const findLink = document.createElement('a');

      findItem.classList.add('find-list__item');
      findLink.classList.add('find-list__link');

      findLink.textContent = `${client.name} ${client.surname} ${client.lastName}`;
      findLink.href = '#';

      findItem.append(findLink);
      findList.append(findItem);
    });

    const rewriteTable = async (str) => {
      const response = await findClient(str);
      const tbody = document.querySelector('.table__tbody');
      tbody.innerHTML = '';

      for (const client of response) {
        tbody.append(createCrmClientItem(client));
      }
    }

    input.addEventListener('input', async () => {
      const value = input.value.trim();
      const foundItems = document.querySelectorAll('.find-list__link');

      if (value != '') {
        foundItems.forEach(link => {
          if (link.innerText.search(value) == -1) {
            link.classList.add('hide');
            link.innerHTML = link.innerText;
          } else {
            link.onclick = () => {
              rewriteTable(value);
            }
            link.classList.remove('hide');
            findList.classList.remove('hide');
            const str = link.innerText;
            link.innerHTML = insertMark(str, link.innerText.search(value), value.length);
          }
        });
      } else {
        foundItems.forEach(link => {
          const tbody = document.querySelector('.table__tbody');
          tbody.innerHTML = '';

          clients.forEach(client => tbody.append(createCrmClientItem(client)));

          link.classList.remove('hide');
          findList.classList.add('hide');
          link.innerHTML = link.innerText;
        });
      }
    });

    const insertMark = (str, pos, len) => str
      .slice(0, pos) + '<mark>' + str
        .slice(pos, pos + len) + '</mark>' + str
          .slice(pos + len);

    inner.append(input, findList);
    form.append(inner);

    return {
      form,
      input,
      inner,
    }
  }

  function createMainTag() {
    const crmMain = document.createElement('main');
    crmMain.classList.add('main');

    const container = createCrmContainerForClients()
    const sectionClient = createCrmSectionClients();

    container.append(sectionClient);
    crmMain.append(container);

    return crmMain;
  }

  function createCrmContainerForClients() {
    const crmContainer = document.createElement('div');
    crmContainer.classList.add('container', 'clients__container');

    return crmContainer;
  }

  function createCrmSectionClients() {
    const crmSection = document.createElement('section');
    const wrapper = document.createElement('div');
    crmSection.classList.add('clients-data');
    wrapper.classList.add('clients-wrapper')

    const title = createCrmTitle('Клиенты');
    const table = createCrmTable();

    const addBtn = createCrmBtnAdd();
    const windowWindow = createCrmModalWindow();

    addBtn.addEventListener('click', () => {
      crmSection.append(windowWindow);
    })

    wrapper.append(table)
    crmSection.append(title);
    crmSection.append(wrapper);
    crmSection.append(addBtn);

    return crmSection;
  }

  function createCrmTitle(title) {
    const crmTitle = document.createElement('h1');
    crmTitle.classList.add('clients-data__title', 'title');
    crmTitle.innerHTML = title;

    return crmTitle;
  }

  function createCrmTable() {
    const crmTable = document.createElement('table');
    crmTable.classList.add('table-clients', 'table');

    const tHead = createCrmTableHead();
    const tBody = createCrmTableBody();

    crmTable.append(tHead);
    crmTable.append(tBody);

    return crmTable;
  }

  function createCrmSortIcon() {
    const createIconSortSpan = document.createElement('span');
    const xmlns = linkSvg;
    const boxWidth = 12;
    const boxHeight = 12;
    const iconSort = document.createElementNS(xmlns, 'svg');
    const g = document.createElementNS(xmlns, 'g');
    const defs = document.createElementNS(xmlns, 'defs');
    const clipPath = document.createElementNS(xmlns, 'clipPath');
    const rect = document.createElementNS(xmlns, 'rect');
    const path = document.createElementNS(xmlns, 'path');

    createIconSortSpan.classList.add('client__icon-sort');
    iconSort.classList.add('client__icon-arrow');
    iconSort.setAttributeNS(null, 'viebox', "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
    iconSort.setAttributeNS(null, 'width', boxWidth);
    iconSort.setAttributeNS(null, 'height', boxHeight);
    iconSort.setAttributeNS(null, 'fill', 'none');
    g.setAttributeNS(null, 'clip-path', 'url(#clip0_211_4869)');
    path.setAttributeNS(null, 'd', `${d = "M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z"}`);
    path.setAttributeNS(null, 'fill', '#9873FF');
    rect.setAttributeNS(null, 'width', boxWidth);
    rect.setAttributeNS(null, 'width', boxHeight);
    rect.setAttributeNS(null, 'fill', '#ffffff');
    clipPath.setAttribute(null, 'id', 'clip0_211_4869');

    g.append(path);
    defs.append(clipPath);
    defs.append(rect);
    iconSort.append(g);
    iconSort.append(defs);
    createIconSortSpan.append(iconSort);

    return {
      createIconSortSpan,
    }
  }

  function createCrmTableHead() {
    const crmTHead = document.createElement('thead');
    const crmTr = document.createElement('tr');

    const crmThID = document.createElement('th');
    const crmThFIO = document.createElement('th');
    const crmThCreateDate = document.createElement('th');
    const crmThUpdateDate = document.createElement('th');
    const crmThContacts = document.createElement('th');
    const crmThAction = document.createElement('th');

    const crmThIDBtnSort = document.createElement('button');
    const crmThFIOBtnSort = document.createElement('button');
    const crmThCreateDateBtnSort = document.createElement('button');
    const crmThUpdateDateBtnSort = document.createElement('button');

    const iconForSortId = createCrmSortIcon();
    const iconForSortFIO = createCrmSortIcon();
    const spanAZ = document.createElement('span');
    const iconForSortCreteDate = createCrmSortIcon();
    const iconForSortUpdateDate = createCrmSortIcon();

    crmTHead.classList.add('table__thead');
    crmTr.classList.add('table__row-head');
    crmThID.classList.add('table__id');
    crmThFIO.classList.add('table__fio');
    crmThCreateDate.classList.add('table__create-date');
    crmThUpdateDate.classList.add('table__update-date');
    crmThContacts.classList.add('table__contacts');
    crmThAction.classList.add('table__action');

    crmThIDBtnSort.classList.add('btn-reset', 'btn', 'table__btn-id-sort', 'table-sort');
    crmThFIOBtnSort.classList.add('btn-reset', 'btn', 'table__btn-fio-sort', 'table-sort');
    spanAZ.classList.add('table__letters')
    crmThCreateDateBtnSort.classList.add('btn-reset', 'btn', 'table__btn-create-sort', 'table-sort');
    crmThUpdateDateBtnSort.classList.add('btn-reset', 'btn', 'table__btn-update-sort', 'table-sort');

    crmThIDBtnSort.setAttribute('data-type', 'id');
    crmThFIOBtnSort.setAttribute('data-type', 'name');
    crmThCreateDateBtnSort.setAttribute('data-type', 'create');
    crmThUpdateDateBtnSort.setAttribute('data-type', 'update');

    crmThIDBtnSort.innerHTML = 'ID';
    crmThFIOBtnSort.innerHTML = 'Фамилия Имя Отчество';
    spanAZ.innerHTML = 'А-Я';
    crmThCreateDateBtnSort.innerHTML = 'Дата и время создания';
    crmThUpdateDateBtnSort.innerHTML = 'Последние изменения';
    crmThContacts.innerHTML = 'Контакты';
    crmThAction.innerHTML = 'Действия';

    crmThIDBtnSort.append(iconForSortId.createIconSortSpan);
    crmThFIOBtnSort.append(iconForSortFIO.createIconSortSpan);
    crmThFIOBtnSort.append(spanAZ);
    crmThCreateDateBtnSort.append(iconForSortCreteDate.createIconSortSpan);
    crmThUpdateDateBtnSort.append(iconForSortUpdateDate.createIconSortSpan);

    crmThID.append(crmThIDBtnSort);
    crmThFIO.append(crmThFIOBtnSort);
    crmThCreateDate.append(crmThCreateDateBtnSort);
    crmThUpdateDate.append(crmThUpdateDateBtnSort);

    crmTr.append(crmThID);
    crmTr.append(crmThFIO);
    crmTr.append(crmThCreateDate);
    crmTr.append(crmThUpdateDate);
    crmTr.append(crmThContacts);
    crmTr.append(crmThAction);
    crmTHead.append(crmTr);

    return crmTHead;
  }

  function createCrmTableBody() {
    const crmBody = document.createElement('tbody');
    crmBody.classList.add('table__tbody');

    return crmBody;
  }

  function sortCrmClients() {
    const table = document.querySelector('table')
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
    }

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

        switch (true) {
          case a > b:
            return 1 * multiply;
          case a < b:
            return -1 * multiply;
          default:
            break;
          case a === b:
            return 0;
        }
      });

      [].forEach.call(rows, (row) => {
        tbody.removeChild(row);
      });

      directions[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp';

      newRows.forEach(newRow => {
        tbody.appendChild(newRow);
      });
    }

    [].forEach.call(headers, (header, index) => {
      header.addEventListener('click', () => {
        sortColumn(index);
        console.log(index);
      });
    });
  }

  function createCrmClientItem(data) {
    const createCrmClientTr = document.createElement('tr');
    const createCrmClientID = document.createElement('td');
    const createCrmclientFIO = document.createElement('td');
    const createCrmCreatedDateBlock = document.createElement('td');
    const createCrmUpdatedDateBlock = document.createElement('td');
    const createCrmCreatedDate = document.createElement('td');
    const createCrmCreatedTime = document.createElement('td');
    const createCrmChangeDate = document.createElement('td');
    const createCrmChangeTime = document.createElement('td');
    const createCrmContacts = document.createElement('td');
    const createCrmActions = document.createElement('td');
    const createCrmBtnEdit = document.createElement('button');
    const createCrmBtnDelete = document.createElement('button');
    const deleteClient = deleteClientModal();
    const editClient = editCrmClientModal(data);

    createCrmClientTr.classList.add('table__client', 'client', 'client__item');
    createCrmClientTr.id = data.id;
    createCrmClientID.classList.add('client__id');
    createCrmclientFIO.classList.add('client__fio');
    createCrmCreatedDateBlock.classList.add('client__date-created-block');
    createCrmCreatedDate.classList.add('client__date-created');
    createCrmCreatedTime.classList.add('client__time-created');
    createCrmUpdatedDateBlock.classList.add('client__date-updated-block');
    createCrmChangeDate.classList.add('client__date-updated');
    createCrmChangeTime.classList.add('client__time-updated');
    createCrmContacts.classList.add('client__contacts');
    createCrmActions.classList.add('client__actions');
    createCrmBtnEdit.classList.add('btn-reset', 'btn', 'client__edit');
    createCrmBtnDelete.classList.add('btn-reset', 'btn', 'client__delete');

    const fullName = getFullName(data)
    function getFullName(data) {
      const name = data.name;
      const surname = data.surname;
      const lastName = data.lastName;

      return lastName + ' ' + name + ' ' + surname;
    }

    for (const contactIcon of data.contacts) {
      createContactItemByType(contactIcon.type, contactIcon.value, createCrmContacts);
    }

    createCrmClientID.textContent = data.id.substring(6);
    createCrmclientFIO.textContent = fullName;
    createCrmCreatedDate.textContent = getFormattedData(data.createdAt);
    createCrmCreatedTime.textContent = getFormattedTime(data.createdAt);
    createCrmChangeDate.textContent = getFormattedData(data.updatedAt);
    createCrmChangeTime.textContent = getFormattedTime(data.updatedAt);
    createCrmBtnEdit.textContent = 'Изменить';
    createCrmBtnDelete.textContent = 'Удалить';

    function deleteById() {
      deleteClient.deleteClient.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
      });
    }

    createCrmBtnDelete.addEventListener('click', () => {
      deleteById();
      document.body.append(deleteClient.deleteModal);
    });

    createCrmBtnEdit.addEventListener('click', () => {
      document.body.append(editClient.editModal);
    });

    createCrmCreatedDateBlock.append(createCrmCreatedDate, createCrmCreatedTime);
    createCrmUpdatedDateBlock.append(createCrmChangeDate, createCrmChangeTime);
    createCrmActions.append(createCrmBtnEdit, createCrmBtnDelete);
    createCrmClientTr.append(
      createCrmClientID,
      createCrmclientFIO,
      createCrmCreatedDateBlock,
      createCrmUpdatedDateBlock,
      createCrmContacts,
      createCrmActions
    );

    return createCrmClientTr;
  }

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

  const createContactLink = (type, value, element, svg, item) => {
    const setTooltip = createTooltip(type, value);
    element = document.createElement('a');
    element.classList.add('contacts__link');
    element.innerHTML = svg;

    if (type === 'Email') {
      element.href = `mailto:${value.trim()}`;
    } else if (type === 'Телефон') {
      element.href = `tel:${value.trim()}`;
      setTooltip.tooltipeValue.style.color = 'var(--color-white-1)';
      setTooltip.tooltipeValue.style.textDecoration = 'none';
    } else {
      element.href = value.trim();
    }

    element.append(setTooltip.tooltip);
    item.append(element);
  }

  const createContactItemByType = (type, value, item) => {
    switch (type) {
      case 'Телефон':
        let phone;
        createContactLink(type, value, phone, svgPhone, item);
        break;
      case 'Доп. телефон':
        let addPhone;
        createContactLink(type, value, addPhone, svgPhone, item);
        break;
      case 'Facebook':
        let fb;
        createContactLink(type, value, fb, svgFb, item);
        break;
      case 'VK':
        let vk;
        createContactLink(type, value, vk, svgVk, item);
        break;
      case 'Email':
        let email;
        createContactLink(type, value, email, svgEmail, item);
        break;
      case 'Другое':
        let other;
        createContactLink(type, value, other, svgOther, item);
        break;
      default:
        break;
    }
  }

  function getFormattedData(data) {
    const newDate = new Date(data);

    const correctDate = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }

    const resultDate = newDate.toLocaleString('numeric', correctDate);

    return resultDate;
  }

  function getFormattedTime(data) {
    const newDate = new Date(data);

    const correctDate = {
      hour: 'numeric',
      minute: 'numeric',
    }

    const resultTime = newDate.toLocaleString('numeric', correctDate);

    return resultTime;
  }

  function createIconBtnAdd() {
    const xmlns = linkSvg;
    const boxWidth = 23;
    const boxHeight = 16;
    const iconAdd = document.createElementNS(xmlns, 'svg');
    const path = document.createElementNS(xmlns, 'path');

    iconAdd.href = '/';
    iconAdd.classList.add('table__clients__icon');
    iconAdd.setAttributeNS(null, 'viebox', "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
    iconAdd.setAttributeNS(null, 'width', boxWidth);
    iconAdd.setAttributeNS(null, 'height', boxHeight);
    iconAdd.setAttributeNS(null, 'fill', 'none');
    path.setAttributeNS(null, 'd', `${d = "M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z"}`);
    iconAdd.append(path);

    return {
      iconAdd,
    }
  }

  function createCrmBtnAdd() {
    const forButtonwrapper = document.createElement('div');
    const addBtn = document.createElement('button');
    const iconBtn = createIconBtnAdd()

    forButtonwrapper.classList.add('clients-data__wrapper', 'flex');
    addBtn.classList.add('btn-reset', 'btn', 'clients-data__btn');

    addBtn.innerHTML = 'Добавить клиента'

    addBtn.append(iconBtn.iconAdd);
    forButtonwrapper.append(addBtn);

    return forButtonwrapper;
  }

  function createIconCloseBtn() {
    const xmlns = linkSvg;
    const boxWidth = 17;
    const boxHeight = 17;
    const iconBtnClose = document.createElementNS(xmlns, 'svg');
    const path = document.createElementNS(xmlns, 'path');

    iconBtnClose.setAttributeNS(null, 'viebox', "0 0 17 17");
    iconBtnClose.setAttributeNS(null, 'width', boxWidth);
    iconBtnClose.setAttributeNS(null, 'height', boxHeight);
    iconBtnClose.setAttributeNS(null, 'fill', 'none');
    path.setAttributeNS(null, 'd', `${d = "M16.2332 1.73333L15.2665 0.766664L8.49985 7.53336L1.73318 0.766696L0.766515 1.73336L7.53318 8.50003L0.766542 15.2667L1.73321 16.2333L8.49985 9.46669L15.2665 16.2334L16.2332 15.2667L9.46651 8.50003L16.2332 1.73333Z"}`);
    path.setAttributeNS(null, 'fill-rule', 'evenodd');
    path.setAttributeNS(null, 'clip-rule', 'evenodd');

    iconBtnClose.classList.add('modal__btn-icon');

    iconBtnClose.append(path);

    return {
      iconBtnClose,
    }
  }

  function createCrmIconBtnAddDefault() {
    const xmlns = linkSvg;
    const boxWidth = 16;
    const boxHeight = 16;
    const iconAddDefault = document.createElementNS(xmlns, 'svg');
    const g = document.createElementNS(xmlns, 'g');
    const defs = document.createElementNS(xmlns, 'defs');
    const clipPath = document.createElementNS(xmlns, 'clipPath');
    const rect = document.createElementNS(xmlns, 'rect');
    const path = document.createElementNS(xmlns, 'path');

    iconAddDefault.setAttributeNS(null, 'viebox', "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
    iconAddDefault.setAttributeNS(null, 'width', boxWidth);
    iconAddDefault.setAttributeNS(null, 'height', boxHeight);
    iconAddDefault.setAttributeNS(null, 'fill', 'none');
    g.setAttributeNS(null, 'clip-path', 'url(#clip0_124_2)');
    path.setAttributeNS(null, 'd', `${d = "M7.99998 4.66683C7.63331 4.66683 7.33331 4.96683 7.33331 5.3335V7.3335H5.33331C4.96665 7.3335 4.66665 7.6335 4.66665 8.00016C4.66665 8.36683 4.96665 8.66683 5.33331 8.66683H7.33331V10.6668C7.33331 11.0335 7.63331 11.3335 7.99998 11.3335C8.36665 11.3335 8.66665 11.0335 8.66665 10.6668V8.66683H10.6666C11.0333 8.66683 11.3333 8.36683 11.3333 8.00016C11.3333 7.6335 11.0333 7.3335 10.6666 7.3335H8.66665V5.3335C8.66665 4.96683 8.36665 4.66683 7.99998 4.66683ZM7.99998 1.3335C4.31998 1.3335 1.33331 4.32016 1.33331 8.00016C1.33331 11.6802 4.31998 14.6668 7.99998 14.6668C11.68 14.6668 14.6666 11.6802 14.6666 8.00016C14.6666 4.32016 11.68 1.3335 7.99998 1.3335ZM7.99998 13.3335C5.05998 13.3335 2.66665 10.9402 2.66665 8.00016C2.66665 5.06016 5.05998 2.66683 7.99998 2.66683C10.94 2.66683 13.3333 5.06016 13.3333 8.00016C13.3333 10.9402 10.94 13.3335 7.99998 13.3335Z"}`);
    path.setAttributeNS(null, 'fill', '#9873FF');
    rect.setAttributeNS(null, 'width', boxWidth);
    rect.setAttributeNS(null, 'width', boxHeight);
    clipPath.setAttribute(null, 'id', 'clip0_124_2');

    iconAddDefault.classList.add('modal__icon-add-default');

    g.append(path);
    defs.append(clipPath);
    defs.append(rect);
    iconAddDefault.append(g);
    iconAddDefault.append(defs);

    return {
      iconAddDefault,
    }
  }

  function createCrmIconBtnAddActive() {
    const xmlns = linkSvg;
    const boxWidth = 16;
    const boxHeight = 16;
    const iconAddActive = document.createElementNS(xmlns, 'svg');
    const g = document.createElementNS(xmlns, 'g');
    const defs = document.createElementNS(xmlns, 'defs');
    const clipPath = document.createElementNS(xmlns, 'clipPath');
    const rect = document.createElementNS(xmlns, 'rect');
    const path = document.createElementNS(xmlns, 'path');

    iconAddActive.setAttributeNS(null, 'viebox', "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
    iconAddActive.setAttributeNS(null, 'width', boxWidth);
    iconAddActive.setAttributeNS(null, 'height', boxHeight);
    iconAddActive.setAttributeNS(null, 'fill', 'none');
    g.setAttributeNS(null, 'clip-path', 'url(#clip0_124_14)');
    path.setAttributeNS(null, 'd', `${d = "M1.33331 8.00016C1.33331 4.32016 4.31998 1.3335 7.99998 1.3335C11.68 1.3335 14.6666 4.32016 14.6666 8.00016C14.6666 11.6802 11.68 14.6668 7.99998 14.6668C4.31998 14.6668 1.33331 11.6802 1.33331 8.00016ZM7.33329 5.33366C7.33329 4.96699 7.63329 4.66699 7.99996 4.66699C8.36663 4.66699 8.66663 4.96699 8.66663 5.33366V7.33366H10.6666C11.0333 7.33366 11.3333 7.63366 11.3333 8.00033C11.3333 8.36699 11.0333 8.66699 10.6666 8.66699H8.66663V10.667C8.66663 11.0337 8.36663 11.3337 7.99996 11.3337C7.63329 11.3337 7.33329 11.0337 7.33329 10.667V8.66699H5.33329C4.96663 8.66699 4.66663 8.36699 4.66663 8.00033C4.66663 7.63366 4.96663 7.33366 5.33329 7.33366H7.33329V5.33366Z"}`);
    path.setAttributeNS(null, 'fill', '#9873FF');
    path.setAttributeNS(null, 'fill-rule', 'evenodd');
    path.setAttributeNS(null, 'clip-rule', 'evenodd');
    path.setAttributeNS(null, 'fill', '#9873FF');
    rect.setAttributeNS(null, 'width', boxWidth);
    rect.setAttributeNS(null, 'width', boxHeight);
    rect.setAttributeNS(null, 'fill', 'white');
    clipPath.setAttribute(null, 'id', 'clip0_124_14');

    iconAddActive.classList.add('modal__icon-add-active');

    g.append(path);
    defs.append(clipPath);
    defs.append(rect);
    iconAddActive.append(g);
    iconAddActive.append(defs);

    return {
      iconAddActive,
    }
  }

  function createCrmForm() {
    const removeClass = 'modal__btn-add-contact--active';

    const formTitle = document.createElement('h2');
    const btnClose = document.createElement('button');
    const modalHeader = document.createElement('div');
    const iconBtnClose = createIconCloseBtn();
    const formClient = document.createElement('form');
    const lableLastName = document.createElement('label');
    const lableName = document.createElement('label');
    const lableSurname = document.createElement('label');
    const markerLastName = document.createElement('span');
    const markerName = document.createElement('span');
    const inputLastName = document.createElement('input');
    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const btnAddContact = document.createElement('button');
    const iconBtnAddDefault = createCrmIconBtnAddDefault();
    const iconBtnAddActive = createCrmIconBtnAddActive();
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
    lableLastName.classList.add('modal__label-last-name');
    lableName.classList.add('modal__label-name');
    lableSurname.classList.add('modal__label-surname');
    markerLastName.classList.add('modal__label-last-name-marker');
    markerName.classList.add('modal__label-name-marker');
    inputLastName.classList.add('modal__input', 'modal__input-last-name');
    inputName.classList.add('modal__input', 'modal__input-name');
    inputSurname.classList.add('modal__input', 'modal__input-surname');
    btnAddContact.classList.add('btn-reset', 'btn', 'modal__btn-add-contact', removeClass);
    contactBtnSvgDefault.classList.add('modal__svg', 'modal__svg--default', 'modal__svg--active');
    contactBtnSvgHover.classList.add('modal__svg', 'modal__svg--hover');
    buttonsWrapper.classList.add('modal__wrapper-btns')
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

    lableLastName.for = 'floating-last-name';
    lableName.for = 'floating-name';
    lableSurname.for = 'floating-surname';
    inputLastName.id = 'floating-last-name';
    inputName.id = 'floating-name';
    inputSurname.id = 'floating-surname';
    formTitle.innerHTML = 'Новый клиент';
    lableLastName.innerHTML = 'Фамилия';
    lableName.innerHTML = 'Имя';
    lableSurname.innerHTML = 'Отчество';
    inputLastName.innerHTML = 'Фамилия';
    inputName.innerHTML = 'Имя';
    inputSurname.innerHTML = 'Отчество';
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

    lableLastName.append(markerLastName);
    lableName.append(markerName);

    formFloatingLastName.append(inputLastName, lableLastName);
    formFloatingName.append(inputName, lableName);
    formFloatingSurname.append(inputSurname, lableSurname);

    btnClose.append(iconBtnClose.iconBtnClose);
    contactBtnSvgDefault.append(iconBtnAddDefault.iconAddDefault);
    contactBtnSvgHover.append(iconBtnAddActive.iconAddActive)
    btnAddContact.append(contactBtnSvgDefault, contactBtnSvgHover);
    selectContactBlock.append(btnAddContact);
    modalHeader.append(formTitle);
    modalHeader.append(btnClose);

    buttonsWrapper.append(btnSave, btnCancel);
    errorForForm.append(wrongMassage, writeLastName, writeName, writeSurname, requiredValue, requiredContacts);
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

      if (contactsItems.length < 9) {
        const contactItem = createCrmContactData();
        selectContactBlock.prepend(contactItem.contact);
        selectContactBlock.style.backgroundColor = 'var(--color-grey-opacity-30)';

        if (contactsItems.length >= 5) {
          document.querySelector('.site-modal__content').style.top = '70%';
        } else {
          document.querySelector('.site-modal__content').style.top = '50%';
        }

      } else {
        const contactItem = createCrmContactData();
        selectContactBlock.prepend(contactItem.contact);
        btnAddContact.classList.remove(removeClass);
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
      lableLastName,
      lableName,
      lableSurname,
      btnAddContact,
      selectContactBlock,
      btnSave,
      btnCancel,
    }
  }

  function createValidateClientForm() {
    const userLastName = document.getElementById('floating-last-name');
    const userName = document.getElementById('floating-name');
    const userSurname = document.getElementById('floating-surname');
    const wrongMessage = document.getElementById('wrong-massage');
    const writeLastName = document.getElementById('write-last-name');
    const writeName = document.getElementById('write-name');
    const writeSurname = document.getElementById('write-surname');
    const requiredValue = document.getElementById('required-value');
    const requiredСonctacts = document.getElementById('required-contacts');
    const validateArr = [
      wrongMessage,
      writeLastName,
      writeName,
      writeSurname,
      requiredValue,
      requiredСonctacts,
    ];
    const regexp = /[^а-яА-ЯёЁ]+$/g;

    const onInputValue = input => {
      input.addEventListener('input', () => {
        input.style.borderColor = 'var(--color-grey-2)';
        for (const item of validateArr) {
          item.textContent = '';
        }
      });

      input.oncut = input.oncopy = input.onpaste = () => {
        input.style.borderColor = 'var(--color-grey-2)';
        for (const item of validateArr) {
          item.textContent = '';
        }
      };

      input.onchange = () => {
        input.style.borderColor = 'var(--color-grey-2)';

        if (userLastName.value && userName.value && userSurname.value) {
          for (const item of validateArr) {
            item.textContent = '';
          }
        }
      }
    }

    onInputValue(userLastName);
    onInputValue(userName);
    onInputValue(userSurname);

    const checkRequiredName = (input, message, name) => {
      if (!input.value) {
        input.style.borderColor = 'var(--color-red-1)';
        message.textContent = `Введите ${name} клиента!`;
        return false;
      } else {
        message.textContent = '';
      }

      return true;
    };

    const checkByRegexp = (input, regexp) => {
      if (regexp.test(input.value)) {
        input.style.borderColor = 'var(--color-red-1)';
        wrongMessage.textContent = 'Недопустимые символы!';
        return false;
      }

      return true;
    };

    if (!checkRequiredName(userLastName, writeLastName, 'фамилию')) { return false };
    if (!checkRequiredName(userName, writeName, 'имя')) { return false };
    if (!checkRequiredName(userSurname, writeSurname, 'Отчество')) { return false };
    if (!checkByRegexp(userLastName, regexp)) { return false };
    if (!checkByRegexp(userName, regexp)) { return false };
    if (!checkByRegexp(userSurname, regexp)) { return false };

    return true;
  }

  function createValidateClientContact(contactType, contactInput) {
    const writeValue = document.getElementById('write-name');
    const onlyNumbers = /[^0-9]+$/g;
    const onlyEmail = /[^a-zA-Z|@|.]+$/g;

    const onInputValue = input => {
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
        } else if (contactInput.value.length !== 11) {
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
  }


  function createCrmIconContactDeleteBtn() {
    const xmlns = linkSvg;
    const boxWidth = 16;
    const boxHeight = 16;
    const iconDeleteBtn = document.createElementNS(xmlns, 'svg');
    const g = document.createElementNS(xmlns, 'g');
    const defs = document.createElementNS(xmlns, 'defs');
    const clipPath = document.createElementNS(xmlns, 'clipPath');
    const rect = document.createElementNS(xmlns, 'rect');
    const path = document.createElementNS(xmlns, 'path');

    iconDeleteBtn.setAttributeNS(null, 'viebox', "0 0 " + boxWidth / 2 + " " + boxHeight / 2);
    iconDeleteBtn.setAttributeNS(null, 'width', boxWidth);
    iconDeleteBtn.setAttributeNS(null, 'height', boxHeight);
    g.setAttributeNS(null, 'clip-path', 'url(#clip0_121_1083)');
    path.setAttributeNS(null, 'd', `${d = "M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z"}`);
    path.setAttributeNS(null, 'fill-rule', 'evenodd');
    path.setAttributeNS(null, 'clip-rule', 'evenodd');
    rect.setAttributeNS(null, 'width', boxWidth);
    rect.setAttributeNS(null, 'width', boxHeight);
    clipPath.setAttribute(null, 'id', 'clip0_121_1083');

    iconDeleteBtn.classList.add('contact__btn-delete-icon');

    g.append(path);
    defs.append(clipPath);
    defs.append(rect);
    iconDeleteBtn.append(g);
    iconDeleteBtn.append(defs);

    return {
      iconDeleteBtn,
    }
  }

  function createCrmContactData() {
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
    const contactIconDeleteBtn = createCrmIconContactDeleteBtn();

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

    contactDeleteBtn.append(contactIconDeleteBtn.iconDeleteBtn);
    contactDeleteBtn.append(contactTooltip);
    contactList.append(contactPhone, contactEmail, contactVk, contactFc, contactOther);
    contactType.append(contactNameBtn, contactList);
    contact.append(contactType, contactInput, contactDeleteBtn);

    contactDeleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contact.remove();
      document.querySelector('.modal__btn-add-contact').classList.add('modal__btn-add-contact--active');
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

    const setType = (type) => {
      type.addEventListener('click', () => {
        contactNameBtn.textContent = type.textContent;
        contactList.classList.remove('contact__list--active');
        contactNameBtn.classList.remove('contact__list--active');
      });
    }

    const typeArr = [contactPhone, contactEmail, contactVk, contactFc, contactOther];

    for (const type of typeArr) {
      setType(type);
    }

    return {
      contact,
      contactNameBtn,
      contactInput,
      contactDeleteBtn
    }
  }

  function createTooltip(type, value) {
    const tooltip = document.createElement('div');
    const tooltipType = document.createElement('span');
    const tooltipeValue = document.createElement('a');

    tooltip.classList.add('contact__tooltip', 'tooltip');
    tooltipType.classList.add('contact__tooltip-type');
    tooltipeValue.classList.add('contact__tooltip-value');

    tooltipType.textContent = type + ': ';
    tooltipeValue.textContent = value;

    tooltip.append(tooltipType, tooltipeValue);

    return {
      tooltip,
      tooltipType,
      tooltipeValue
    }
  }

  function createCrmModalWindow() {
    const modalForm = createCrmForm();
    const modal = document.createElement('div');

    modal.classList.add('site-modal', 'modal', 'modal__window', 'modal--active');
    modalForm.formClient.classList.add('site-modal__content', 'modal__form', 'modal--active');

    modal.append(modalForm.formClient);

    modalForm.formClient.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!createValidateClientForm()) {
        return;
      }

      const contactTypes = document.querySelectorAll('.contact__btn-name');
      const contactValues = document.querySelectorAll('.contact__input');
      const contactsList = [];
      const clientObj = {};

      for (let i = 0; i < contactValues.length; i++) {
        if (!createValidateClientContact(contactTypes[i], contactValues[i])) {
          return;
        }
        contactsList.push({
          type: contactTypes[i].innerHTML,
          value: contactValues[i].value
        });
      }

      clientObj.lastName = modalForm.inputLastName.value;
      clientObj.name = modalForm.inputName.value;
      clientObj.surname = modalForm.inputSurname.value;
      clientObj.contacts = contactsList;

      console.log(clientObj)

      await sendCrmClietnsData(clientObj, 'POST');
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
    })

    return modal;
  }

  function deleteClientModal() {
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

    modalClose.append(iconBtnClose.iconBtnClose);

    deleteHeader.append(deleteModalTitle, modalClose)
    deleteModalContent.append(
      deleteHeader,
      deleteModalText,
      deleteClient,
      deleteModalBack
    )
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
      deleteModalContent,
      deleteClient
    }
  }

  const editCrmClientModal = (data) => {
    const editModal = document.createElement('div');
    const editModalContent = document.createElement('div');
    const createForm = createCrmForm();
    const titleID = document.createElement('span');

    titleID.classList.add('modal__id');
    editModal.classList.add('site-modal', 'modal', 'modal__window', 'modal--active');
    createForm.formClient.classList.add('modal__form', 'site-modal__content', 'modal__content', 'modal--active');

    titleID.innerHTML = `ID: ${data.id.substring(0, 6)}`;
    createForm.formTitle.innerHTML = 'Изменить данные';
    createForm.btnCancel.innerHTML = 'Удалить клиента';

    createForm.btnCancel.addEventListener('click', (e) => {
      e.preventDefault();

      const deleteClientInModal = deleteClientModal();
      document.body.append(deleteClientInModal.deleteModal);

      deleteClientInModal.deleteClient.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
      });
    });

    createForm.btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      editModal.remove();
    });

    if (data.contacts.length === 10) {
      createForm.btnAddContact.classList.remove('modal__btn--active');
    }

    createForm.formClient.addEventListener('submit', (e) => {
      e.preventDefault();

      const contactTypes = document.querySelectorAll('.contact__btn-name');
      const contactValues = document.querySelectorAll('.contact__input');
      let contactsList = [];
      let client = {};

      for (let i = 0; i < contactTypes.length; i++) {
        contactsList.push({
          type: contactTypes[i].innerHTML,
          value: contactValues[i].value,
        });
      }

      client.lastName = createForm.inputLastName.value;
      client.name = createForm.inputName.value;
      client.surname = createForm.inputSurname.value;
      client.contacts = contactsList;

      sendCrmClietnsData(client, 'PATCH', data.id);
    });

    createForm.inputLastName.value = data.lastName;
    createForm.inputName.value = data.name;
    createForm.inputSurname.value = data.surname;

    for (const contact of data.contacts) {
      const createContact = createCrmContactData();

      createContact.contactNameBtn.innerHTML = contact.type;
      createContact.contactInput.value = contact.value;

      createForm.selectContactBlock.prepend(createContact.contact);

      createForm.selectContactBlock.style.backgroundColor = 'var(--color-white-3)';
    }

    createForm.formTitle.append(titleID);
    editModalContent.append(createForm.formClient);
    editModal.append(editModalContent);

    document.addEventListener('click', (e) => {
      if (e.target === editModal) {
        editModal.remove();
      }
    })

    return {
      editModal,
      editModalContent
    }
  }

  async function sendCrmClietnsData(client, method, id = null) {
    try {
      await fetch(`http://localhost:3000/api/clients/${method === 'POST' ? '' : id}`, {
        method,
        body: JSON.stringify(client),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCrmClients() {
    try {
      const response = await fetch('http://localhost:3000/api/clients', {
        method: 'GET'
      });
      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteClientItem(id) {
    try {
      await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function findClient(value) {
    try {
      const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
        method: 'GET'
      });

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async function createCrmApp(container) {
    const clients = await getCrmClients();

    const header = createCrmHeader(clients);
    const main = createMainTag();

    container.append(header);
    container.append(main);

    for (const client of clients) {
      document.querySelector('.table__tbody').append(createCrmClientItem(client));
    }

    sortCrmClients();
  }

  document.addEventListener('DOMContentLoaded', () => {
    createCrmApp(document.getElementById('crm'));
  })
})();
