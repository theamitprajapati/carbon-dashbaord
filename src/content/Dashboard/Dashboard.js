import React, { useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  ClickableTile,
  Pagination,
  MenuItemSelectable,
  Grid,
  Column,
  Link,
  Button,
  MenuItemGroup,
  MenuItem,
  StructuredListBody,
  Menu,
  Checkbox,
  ContainedListItem,
  ContainedList,
  ProgressBar,
  Search
} from "@carbon/react";

import { SimpleBarChart, DonutChart } from "@carbon/charts-react";

import {
  CloseFilled,
  WarningFilled,
  CheckmarkFilled,
  VideoChat,
  Image,
  Police,
  Folders,
  Upload,
  Pen,
} from "@carbon/react/icons";

import PageSeparator from "../../components/Dashboard/PageSeparator";
import ReportsTable from "../../components/ReportsTable/ReportsTable";
import ReportModal from "../../components/Report/ReportModal";

import header_data from "../../components/Dashboard/header_data";
import dummy_data from "../../components/Dashboard/dummy_data";

import "@carbon/charts/styles.css";
import { color } from "d3";

import XCard from "../../components/XCard/Card";
const headerData = header_data;
const rowData = dummy_data.map((x) => {
  return {
    ...x,
    id: x.id.toString(),
  };
});

const groupCount = (objectArray, property) => {
  let transform = new Map();
  transform = objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  let result = [];
  for (let key in transform) {
    let arraySize = transform[key].length;
    result.push({
      group: key,
      value: arraySize,
    });
  }

  return result;
};

const chartStatus = {
  data: groupCount(rowData, "status"),
  options1: {
    title: "Status",
    axes: {
      left: {
        mapsTo: "group",
        scaleType: "labels",
      },
      bottom: {
        mapsTo: "value",
      },
    },
    height: "220px",
  },
  options2: {
    title: "",
    resizable: true,
    donut: {
      center: {
        label: "Browsers",
      },
    },
    height: "220px",
  },
};

const chartOfficer = {
  data: groupCount(rowData, "case_officer"),
  options1: {
    title: "Officer",
    axes: {
      left: {
        mapsTo: "group",
        scaleType: "labels",
      },
      bottom: {
        mapsTo: "value",
      },
    },
    height: "220px",
  },
  options2: {
    title: "",
    resizable: true,
    donut: {
      center: {
        label: "Browsers",
      },
    },
    height: "220px",
  },
};

const Dashboard = () => {
  const [totalItems, setTotalItems] = useState(rowData.length);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(5);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState({});

  const editIncidentReport = (i) => {
    let incident = {};

    i.cells.map((x) => {
      let id = x.id.split(":")[1];
      incident[id] = x.value;
    });

    setSelectedIncident(incident);
    setModalIsOpen(true);
  };

  const archiveIncidentReport = (i) => {
    console.log(i);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Grid className="dashboard-page" fullWidth>
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <a href="/#">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem href="#" isCurrentPage>
            Dashboard Details
          </BreadcrumbItem>
        </Breadcrumb>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <Grid>
              <Column lg={8} md={8} sm={4}>


                <XCard
                  title="Resource summary"
                  action={<Link>View resource</Link>}
                >
                  <ContainedList label="List title" kind="on-page">
                    <ContainedListItem action="Cloud Foundry Apps"><Link>Cloud Foundry Apps</Link></ContainedListItem>
                    <ContainedListItem action="Cloud Foundry Services"><Link>Cloud Foundry Services</Link></ContainedListItem>
                    <ContainedListItem action="User Provided Services"><Link>User Provided Services</Link></ContainedListItem>
                    <ContainedListItem action="Devices"><Link>Devices</Link></ContainedListItem>
                    <ContainedListItem action={<Button size="sm">Hello</Button>}><Link>Clusters</Link></ContainedListItem>
                  </ContainedList>
                  <ContainedList label="List title" kind="on-page">
                    <ContainedListItem>List item</ContainedListItem>
                    <ContainedListItem>List item</ContainedListItem>
                    <ContainedListItem>List item</ContainedListItem>
                    <ContainedListItem>List item</ContainedListItem>
                  </ContainedList>
                </XCard>
              </Column>

              <Column lg={4} md={8} sm={4}>
                <XCard title="Planned maintenance">
                  <ProgressBar
                    label="Progress bar label"
                    helperText="Optional helper text"
                    value={10}
                  />
                  <ProgressBar
                    label="Progress bar label"
                    helperText="Optional helper text"
                    value={20}
                  />
                  <ProgressBar
                    label="Progress bar label"
                    helperText="Optional helper text"
                    value={50}
                  />
                  <ProgressBar
                    label="Progress bar label"
                    helperText="Optional helper text"
                    value={80}
                  />
                </XCard>
              </Column>

              <Column lg={4} md={8} sm={4}>
                <XCard
                  title="Location status"
                  action={<Link>View resource</Link>}
                >
                  <ContainedList label="List title" kind="on-page">
                    <ContainedListItem>List item</ContainedListItem>
                    <ContainedListItem>List item</ContainedListItem>
                    <ContainedListItem>List item</ContainedListItem>
                    <ContainedListItem action={ <Checkbox  id="opt-1" labelText="1" />}>List item 
                    
                      </ContainedListItem>
                  </ContainedList>
                </XCard>
              </Column>
            </Grid>
          </Column>
        </Grid>
        <PageSeparator title="Reports" />
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <Grid>
              <Column
                md={4}
                lg={16}
                sm={4}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <Pagination
                  totalItems={totalItems}
                  backwardText="Previous page"
                  forwardText="Next page"
                  pageSize={currentPageSize}
                  pageSizes={[5, 25, 50, 100]}
                  itemsPerPageText="Items per page"
                  onChange={({ page, pageSize }) => {
                    if (pageSize !== currentPageSize) {
                      setCurrentPageSize(pageSize);
                    }
                    setFirstRowIndex(pageSize * (page - 1));
                  }}
                />
                <ReportsTable
                  headers={headerData}
                  rows={rowData.slice(
                    firstRowIndex,
                    firstRowIndex + currentPageSize
                  )}
                  editIncidentHandler={editIncidentReport}
                  archiveIncidentHandler={archiveIncidentReport}
                />
                {modalIsOpen && (
                  <ReportModal
                    modalIsOpen={modalIsOpen}
                    modalCancelHandler={closeModal}
                    incident={selectedIncident}
                  />
                )}
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default Dashboard;
