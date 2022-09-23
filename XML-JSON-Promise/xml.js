const parser = new DOMParser();

// console.log('parser', parser);

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

// console.log('xmlString', xmlString);

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
let resultList = [];

const studentNode = xmlDOM.querySelectorAll('student');

studentNode.forEach(e => {
  const nameNode = e.querySelector('name');
  const firstNameNode = nameNode.querySelector('first');
  const secondNameNode = nameNode.querySelector('second');
  const ageNode = e.querySelector('age');
  const profNode = e.querySelector('prof')

  const langAttr = nameNode.getAttribute('lang')

  resultList.push({
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr
  });
});
  
result = {list: resultList};

console.log(result);

// console.log(`name: ${result.name}, age: ${result.age}, prof: ${result.prof}, lang: ${result.lang}`);
