/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  ExpandedState,
  SortingState,
} from "@tanstack/react-table";
import clsx from "clsx";
import "./index.css";
import AnimatedExpand from "./AnimatedExpand";
import CustomCheckbox from "../input/CustomCheckbox";

interface CustomTableProps<T = any> {
  data: T[];
  columns: ColumnDef<T>[];
  getSubRows?: (row: T) => any[] | undefined;
  title?: string;
  className?: string;
  enablePagination?: boolean;
  pageSize?: number;
  enableFiltering?: boolean;
  enableExpanding?: boolean; // New flag to control expansion
  enableCheckbox?: boolean;
  enableSorting?: boolean;
  defaultSortKey?: string;
  defaultSortOrder?: "asc" | "desc";
  onRowClick?: (row: T) => void;
  hideHeader?: boolean;
  loading?: boolean;
}

function Filter({ column, table }: { column: any; table: any }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="d-flex gap-2">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder="Min"
        className="form-control form-control-sm"
        style={{ width: "80px" }}
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder="Max"
        className="form-control form-control-sm"
        style={{ width: "80px" }}
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder="Search..."
      className="form-control form-control-sm"
      style={{ width: "150px" }}
    />
  );
}

function CustomTable<T = any>({
  data,
  columns,
  getSubRows,
  // title,
  className,
  enablePagination = false,
  pageSize = 10,
  enableFiltering = false,
  enableExpanding = false, // Default to true for backward compatibility
  enableCheckbox = false,
  enableSorting = false,
  defaultSortKey,
  defaultSortOrder = "desc",
  onRowClick,
  hideHeader = false,
  loading = false,
}: CustomTableProps<T>) {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>(
    defaultSortKey
      ? [{ id: defaultSortKey, desc: defaultSortOrder === "desc" }]
      : [],
  );

  const tableColumns = React.useMemo(() => {
    let processedColumns = [...columns];

    // Enable sorting on columns that have it explicitly enabled and global sorting is on
    if (enableSorting) {
      processedColumns = processedColumns.map((col) => ({
        ...col,
        enableSorting: col.enableSorting === true, // Only enable if explicitly set to true
      }));
    }

    if (!enableCheckbox) return processedColumns;

    const selectionColumn: ColumnDef<T> = {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center justify-center px-1">
          <CustomCheckbox
            indeterminate={table.getIsSomeRowsSelected()}
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center px-1">
          <CustomCheckbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
            className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500"
          />
        </div>
      ),
      size: 40,
      enableSorting: false, // Disable sorting on checkbox column
    };
    return [selectionColumn, ...processedColumns];
  }, [columns, enableCheckbox, enableSorting]);

  const table = useReactTable({
    data,
    columns: tableColumns as any,
    state: {
      expanded: enableExpanding ? expanded : {}, // Only manage expanded state if enabled
      rowSelection,
      sorting: enableSorting ? sorting : [],
    },
    enableRowSelection: enableCheckbox,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: enableExpanding ? setExpanded : undefined,
    onSortingChange: enableSorting ? setSorting : undefined,
    getSubRows: enableExpanding ? (getSubRows as any) : undefined,
    getRowCanExpand: enableExpanding ? undefined : () => false, // Disable expansion when flag is false
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    getExpandedRowModel: enableExpanding ? getExpandedRowModel() : undefined, // Only enable expanded row model if needed
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  const paginationRange = (
    current: number,
    total: number,
    maxPages: number = 5,
  ) => {
    let delta = Math.floor(maxPages / 2);
    let range: (number | string)[] = [];
    let left = Math.max(1, current - delta);
    let right = Math.min(total, current + delta);

    if (right - left + 1 < maxPages) {
      if (left === 1) {
        right = Math.min(total, left + maxPages - 1);
      } else if (right === total) {
        left = Math.max(1, right - maxPages + 1);
      }
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (left > 2) {
      range.unshift("...");
    }
    if (left > 1) {
      range.unshift(1);
    }

    if (right < total - 1) {
      range.push("...");
    }
    if (right < total) {
      range.push(total);
    }

    return range;
  };

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pages = paginationRange(currentPage, totalPages, 5);

  return (
    <div
      className={clsx(
        "flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm w-full overflow-hidden",
        className,
      )}
    >
      <div
        className="flex-1 overflow-auto"
        style={{ maxHeight: "calc(100vh - 220px)" }}
      >
        <table className="min-w-full divide-y divide-gray-200 border-collapse m-0">
          {!hideHeader && (
            <thead className="sticky top-0 z-20 bg-gray-50 shadow-[0_1px_0_0_#e5e7eb]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50 whitespace-nowrap"
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={clsx(
                            "flex items-center gap-2",
                            enableSorting &&
                              header.column.getCanSort() &&
                              "cursor-pointer select-none",
                          )}
                          onClick={
                            enableSorting && header.column.getCanSort()
                              ? header.column.getToggleSortingHandler()
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {enableSorting && header.column.getCanSort() && (
                            <div className="flex flex-col">
                              {{
                                asc: (
                                  <svg
                                    className="w-3 h-3 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ),
                                desc: (
                                  <svg
                                    className="w-3 h-3 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ),
                              }[header.column.getIsSorted() as string] ?? (
                                <div className="flex flex-col opacity-30">
                                  <svg
                                    className="w-3 h-3 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <svg
                                    className="w-3 h-3 text-gray-400 -mt-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                          )}
                          {enableFiltering && header.column.getCanFilter() ? (
                            <div className="mt-2">
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-8">
                  <div className="flex justify-center items-center text-gray-500">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-indigo-600"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </div>
                </td>
              </tr>
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <React.Fragment key={row.id}>
                    <tr
                      className={clsx(
                        "hover:bg-gray-50 transition-colors",
                        row.depth > 0 && "bg-gray-50",
                        onRowClick && "cursor-pointer",
                      )}
                      onClick={() => onRowClick?.(row.original)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className={clsx(
                            "px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium",
                            row.depth > 0 && `pl-${row.depth * 6 + 6}`,
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>

                    {/* Only render expanded content if expanding is enabled */}
                    {enableExpanding && row.getIsExpanded() && (
                      <AnimatedExpand expanded={row.getIsExpanded()}>
                        <div
                          style={{ paddingLeft: `${(row.depth + 1) * 1.5}rem` }}
                        ></div>
                      </AnimatedExpand>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-8">
                  <span className="text-sm font-medium text-gray-500">
                    No data found
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {enablePagination && (
        <div className="flex items-center justify-between px-6 py-3 bg-white border-t border-gray-200">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {/* <span className="text-sm text-gray-700">Rows per page:</span> */}
                <div className="relative">
                  <select
                    className="
                      appearance-none
                      w-full
                      border
                      border-gray-300
                      rounded-md
                      pl-3
                      pr-10
                      py-2
                      focus:outline-none
                    "
                  >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </select>

                  <div
                    className="
      absolute
      inset-y-0
      right-3
      flex
      items-center
      pointer-events-none
    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">{table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}</span> to <span className="font-medium">{Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)}</span> of{' '}
                                    <span className="font-medium">{data.length}</span> results
                                </p>
                            </div> */}
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {pages.map((pageNum, idx) =>
                  pageNum === "..." ? (
                    <span
                      key={idx}
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={idx}
                      onClick={() =>
                        table.setPageIndex((pageNum as number) - 1)
                      }
                      className={clsx(
                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0",
                        pageNum === currentPage
                          ? "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                      )}
                    >
                      {pageNum}
                    </button>
                  ),
                )}
                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { CustomTable };
