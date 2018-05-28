import React, { Component } from "react";
import {DataTable, Column} from 'primereact/components/datatable/DataTable';
import { AuthoresService } from "../services/AuthoresService";

export class TableComponent extends Component{
    
    constructor(){
        super();
        this.state = {}
        this.authoresService = new AuthoresService();
    }

    componentDidMount(){
        this.authoresService.getAllAuthores.then(data=>{
            this.setState({authores: data});
        });
    }

    render(){
        return(
            <DataTable value={this.state.authores}>
                <Column field="name" header="Name" />
                <Column field="idade" header="Idade" />
            </DataTable>
        )
    }
    
}