import React, { Component } from 'react'
import {Row,Col} from 'reactstrap';

import './important-links.css'



export default class ImportantLinks extends Component {  
   render() {
    const BrowardLinks = [
        {
            text:"Broward County VAB Home",
            link:"http://www.broward.org/VAB/Pages/Welcome.aspx"
        },
        {
            text:"Broward Axia 2017",
            link:"https://bcvab.broward.org/axiaweb2017/"
        },
        {
            text:"Broward County Property Appraiser",
            link:"http://www.bcpa.net/"
        },
        {
            text:"Broward County Tax Collector Home	",
            link:"http://www.broward.org/RecordsTaxesTreasury/Pages/Default.aspx "
        },
        {
            text:"Broward Tax Bill Search",
            link:"https://broward.county-taxes.com/public"
        },
        {
            text:"Broward County Millage Rates",
            link:"http://www.bcpa.net/millage.asp"
        },
    ]
    
    const MiamiDadeLinks = [
        {
            text:"Miami Dade County VAB Home",
            link:"http://www.miami-dadeclerk.com/home.asp"
        },
        {
            text:"Miami-Dade VAB Search",
            link:"https://www2.miami-dadeclerk.com/vab/vabsearch.aspx"
        },
        {
            text:"Miami-Dade Property Search",
            link:"https://www.miamidade.gov/propertysearch/#/"
        },
        {
            text:"Miami-Dade Tax Collector Home",
            link:"http://www.miamidade.gov/taxcollector/"
        },
        {
            text:"Miami-Dade County Tax Bill Search",
            link:"https://miamidade.county-taxes.com/public/moved?url=https://miamidade.county-taxes.com/public"
        },
        {
            text:"Miami-Dade County Millage Rates",
            link:"http://www.miamidade.gov/pa/millage_tables.asp"
        },
    ]

    const miscLinks = [
        {
            text:"All Florida Property Appraiser Sites",
            link:"http://dor.myflorida.com/dor/property/appraisers.html"
        },
        {
            text:"All Florida VAB Sites",
            link:"http://dor.myflorida.com/dor/property/vabs.html"
        },
        {
            text:"Florida File and Pay Taxes and Fees Online",
            link:"http://dor.myflorida.com/dor/eservices/apps/filepay"
        },
        {
            text:"Florida Department of Revenue",
            link:"http://dor.myflorida.com/dor/"
        },
        {
            text:"Florida Department of Revenue/Property Tax",
            link:"http://dor.myflorida.com/dor/property"
        },
        {
            text:"Florida Property Tax Valuation and Income Limitation Rates",
            link:"http://dor.myflorida.com/dor/property/limitations.html"
        }

    ]


    const miamiDade = MiamiDadeLinks.map((res) => 
    <li className = "list-important-links">
        <a href = {res.link}> {res.text} </a>
    </li>
    )

    const broward = BrowardLinks.map((res) => 
        <li className = "list-important-links">
            <a href = {res.link}> {res.text} </a>
        </li>
    )

    const misc = miscLinks.map((res) =>
        <li className = "list-important-links">
            <a href={res.link}> {res.text}</a>
        </li>
    )
    return (
        <Row>
            <Col lg = '12'>
                <h1>
                    Important Links
                </h1>
            </Col>
            <hr/>
            <Col md = {{size:6}} lg ={{size:'4', offset:'2'}}>
                <h2>
                    Broward County
                </h2>
                {broward}

            </Col>
            <Col md = {{size:6}} lg ={{size:'4', offset:'2'}}>
                <h2>
                    Miami-Dade
                </h2>
                {miamiDade}
            </Col> 
            <Col style = {{textAlign:'center'}} lg ='12'>
            <br/>
                <h2> More Helpful Links</h2>
                {misc}
            </Col>
        </Row>  
    )
  }
}
