import React, { useEffect, FC, useState } from 'react'
import { Title, Subtitle, BodyText, Table, TableCell, TableHeader, TableRow, TableHeadersRow } from '@reapit/elements'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '../../core/connect-session'
import { configurationAppointmentsApiService } from '../../platform-api/configuration-api'
import { ListItemModel } from '@reapit/foundations-ts-definitions'
import { URLS, BASE_HEADERS } from "../../constants/api"

export type AuthenticatedProps = {}

export const Authenticated: FC<AuthenticatedProps> = () => {
  const [properties, setProperties] = useState([]);
  const { connectSession } = useReapitConnect(reapitConnectBrowserSession)
  const [appointmentConfigTypes, setAppointmentConfigTypes] = useState<ListItemModel[]>([])

  useEffect(() => {
    const fetchAppoinmentConfigs = async () => {
      if (!connectSession) return
      const serviceResponse = await configurationAppointmentsApiService(connectSession)
      if (serviceResponse) {
        setAppointmentConfigTypes(serviceResponse)
      }
    }

    if (connectSession) {
      fetchAppoinmentConfigs()

      fetch("https://platform.reapit.cloud/properties",
        {
          method: "GET",
          headers: {
            "Content-type": "",
            "Authorization": `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiOWVjY2UxYi1jY2U0LTRkYzktYTVkNy03ZmY0NzBhN2ZmMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlciIsIkZvdW5kYXRpb25zRGV2ZWxvcGVyQWRtaW4iXSwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhZ2VuY3lDbG91ZFwvbGFuZGxvcmRzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMud3JpdGUgYWdlbmN5Q2xvdWRcL29mZmVycy5yZWFkIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBsaWNhbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy5yZWFkIGFnZW5jeUNsb3VkXC9pZGVudGl0eWNoZWNrcy5yZWFkIGFnZW5jeUNsb3VkXC9wYXltZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9pZGVudGl0eWNoZWNrcy53cml0ZSBhZ2VuY3lDbG91ZFwva2V5cy5yZWFkIGFnZW5jeUNsb3VkXC9sYW5kbG9yZHMud3JpdGUgYWdlbmN5Q2xvdWRcL2NvbnZleWFuY2luZy53cml0ZSBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3NvdXJjZXMud3JpdGUgb3BlbmlkIHByb2ZpbGUgYWdlbmN5Q2xvdWRcL3BheW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC9uZWdvdGlhdG9ycy53cml0ZSBhZ2VuY3lDbG91ZFwvYXBwbGljYW50cy5yZWFkIGFnZW5jeUNsb3VkXC9uZWdvdGlhdG9ycy5yZWFkIGFnZW5jeUNsb3VkXC92ZW5kb3JzLndyaXRlIHBob25lIGFnZW5jeUNsb3VkXC9qb3VybmFsZW50cmllcy5yZWFkIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMud3JpdGUgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy5yZWFkIGFnZW5jeUNsb3VkXC9pbWFnZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy53cml0ZSBhZ2VuY3lDbG91ZFwvdGFza3Mud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLnJlYWQgYWdlbmN5Q2xvdWRcL2VucXVpcmllcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLnJlYWQgYWdlbmN5Q2xvdWRcL2tleXMud3JpdGUgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLndyaXRlIGFnZW5jeUNsb3VkXC9kb2N1bWVudHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmZXJzLndyaXRlIGFnZW5jeUNsb3VkXC9qb3VybmFsZW50cmllcy53cml0ZSBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90ZW5hbmNpZXMucmVhZCBlbWFpbCBhZ2VuY3lDbG91ZFwvYXJlYXMud3JpdGUgYWdlbmN5Q2xvdWRcL2NvbnRhY3RzLndyaXRlIGFnZW5jeUNsb3VkXC9pbWFnZXMucmVhZCBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy5yZWFkIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMucmVhZCBhZ2VuY3lDbG91ZFwvdHJhbnNhY3Rpb25zLnJlYWQiLCJhdXRoX3RpbWUiOjE2NDIxNDU0ODksImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX2VRN2RyZU56SiIsImV4cCI6MTY0MjE0OTA4OSwiaWF0IjoxNjQyMTQ1NDg5LCJ2ZXJzaW9uIjoyLCJqdGkiOiI3NzcxMmNmYS04ODBkLTQzNGMtOTViMi0wM2MwMDUwYjM5NzYiLCJjbGllbnRfaWQiOiI0bDZqMHVucW9sNGswMmJzbDZxODlvZGVtNSIsInVzZXJuYW1lIjoiYjllY2NlMWItY2NlNC00ZGM5LWE1ZDctN2ZmNDcwYTdmZjE2In0.Pcc3XrZBNQta_-gQNGt6IgfU3n7f7f6e7o_MyN-GSGYLeXTS7o4FSkCVYPMiu38jF4bXPW1ECl8AKBQbAhoKxxjspjW00Cm5uio95TMu3aDF46TwN1tYq8z7GrpEEGa35nB4M1_mVV8cq7aCZrgGmPZxsZ4FpQs86CWsKifVxce_y_sk8x4n_yh01K_9Pcvgr6knwvRsmh1LFxR3wZaJd5Dh1Z3R_zR_z2zvB_5eTJ2w2u1pkrgkRiMulOqLqoI8-LnrTlxyQ5gVrCvfMiWQq48DqbHUDhDxrtKOR0wdvLy2XLPF7wUHB0_RXXcnskfTnzuM-xEL0aRWDcjQ49RrVg`,
            "api-version": "2020-01-31",
            "Content-Type": "application/json"
          },
        })
        .then((res) => res.json())
        .then((data) => { 
          setProperties([...data._embedded])
          console.log(data._embedded)
         })
    }
  }, [connectSession])

  console.log('Appointment Config Types are: ', appointmentConfigTypes)
  return (
    <>
      <Title>Welcome To Reapit Foundations</Title>
      <Subtitle>Next steps:</Subtitle>
      <BodyText>You are now authenticated against our sandbox data.</BodyText>
      <BodyText>
        Your Reapit connectSession object is available via the useReapitConnect hook and will be automatically refreshed
        unless you logout. This will provide you with an accessToken and login identity information to authenticate
        against our plaform APIs. For more on this{' '}
        <a
          href="https://developers.reapit.cloud/api-docs//api/web#connect-session"
          target="_blank"
          rel="noreferrer noopener"
        >
          visit here.
        </a>
      </BodyText>
      <BodyText>
        There is a sample fetch service that pulls Appointment Config Types from Foundations API to demonstrate fetching
        data using this scaffold, logging the data out to the JS console. Naturally you can replace this endpoint in the
        platform-api file with an API of your choosing from the API explorer in the developer portal. For our API
        explorer{' '}
        <a href="https://developers.reapit.cloud/swagger" target="_blank" rel="noreferrer noopener">
          visit here.
        </a>
      </BodyText>
      <BodyText>
        Included in the scaffold is the latest version of the Elements UI library. This is the simplest way for you to
        adhere to the basic style guidelines for Marketplace applications. For more on this{' '}
        <a href="https://developers.reapit.cloud/api-docs/elements" target="_blank" rel="noreferrer noopener">
          visit here.
        </a>

        <br />
        <br />

        {properties.length === 0 && <h1>Loading</h1>}

        {properties.length > 0 && (
          <Table>
              <TableHeadersRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Created</TableHeader>
              <TableHeader>Modified</TableHeader>
              <TableHeader>Marketing Mode</TableHeader>
              <TableHeader>Currency</TableHeader>
              </TableHeadersRow>

            {properties.map((property) => 
              <>
                <TableRow>
                  <TableCell>{property.id}</TableCell>
                  <TableCell>{property.created}</TableCell>
                  <TableCell>{property.modified}</TableCell>
                  <TableCell>{property.marketingMode}</TableCell>
                  <TableCell>{property.currency}</TableCell>
                </TableRow>
              </>
            )}
        </Table>
        )}
      </BodyText>
    </>
  )
}

export default Authenticated
