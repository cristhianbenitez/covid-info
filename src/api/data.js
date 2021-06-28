const data = fetch('https://disease.sh/v3/covid-19/all')
.then(res => res.json())
.then(data => console.log((data)) )
.catch(error => console.log('error'))

export default data



