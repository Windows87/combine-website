function onReportSubmit(event) {
  event.preventDefault();

  const submitButton = document.querySelector('input[type="submit"]');
  const form = document.querySelector('form');
  const loadingElement = document.createElement('span');
  const sendedElement = document.createElement('span');

  loadingElement.classList.add('loading');
  sendedElement.classList.add('sended');

  loadingElement.innerText = 'Carregando..';
  sendedElement.innerText = 'Enviado!';

  submitButton.style['display'] = 'none';
  form.appendChild(loadingElement);

  setTimeout(() => {
  	loadingElement.style['display'] = 'none';
  	form.appendChild(sendedElement);
  }, 2000);
}