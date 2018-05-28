import React, { Component } from "react";

/**
 * componentes
 */
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import { Button } from 'primereact/components/button/Button';

/**
 * Others
 */
import { AuthoresService } from "../services/AuthoresService";

export class TableComponent extends Component{
    
    constructor(){
        super();
        this.state = {}
        this.authoresService = new AuthoresService();
    }

    componentDidMount(){
        this.authoresService.getAllAuthores().then(data => {
            this.setState({authores: data})
        });
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="fa-edit" className="ui-button-warning"></Button>
            <Button type="button" icon="fa-remove" className="ui-button-danger"></Button>
        </div>;
    }

    render(){
        return(
            <div className="content-section implementation">
                <DataTable responsive={true} value={this.state.authores}>
                    <Column field="name" header="Name" />
                    <Column field="idade" header="Idade" />
                    <Column field="" header="Fulano" />
                    <Column header="Ações" body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
                </DataTable>
            </div>
        )
    }
}