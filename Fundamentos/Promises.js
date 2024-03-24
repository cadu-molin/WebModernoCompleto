async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Dados retornados com sucesso');
      }, 2000);
    });
  }
  
async function getData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
console.log('inicio')

getData();

console.log('fim')