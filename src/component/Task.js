import "../styles.css";

function nextValue(listOfElements) {

  let numberOfItems = listOfElements.reduce(function(obj, element){
      if (!obj[element.value]) {
          obj[element.value] = 1;
      } else {
          obj[element.value]++;
      }
      return obj;
  }, {});
  
  const keys = Object.keys(numberOfItems);
  let twiceAppear = false;
  let newValue;
  const step = 1;
  
 /*If you want print elements as in example 
  for (const [id, count] of Object.entries(numberOfItems)) {
    console.log(`value: ${id} - appears ${count} time`);
  }*/
  
  for (const key of keys) {
     let nextIndex = keys.indexOf(key) + 1;
     let nextItem = keys[nextIndex];
     if(numberOfItems[key] >= 2) twiceAppear = true;
     if(nextItem && twiceAppear && nextItem-key !== step) {
      newValue = parseInt(key) + 1;
      break;
     }
  }
  
  return {id: listOfElements.length+1, value: newValue};
}

function lookup(obj, path) {
  let paths = path.split(".");
  let value = obj;

  try {
    for (let i = 0; i < paths.length; i++) {
      if (value[paths[i]] === undefined) {
        throw new Error("No value with this path!");
      } else {
        value = value[paths[i]];
      }
    }

    return value;
  } catch (error) {
    return error;
  }
}

export default function Task() {

  const listOfElements = [{id:1, value:3}, {id:2, value:7}, {id:3, value:3}, {id:4, value:1}, {id:5, value:4}];
  const resultTask1 = nextValue(listOfElements);

  const object = { property1: { property2: "Apple", property3: "Orange" } };
  const path = "property1.property2";
  const resultTask2 = lookup(object, path);

  const onClickTask1 = () => {
    console.log('RESULT TASK 1: \n', resultTask1);
  }

  const onClickTask2 = () => {
    console.log('RESULT TASK 2: \n', resultTask2);
  }

  return (
    <div className="App">
      <h2 className="heading">Click the button with the name of the task whose solution you want to write on the console!</h2>
      <button className="solutionBtn" onClick={onClickTask1}>TASK 1</button>
      <button className="solutionBtn" onClick={onClickTask2}>TASK 2</button>
    </div>
  );
}
