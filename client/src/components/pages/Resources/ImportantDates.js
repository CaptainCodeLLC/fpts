import React, { Component } from 'react'
import { Table, } from 'reactstrap';
export default class ImportantDates extends Component {
  render() {
    return (
      <div>

        <h1 id = "important-dates-header">2018-2019 Property Tax Calendar</h1>

        <Table>
        <thead>
          <tr>
            <th>Deadline</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">January 1st</th>
            <td>Date current year assessment valuations are based on</td>
          </tr>
          <tr>
            <th scope="row">February - April</th>
            <td>Property Appraiser Income Compliance Requests - income and expense information for all income-producing properties</td>
          </tr>
          <tr>
            <th scope="row">March 1st</th>
            <td>Deadlines for <strong>ALL EXEMPTIONS</strong>, including Homestead Exemption and Agricultural Classification.</td>
          </tr>
          <tr>
            <th scope="row">March</th>
            <td>Counties request income and expense information for all income-producing properties</td>
          </tr>
          <tr>
            <th scope="row">April 1st</th>
            <td>	
                Deadline for filing Tangible Personal Property returns (form DR405)</td>
          </tr>
          <tr>
            <th scope="row">April</th>
            <td>Renew/Sign-On with Florida Property Tax Service (FPTS)</td>
          </tr>
          <tr>
            <th scope="row">April/May</th>
            <td>Deadline to submit income and expense information to county assessors.</td>
          </tr>
          <tr>
            <th scope="row">June</th>
            <td>Counties will begin selling tax certificates for unpaid tax bills.</td>
          </tr>
          <tr>
            <th scope="row">July 1st</th>
            <td>County Appraiser's deadline to submit taxroll to Department of Revenue for approval. <br/>
                Notification of denied exemptions and classifications are mailed.</td>
          </tr>
          <tr>
            <th scope="row">July 31st</th>
            <td>Deadline for filing appeal petitions on denied exemptions and agricultural classifications. </td>
            

          </tr> <tr>
            <th scope="row">August</th>
            <td>Renew Sign/-On with Florida Property Tax Service (FPTS) <br/>
            Notice of Proposed Taxes (TRIM notice) mailed to taxpayers
            </td>
          </tr> <tr>
            <th scope="row">September</th>
            <td>
            <strong>Miami Dade, Broward, and Palm Beach County</strong> deadline for filing petitions contesting property assessments
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
  }
}
