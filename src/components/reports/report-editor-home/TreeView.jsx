/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React, { PureComponent } from 'react';
import { Treebeard } from 'react-treebeard';

const data = {
    name: 'Reportes',
    toggled: true,
    children: [
        {
            name: 'Anexo A',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'Promesas de pago',
            loading: true,
            children: []
        },
        {
            name: 'Beneficios elite',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        },
        {
            name: 'Incentivos Elite',
            children: [{
                name: 'Secciones',
                children: [
                    { name: 'Introducción' },
                    { name: 'Provisiones' },
                    { name: 'Especificaciones' },
                    { name: 'Semanas imperiales - Introducción' },
                    { name: 'Semanas imperiales - PEF' },
                    { name: 'Semanas imperiales - PEFG' },
                    { name: 'Semanas imperiales - PER' },
                    { name: 'Semanas imperiales - PERG' },
                    { name: 'Semanas imperiales - PEL' },
                    { name: 'Semanas imperiales - PELG' },
                    { name: 'Semanas imperiales - PEL Cabos' },
                    { name: 'Semanas imperiales - PEL Cabos Plus' },
                    { name: 'Semanas imperiales - PEL Silver' },
                ]
            },
            {
                name: 'Textos auxiliares',
                children: [
                    { name: 'nested child 1' },
                    { name: 'nested child 2' }
                ]
            }]
        },
        {
            name: 'Incentivos Elite Golf',
            loading: true,
            children: []
        },
        {
            name: 'Cláusulas del contrato',
            loading: true,
            children: []
        },
        {
            name: 'Certificado de Spa Money',
            loading: true,
            children: []
        },
        {
            name: 'Promociones Elite',
            loading: true,
            children: []
        },
        {
            name: 'Day Pass',
            loading: true,
            children: []
        },
        {
            name: 'Promociones de referidos',
            loading: true,
            children: []
        },
        {
            name: 'Seguro de vida',
            loading: true,
            children: []
        },
        {
            name: 'Tarifas de reservaciones',
            loading: true,
            children: []
        },
        {
            name: 'Palace Rewards',
            loading: true,
            children: []
        },
        {
            name: 'Verificación ágil',
            loading: true,
            children: []
        },
        {
            name: 'Semana de rifa',
            loading: true,
            children: []
        },
        {
            name: 'RCI',
            loading: true,
            children: []
        },
        {
            name: 'Interval',
            loading: true,
            children: []
        },
        {
            name: 'Monedero electrónico',
            loading: true,
            children: []
        },

    ]
};

//https://openbase.io/js/react-treebeard/documentation
//documentación del componente
class TreeView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { data };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const { cursor, data } = this.state;
        if (cursor) {
            this.setState(() => ({ cursor, active: false }));
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }

    render() {
        const { data } = this.state;
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}



export default TreeView;