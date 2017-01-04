const ApiUtil = () => {
  $.ajax({ method: 'GET', url: '/api/todos' });
};

export default ApiUtil;
