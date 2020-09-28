import React, {Component} from 'react';

class Registrasi extends Component{
    constructor(props){
        super(props)
        this.state = {
            judul: 'Contoh Judul',
            valuePertama:'',
            valueKedua:'',
            valueKetiga:'',
            valueKeempat:''

        }
        this.ubahState = this.ubahState.bind(this);
     
    }
    ubahState(namaValue, e){
        //cara biasa
        // this.setState({[namaValue]: e.target.value})
        
        //cara asynchronous
        var data = e.target.value
        this.setState(function(state, props){
            return{
                [namaValue]: data
            }
        });
    }
    render(){
        return(
            <div>
            <h2>{this.state.judul}</h2>

            <p>{this.state.valuePertama}</p>
            <input value={this.state.valuePertama} onChange={(e)=>this.ubahState("valuePertama", e)} />
            <p>************************************</p>

            <p>{this.state.valueKedua}</p>
            <input value={this.state.valueKedua} onChange={(e)=>this.ubahState("valueKedua", e)} />
            <p>************************************</p>

            <p>{this.state.valueKetiga}</p>
            <input value={this.state.value} onChange={(e)=>this.ubahState("valueKetiga", e)} />
            <p>************************************</p>

            <p>{this.state.valueKeempat}</p>
            <input value={this.state.valueKeempat} onChange={(e)=>this.ubahState("valueKeempat" ,e)} />
            <p>************************************</p>
            {
            //<button onClick={this.ubahState} >Klik Untuk Berubah</button>
            //<input onChange={this.ubahState} />
            }
            </div>
        )
    }
    //Perubahan State secara reguler
        // this.setState({judul: 'Merubah Judul'})
        
    //Perubahan State secara Asynchronous reguler
        // this.setState(function(state,props){
        //     return{
        //         judul: 'Merubah secara Asynchronous reguler'
        //     }
        // });
    
    //Perubahan State secara Asynchronous
        // this.setState((state,props) => ({
        //     judul: 'Merubah secara Asynchronous arrow Function'
        // }))
}
export default Registrasi;