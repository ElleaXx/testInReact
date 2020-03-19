import React, { Component, useState, useEffect  } from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import LeftPanel from './components/LeftPanel'
import Card from './components/Card'
import Modal from 'react-modal';

class App extends Component {
  state = {

    count: '',
    
    edit: '',

    time: '', 
    createdDate: '', 
    createdTime: '', 
    status: '', 
    quantityPerson: '', 
    quantityTime: '', 
    name: '', 
    phone: '', 
    hall: '',

    modalIsOpen:false,
    cards: [
      {
        time: '20.45', 
        createdDate: 'Создан 03.02.2019', 
        createdTime: '14:16', 
        status: 'Готов', 
        quantityPerson: '10', 
        quantityTime: '6', 
        name: 'Денис', 
        phone: '8-999-555-44-22', 
        hall: '15, Основной зал'
      },
      {
       time: '08.25', 
        createdDate: 'Создан 13.01.2020',
        createdTime: '24:06', 
        status: 'Ожидание', 
        quantityPerson: '5', 
        quantityTime: '4', 
        name: 'Алексей', 
        phone: '8-883-157-56-88', 
        hall: '10, Малый зал'
      },
      {
        time: '14.02', 
        createdDate: 'Создан 22.01.2018', 
        createdTime: '12:16', 
        status: 'Отмена', 
        quantityPerson: '22', 
        quantityTime: '16', 
        name: 'Олег', 
        phone: '8-569-124-04-20', 
        hall: '1, Основной зал'},
    ],
  }
  // добавление компонента
  funcObgect = () => {
    let cards = this.state.cards
    cards.push(
      {
        time: '20.45', 
        createdDate: 'Создан 03.02.2019', 
        createdTime: '14:16', 
        status: 'Готов', 
        quantityPerson: '10', 
        quantityTime: '6', 
        name: 'Денис', 
        phone: '8-999-555-44-22', 
        hall: '1, Основной зал'
      }
    )
    this.setState({cards: cards})
  }
// удаление компонента
    funcObgectDelete = (index) => {
      let cards = this.state.cards;
      cards.splice(index,1);
      this.setState({cards: cards})
    }
    openModal = () => {
      this.setState({modalIsOpen: true})
    }
    
    closeModal = () => {
      this.setState({modalIsOpen: false})
    }



    handleChangeTime = (event) => {
      console.log(this.state.time)
      this.setState({time: event.target.value});
    }
    handleChangeName = (event) => {
      this.setState({name: event.target.value});
    }
    handleChangePhone = (event) => {
      this.setState({phone: event.target.value});
    }
    handleChangeStatus = (event) => {
      this.setState({status: event.target.value});
    }
    handleChangeQuantityPerson = (event) => {
      this.setState({quantityPerson: event.target.value});
    }
    handleChangeQuantityTime = (event) => {
      this.setState({quantityTime: event.target.value});
    }
    handleChangeHall = (event) => {
      this.setState({hall: event.target.value});
    }

    // handleSubmitTime = () => {
    //   let a = this.state.time
    //   alert('Время ' + a)
    // }
    // handleSubmitName = () => {
    //   let a = this.state.value
    //   alert('Ваше имя ' + a)
    // }
    // handleSubmitPhone = () => {
    //   let a = this.state.value
    //   alert('Ваш телефон ' + a)
    // }

    handleSubmit = () => {
      let { time, name, phone, status, quantityPerson, quantityTime, hall, cards, edit} = this.state;
      if(edit == '' ) {
        cards.push({
            time: time, 
            createdDate: name, 
            createdTime: '14:16', 
            status: status, 
            quantityPerson: quantityPerson, 
            quantityTime: quantityTime, 
            name: name, 
            phone: phone, 
            hall: hall
          }
        )
      }
      else {
        cards[edit].time = time;
        cards[edit].createdTime = '14.16';
        cards[edit].status = status;
        cards[edit].quantityPerson = quantityPerson;
        cards[edit].quantityTime = quantityTime;
        cards[edit].name = name;
        cards[edit].phone = phone;
        cards[edit].hall = hall;

      }
      this.setState({modalIsOpen: false,
        edit: '',
        time: '', 
        createdDate: '', 
        createdTime: '', 
        status: '', 
        quantityPerson: '', 
        quantityTime: '', 
        name: '', 
        phone: '', 
        hall: ''})
    }

    edit = (elem,index) => {
      this.setState({
        edit: index,
        modalIsOpen: true,
        time: elem.time, 
        createdDate: elem.name, 
        createdTime: '14:16', 
        status: elem.status, 
        quantityPerson: elem.quantityPerson, 
        quantityTime: elem.quantityTime, 
        name: elem.name, 
        phone: elem.phone, 
        hall: elem.hall
      })
    }


    Example = () => {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
      })
    }


  render() {
    const cards = this.state.cards;
    console.log(this.state);
    return (
      <div>
                <p>Вы нажали {this.state.count} раз</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
        <Nav />
        <Main>
          <LeftPanel/>
          <div className="content">
            <div className="orderMain">
          {/* создание */}
              {cards.map((elem, index)=>{
                return(
                  <Card time = {elem.time}
                  createdDate = {elem.createdDate}
                  createdTime = {elem.createdTime}
                  status = {elem.status}
                  quantityPerson = {elem.quantityPerson}
                  quantityTime = {elem.quantityTime}
                  name = {elem.name}
                  phone = {elem.phone}
                  hall = {elem.hall}
                  onClick = {() => this.funcObgectDelete(index)}
                  edit = {() => this.edit(elem,index)}/>
                )
              })}

            </div>
            <div className = "bottomPanel">
            {/* <button className= 'buttonCreate' onClick = {this.funcObgect}>Добавить</button> */}
            <button className= 'buttonCreate' onClick = {this.openModal}>Добавить</button>
              <div className="bottomStatus">
                Общее количество резервов 2(2). Всего гостей: 18(18)
              </div>
            </div>
          </div>
        </Main>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.customStyles}
          contentLabel="Example Modal">

<div className ='modalMain'>
  <div className = 'change'>
    <div>
                <p>
                    <label>Время:</label><br />
                    <input type="text" value={this.state.time} onChange={this.handleChangeTime}/>
                </p>
                <p>
                    <label>Имя:</label><br />
                    <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                </p>
                </div>
                <div>
                <p>
                    <label>Телефон:</label><br />
                    <input type="text" value={this.state.phone} onChange={this.handleChangePhone}/>
                </p>
                <p>
                    <label>Статус:</label><br />
                    <input type="text" value={this.state.status} onChange={this.handleChangeStatus}/>
                </p>
                </div>
                <div>
                <p>
                    <label>Заказчики:</label><br />
                    <input type="text" value={this.state.quantityPerson} onChange={this.handleChangeQuantityPerson}/>
                </p>
                <p>
                    <label>Обработка:</label><br />
                    <input type="text" value={this.state.quantityTime} onChange={this.handleChangeQuantityTime}/>
                </p>
                </div>
                </div>
                <p>
                    <label>Зал:</label><br />
                    <input className ='hall' type="text" value={this.state.hall} onChange={this.handleChangeHall}/>
                    <select>
                      <option>Основной зал</option>
                      <option>Малый зал</option>
                  </select>
                </p>
                <button className = 'buttonSave' onClick = {this.handleSubmit}>Сохранить и выйти</button>
                <img src = {require("./image/Delete-80_icon-icons.com_57340 (1).png")} 
                className = 'buttonOff' onClick = {this.closeModal}/>
                </div>
        </Modal>
      </div>
    );
  }
}

export default App;