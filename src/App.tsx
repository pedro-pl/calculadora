import { useState } from 'react'
import { Button, Container, ContainerButtons, ContainerCalculator, ContainerVisor, Visor } from './styles'
import { MdBackspace } from "react-icons/md";
import { IoClose, IoRemove } from "react-icons/io5";

function App() {
  const [text, setText] = useState<string[]>([]);

  function insert(button: string){
    setText(prevObject => {
      return [...prevObject, button]
    });
  }

  function removeLast() {
    setText(prevObject => {
      return prevObject.slice(0, -1);
    });
  }

  function calculate(){
    const calc = text.join('').replaceAll(',', '').replaceAll('x', '*');
    const result = eval(calc);
    setText([]);
    insert(result)
  }

  return (
    <Container>
      <ContainerCalculator>
        <ContainerVisor>
          <Visor>{text}</Visor>
          <MdBackspace size={24} onClick={() => removeLast()}/>
        </ContainerVisor>

        <ContainerButtons>
          <Button onClick={() => insert("1")}>1</Button>
          <Button onClick={() => insert("2")}>2</Button>
          <Button onClick={() => insert("3")}>3</Button>
          <Button onClick={() => insert("+")}>+</Button>
          <Button onClick={() => insert("4")}>4</Button>
          <Button onClick={() => insert("5")}>5</Button>
          <Button onClick={() => insert("6")}>6</Button>
          <Button onClick={() => insert("-")}><IoRemove size={30}/></Button>
          <Button onClick={() => insert("7")}>7</Button>
          <Button onClick={() => insert("8")}>8</Button>
          <Button onClick={() => insert("9")}>9</Button>
          <Button onClick={() => insert("x")}><IoClose size={30}/></Button>
          <Button onClick={() => insert(".")}>,</Button>
          <Button onClick={() => insert("0")}>0</Button>
          <Button onClick={() => insert("/")}>/</Button>
          <Button onClick={calculate}>=</Button>
        </ContainerButtons>
      </ContainerCalculator>
    </Container>
  )
}

export default App
