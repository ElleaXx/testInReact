import React, { Component} from 'react';
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

    waiting: '',
    status: '',
    count: '',
    time: '',
    name: '',
    phone: '',
    halls: '',
    created: '',

    modalIsOpen:false,

    data: [],
  }
  // добавление компонента

// удаление компонента
    funcObgectDelete = (index) => {
      let {data} = this.state
      data.splice(index,1);
      this.setState({data: data})
    }
    openModal = () => {
      this.setState({modalIsOpen: true})
    }
    
    closeModal = () => {
      this.setState({modalIsOpen: false})
    }




    handleChangeWaiting = (event) => {
      this.setState({waiting: event.target.value});
    }
    handleChangeStatus = (event) => {
      this.setState({status: event.target.value});
    }
    handleChangeCount = (event) => {
      this.setState({count: event.target.value});
    }
    handleChangeTime = (event) => {
      this.setState({time: event.target.value});
    }
    handleChangeName = (event) => {
      this.setState({name: event.target.value});
    }
    handleChangePhone = (event) => {
      this.setState({phone: event.target.value});
    }
    handleChangeHalls = (event) => {
      this.setState({halls: event.target.value});
    }
    handleChangeCreated = (event) => {
      this.setState({created: event.target.value})
    }

    handleSubmit = () => {
      let {id, data ,edit, waiting, status, count, time, name, phone, halls, created} = this.state;
      if(edit === '' ) {
        let form = new FormData()
        form.append( 'waiting', waiting);
        form.append( 'status', status);
        form.append( 'count', count);
        form.append( 'time', time);
        form.append( 'name', name);
        form.append( 'phone', phone);
        form.append( 'halls', halls);
        form.append( 'created', created);
        fetch('http://testmax.serverway.ru/api/user/add', 
        {
          method: 'post', 
          body: form
        }
        ).then((response) => {
          return response.json();
        }).then((data) => {
          console.log(data)
          this.getData()
        });
      }
      else {
        data[edit].id = id;
        let form = new FormData()
        form.append( 'waiting', waiting);
        form.append( 'status', status);
        form.append( 'count', count);
        form.append( 'time', time);
        form.append( 'name', name);
        form.append( 'phone', phone);
        form.append( 'halls', halls);
        form.append( 'created', created);
        fetch('http://testmax.serverway.ru/api/user/update', 
        {
          method: 'post', 
          body: form
        }
        ).then((response) => {
          return response.json();
        }).then((data) => {
          console.log(data)
          this.getData()
        });

      }
      this.setState(
        {modalIsOpen: false,
          waiting: '',
          status: '',
          count: '',
          time: '',
          name: '',
          phone: '',
          halls: '',
          created: '',
        }
      )
    }

    edit = (elem,index) => {
      this.setState({
        edit: index,
        modalIsOpen: true,
        waiting: elem.waiting,
        status: elem.status,
        count: elem.count,
        time: elem.time,
        name: elem.name,
        phone: elem.phone,
        halls: elem.halls,
        created: elem.created
        }
      )
    }

// создается и работает после render
componentWillMount() {
  console.log('willMount-Complete - создается и работает после render ')
}

componentDidMount() {
  console.log('ditMount-Complete - создается и работает после render ')
  this.getData()
}

getData = () => {
  fetch('http://testmax.serverway.ru/api/user/records').then((response) => {
    console.log('response', response)
    return response.json();
  }).then((data) => {
    console.log(data)
    this.setState ({
      data: data.data
    })
  });
}

componentDidUpdate() {
  console.log('componentDidUpdate - обновление компонента')
}

componentWillUnmount() {
  console.log('componentWillUnmount - создается и работает после render и удаления компонента')
}


// Методы жизненного цикла
  // MOUNTTING - монтирование и оформление компонента в первый раз 
    // constructor() => render => componentDitMount()
      // componentDitMount - компонент уже подключен уже на странице

  // UBDATES - обновление компонента
    // new props - новые свойства
                                  // => componentDitUpdate() - компонент обновился
    // setState()

  // UNMOUNTTING - удаление компонента
    // componentWillUnmount() - компонент будет удален

  // ERROR - ошибка
    // componentDitCatch()






  render() {
    console.log('render отобразился')
    const data = this.state.data;
    console.log(this.state);
    return (
      <div>
        <Nav />
        <Main>
          <LeftPanel/>
          <div className="content">
            <div className="orderMain">
              {/* создание */}
              {data.map((elem, index)=>{
                return(
                  <Card
                    waiting= {elem.waiting}
                    status= {elem.status}
                    count= {elem.count}
                    time= {elem.time}
                    name={elem.name} 
                    phone= {elem.phone}
                    halls= {elem.halls}
                    created= {elem.created}
                    deleteComp = {() => this.funcObgectDelete(index)}
                    edit = {() => this.edit(elem,index)}/>
                  )
                }
                )
                }
            </div>
            <div className = "bottomPanel">
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
              <form>
                <p>
                    <label>Время</label><br />
                    <input type="text" value={this.state.waiting} onChange={this.handleChangeWaiting}/>
                </p>
                <p>
                    <label>Статус</label><br />
                    <input type="text" value={this.state.status} onChange={this.handleChangeStatus}/>
                </p>
              </form>
              <form>
                <p>
                    <label>Количество:</label><br />
                    <input type="text" value={this.state.count} onChange={this.handleChangeCount}/>
                </p>
                <p>
                    <label>Окончание:</label><br />
                    <input type="text" value={this.state.time} onChange={this.handleChangeTime}/>
                </p>
              </form>
              <form>
                <p>
                    <label>Имя:</label><br />
                    <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                </p>
                <p>
                    <label>Телефон:</label><br />
                    <input type="text" value={this.state.phone} onChange={this.handleChangePhone}/>
                </p>
              </form>
            </div>
            <form>
            <p>
              <label>Зал:</label><br />
              <input className ='hall' type="text" value={this.state.halls} onChange={this.handleChangeHalls}/>
                <select>
                  <option>Основной зал</option>
                  <option>Малый зал</option>
              </select>
            </p>
            <p>
              <label>Время создания:</label><br />
              <input className = 'created' type="text" value={this.state.created} onChange={this.handleChangeCreated}/>
            </p>
            <button className = 'buttonSave' onClick = {this.handleSubmit}>Сохранить и выйти</button>
            <img src = {require("./image/Delete-80_icon-icons.com_57340 (1).png")} className = 'buttonOff' onClick = {this.closeModal}/>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;