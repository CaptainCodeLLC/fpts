import React, { Component } from 'react';
import { Row, Container, Col, Table } from 'reactstrap';
import './service.css';
export default class ServiceFees extends Component {
  render() {
    return (
      <div className = "services-container">
      <Container >
        <Row style={{ marginBottom: 0 }}>
          <h1 className="services-header">Fee Schedule Information</h1>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>
              For a preliminary tax appeal analysis, Florida Property Tax Service (FPTS) charges an initial, non-refundable processing and set-up fee of $20.00 per folio. FPTS absorbs all other costs for administrative filing fees, income analysis, comparable market analysis, presentation preparation (i.e. photos, aerials, plats, special exhibits) and hearing attendance.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              FPTS works on a contingent fee structure based on a percentage of the tax savings realized from a reduction in the assessed value (actual percentage determined by the per property fee schedule.) This fee is charged for all tax savings achieved for the current or prior tax years that are a direct result of actions taken by FPTS. The methods used in calculating tax savings are identical to the methods used by the county. In the event there is NO REDUCTION in the assessed value, there is no contingency fee charged to you.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg='5'>
            <h1 className="table-header-text">Per Property Fee Schedule</h1>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th colSpan="4"><h4 style={{ marginBottom: 0 }}>Real Estate</h4></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4">
                    <p2 style={{ margin: 0 }}>
                      Applies to portions of assessments taxed on the full millage rate.
              </p2>
                  </td>

                </tr>
                <tr>
                  <td colSpan="3"> $750,000 and above</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td colSpan="3"> Less than %750,000</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <th colSpan="4"><h4 style={{ marginBottom: 0 }}>Business Tangible Personal</h4></th>
                </tr>

                <tr>
                  <td colSpan="4">
                    <p1 style={{ margin: 0 }}>
                      Applies to portions of assessments taxed on the full millage rate.
              </p1>
                  </td>

                </tr>
                <tr>
                  <td colSpan="3"> $750,000 and above</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td colSpan="3"> Less than %750,000*</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td colSpan='4'>
                    <i>*Fees for properties requiring business tangible personal property appraisals shall be negotiated by mutual consent of both parties.</i>
                  </td>
                </tr>
                <tr>
                  <td colSpan = '4'>
                    <h4>Special Purpose / Complex</h4>
                  </td>
                </tr>
                <tr>
                  <td style = {{textAlign:'right'}}colSpan = '4'>
                    To be Negotiated
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={{ size: '6', offset: '1' }}>
            <h1 className="table-header-text">Additional Services</h1>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th colSpan="4"><h4 style={{ marginBottom: 0 }}>Filings • Exemptions • Compliance</h4></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3"> Late Petition Filing</td>
                  <td>$99</td>
                </tr>
                <tr>
                  <td colSpan="3"> Each Additional Late Petition Filing</td>
                  <td>$49</td>
                </tr>
                <tr>
                  <td colSpan='4'></td>
                </tr>
                <tr>
                  <td colSpan="3">Agricultural Ecemption Filing</td>
                  <td>$99</td>
                </tr>
                <tr>
                  <td colSpan="3">Homestead Filing</td>
                  <td>$49</td>
                </tr>
                <tr>
                  <td colSpan="3">Portability Filing</td>
                  <td>$99</td>
                </tr>
                <tr>
                  <td colSpan="3">Combo Homestead & Portability Filing</td>
                  <td>$175</td>
                </tr>
                <tr>
                  <td colSpan="3">Late Homestead Filing (up to July 31)</td>
                  <td>$150</td>
                </tr>
                <tr>
                  <td colSpan="3">Late Portability Filing (up to July 31)</td>
                  <td>$175</td>
                </tr>
                <tr>
                  <td colSpan="3">Combo Late Homestead & Portability Filing</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td colSpan="3">Late Homestead Filing (after August 1)</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td colSpan="3">Late Portability Filing (after August 1)</td>
                  <td>$250</td>
                </tr>
                <tr>
                  <td colSpan="3">Homestead Reinstatement</td>
                  <td>Call</td>
                </tr>
                <tr>
                  <td colSpan="4">
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">Tangible Personal Property (TPP) Compliance</td>
                  <td>Call</td>
                </tr>
                <tr>
                  <td colSpan="4">

                  </td>
                </tr>
                <tr>
                  <td colSpan="3">County Income & Expense Requests</td>
                  <td>Call</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col lg='12'>
            <h2>Fee Calculation Samples</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan="1">{'   '}</th>
                  <th>Preliminary</th>
                  <th>Assessment Final</th>
                  <th>Reduction</th>
                  <th>Millage Tax Rate</th>
                  <th>Gross Tax Savings</th>
                  <th>Agreement</th>
                  <th>FPTS Fee</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">Real Estate</th>
                <td>$3,100,000</td>
                <td>$2,750,000</td>
                <td>$350,000</td>
                <td>.020</td>
                <td>$7,000</td>
                <td>35%</td>
                <td>$2,450</td>
              </tr>
              <tr>
                <th scope= "row"> Tangible Property</th>
                <td valign="middle" >$500,000</td>
                <td valign="middle" >$350,000</td>
                <td valign="middle" >$150,000</td>
                <td valign="middle" >.020</td>
                <td valign="middle" >$3,000</td>
                <td valign="middle" >40%</td>
                <td valign="middle" >$1,200</td>

              </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container >
    </div>
    )
  }
}
