getData();

async function getData() {
    await fetch("http://localhost:3001/object/info")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
           createWebsite(data);
        })
        .catch((err) => console.log(err))
}
function createWebsite(jsonData) {
    // This function to create HTMLtag from json
    function createElement(elementData) {
        //console.log(elementData);
        const element = document.createElement(elementData.element);
  
        //  style of each element
        if (elementData.style) {
          element.style.cssText = elementData.style;
        }
  
        // Set element other info
        if (elementData.text) {
          element.textContent = elementData.text; 
        } else if (elementData.src) {
          element.src = elementData.src;
        }
  
        // Append child elements
        if (elementData.child) {
          elementData.child.forEach(childData => {
            const childElement = createElement(childData);
            element.appendChild(childElement);
          });
        }
  
        return element;
      }
      const text = document.body;
      const rootElement = createElement(jsonData.body); 
      text.appendChild(rootElement);
    
}
