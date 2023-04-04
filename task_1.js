const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second> 
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString (xmlString, 'text/xml');
//const xmlDOM = parser.parsFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");
let result = []

studentNode.forEach(item => {
  result.push({
    name: item.querySelector('first').textContent + ' '+ item.querySelector('second').textContent,
    lang: item.querySelector('name').getAttribute("lang"),
    age: item.querySelector('age').textContent,
    prof: item.querySelector('prof').textContent
  })
})

console.log(result);
