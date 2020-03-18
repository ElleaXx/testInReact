import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import LeftPanel from './components/LeftPanel'
import Card from './components/Card'
import Modal from 'react-modal';

class App extends Component {
  state = {
    value: '',
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
        hall: 'Основной зал, №14'
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
        hall: 'Основной зал, №15'
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
        hall: 'Основной зал, №2'},
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
        hall: 'Основной зал, №14'
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

    handleChange(event) {
      this.setState({value: event.target.value});
    }

  render() {
    const cards = this.state.cards
    return (
      <div>
        <Nav />
        <Main>
          <LeftPanel/>
          <div className="content">
            <div className="orderMain">

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
                  onClick = {() => this.funcObgectDelete(index)}/>
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
            <h4>Время<input type="text" value={this.state.value} onChange={this.handleChange}/></h4>
          <button onClick ={this.funcObgect}>Добавить</button>
          <button onClick ={this.closeModal}>Сохранить и закрыть</button>
        </Modal>
      </div>
    );
  }
}

export default App;
