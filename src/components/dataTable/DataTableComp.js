import React, { useState } from "react";
import "./story.scss";
import { TrashCan, Save, Download } from "@carbon/icons-react";
import {
  DataTable,
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} from "@carbon/react";
import { batchActionClick, rows, headers } from "../dataTable/shared.js";

export const DataTableComp = () => {
  const insertInRandomPosition = (array, element) => {
    const index = Math.floor(Math.random() * (array.length + 1));
    return [...array.slice(0, index), element, ...array.slice(index)];
  };

  class DynamicRows extends React.Component {
    state = {
      rows,
      headers: headers,
      id: 0,
    };

    handleOnHeaderAdd = () => {
      const length = this.state.headers.length;
      const header = {
        key: `header_${length}`,
        header: `Header ${length}`,
      };

      this.setState((state) => {
        const rows = state.rows.map((row) => {
          return {
            ...row,
            [header.key]: header.header,
          };
        });
        return {
          rows,
          headers: state.headers.concat(header),
        };
      });
    };

    handleOnRowAdd = () => {
      this.setState((state) => {
        const { id: _id, rows } = state;
        const id = _id + 1;
        const row = {
          id: "" + id,
          name: `New Row ${id}`,
          protocol: "HTTP",
          port: id * 100,
          rule: id % 2 === 0 ? "Round robin" : "DNS delegation",
          attached_groups: `Row ${id}'s VM Groups`,
          status: "Starting",
        };

        state.headers
          .filter((header) => row[header.key] === undefined)
          .forEach((header) => {
            row[header.key] = header.header;
          });

        return {
          id,
          rows: insertInRandomPosition(rows, row),
        };
      });
    };

    render() {
      return (
        <DataTable
          rows={this.state.rows}
          headers={this.state.headers}
          render={({
            rows,
            headers,
            getHeaderProps,
            getSelectionProps,
            getToolbarProps,
            getBatchActionProps,
            getRowProps,
            // getExpandedRowProps,
            onInputChange,
            selectedRows,
            getTableProps,
            getTableContainerProps,
          }) => {
            const batchActionProps = getBatchActionProps();
            return (
              <TableContainer
                title="BCM-DemoID"
                description="Individual"
                {...getTableContainerProps()}
              >
                <TableToolbar {...getToolbarProps()}>
                  <TableBatchActions {...getBatchActionProps()}>
                    <TableBatchAction
                      renderIcon={TrashCan}
                      iconDescription="Delete the selected rows"
                      onClick={batchActionClick(selectedRows)}
                      tabIndex={
                        batchActionProps.shouldShowBatchActions ? 0 : -1
                      }
                    >
                      Delete
                    </TableBatchAction>
                    <TableBatchAction
                      renderIcon={Save}
                      iconDescription="Save the selected rows"
                      onClick={batchActionClick(selectedRows)}
                      tabIndex={
                        batchActionProps.shouldShowBatchActions ? 0 : -1
                      }
                    >
                      Save
                    </TableBatchAction>
                    <TableBatchAction
                      renderIcon={Download}
                      iconDescription="Download the selected rows"
                      onClick={batchActionClick(selectedRows)}
                      tabIndex={
                        batchActionProps.shouldShowBatchActions ? 0 : -1
                      }
                    >
                      Download
                    </TableBatchAction>
                  </TableBatchActions>
                  <TableToolbarContent>
                    <TableToolbarSearch
                      tabIndex={
                        batchActionProps.shouldShowBatchActions ? -1 : 0
                      }
                      onChange={onInputChange}
                    />
                    <TableToolbarMenu
                      tabIndex={
                        batchActionProps.shouldShowBatchActions ? -1 : 0
                      }
                    >
                      <TableToolbarAction onClick={this.handleOnRowAdd}>
                        Add row
                      </TableToolbarAction>
                      <TableToolbarAction onClick={this.handleOnHeaderAdd}>
                        Add header
                      </TableToolbarAction>
                    </TableToolbarMenu>
                  </TableToolbarContent>
                </TableToolbar>
                <Table {...getTableProps()} aria-label="sample table">
                  <TableHead>
                    <TableRow>
                      <TableExpandHeader aria-label="expand row" />
                      <TableSelectAll {...getSelectionProps()} />
                      {headers.map((header, i) => (
                        <TableHeader key={i} {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <React.Fragment key={row.id}>
                        <TableExpandRow {...getRowProps({ row })}>
                          <TableSelectRow {...getSelectionProps({ row })} />
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableExpandRow>
                        <TableExpandedRow
                          colSpan={headers.length + 3}
                          className="demo-expanded-td"
                          // {...getExpandedRowProps({ row })}
                        >
                          <h6>Expandable row content</h6>
                          <div>Description here</div>
                        </TableExpandedRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            );
          }}
        />
      );
    }
  }
  return <DynamicRows />;
};
