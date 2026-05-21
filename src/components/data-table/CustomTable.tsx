/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { IApplicationState } from "../../store/state/app-state";
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
import { PAGE_OPTIONS } from "../../shared/constants/pagination";

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
  totalCount?: number;
  paginationSize?: "sm" | "md" | "lg";
  paginationColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
  paginationVariant?: "solid" | "bordered" | "light" | "flat";
  showPaginationControls?: boolean;
  scrollBehavior?: "inside" | "outside";
  manualPagination?: boolean;
  pagination?: { page: number; limit: number };
  onPaginationChange?: (pagination: { page: number; limit: number }) => void;
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
  totalCount,
  paginationSize = "md",
  paginationColor = "primary",
  paginationVariant = "solid",
  showPaginationControls = true,
  scrollBehavior = "inside",
  manualPagination = true,
  pagination,
  onPaginationChange,
}: CustomTableProps<T>) {
  const globalTableLoading = useSelector((state: IApplicationState) => state.GeneralData?.tableLoading);
  const isLoading = loading || globalTableLoading;

  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>(
    defaultSortKey
      ? [{ id: defaultSortKey, desc: defaultSortOrder === "desc" }]
      : [],
  );

  const [isPageSizeOpen, setIsPageSizeOpen] = useState(false);
  const pageSizeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pageSizeRef.current && !pageSizeRef.current.contains(event.target as Node)) {
        setIsPageSizeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Convert 1-based external page to TanStack's 0-based pageIndex
  const reactTablePagination = enablePagination && pagination 
    ? { pageIndex: pagination.page - 1, pageSize: pagination.limit }
    : undefined;

  const handlePaginationChange = (updater: any) => {
    if (onPaginationChange) {
      const currentPagination = pagination || { page: 1, limit: 10 };
      const nextTableState = typeof updater === 'function' ? updater(reactTablePagination) : updater;
      
      const limitChanged = currentPagination.limit !== nextTableState.pageSize;
      const nextPagination = {
        page: limitChanged ? 1 : nextTableState.pageIndex + 1,
        limit: nextTableState.pageSize,
      };
      
      onPaginationChange(nextPagination as any);
    }
  };

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
            indeterminate={table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
            checked={table.getIsAllRowsSelected()}
            onChange={(checkedOrEvent: any) => {
              const checked = typeof checkedOrEvent === "boolean" ? checkedOrEvent : checkedOrEvent?.target?.checked;
              table.toggleAllRowsSelected(checked);
            }}
            className="w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center px-1">
          <CustomCheckbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={(checkedOrEvent: any) => {
              const checked = typeof checkedOrEvent === "boolean" ? checkedOrEvent : checkedOrEvent?.target?.checked;
              row.toggleSelected(checked);
            }}
            className="w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary"
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
    getRowId: (row: any, index: number) => row._id || row.id || index.toString(),
    state: {
      expanded: enableExpanding ? expanded : {}, // Only manage expanded state if enabled
      rowSelection,
      sorting: enableSorting ? sorting : [],
      ...(enablePagination && reactTablePagination ? { pagination: reactTablePagination } : {}),
    },
    enableRowSelection: enableCheckbox,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: enableExpanding ? setExpanded : undefined,
    onSortingChange: enableSorting ? setSorting : undefined,
    onPaginationChange: enablePagination && onPaginationChange ? handlePaginationChange : undefined,
    manualPagination: manualPagination,
    pageCount: manualPagination && totalCount !== undefined ? Math.ceil(totalCount / (pagination?.limit || pageSize)) : undefined,
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
        "flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm w-full overflow-hidden mt-5",
        className,
      )}
    >
      <div className={clsx(
        "min-h-0",
        scrollBehavior === "inside" ? "flex-1 overflow-auto" : "h-fit overflow-visible"
      )}>
        <table className="min-w-full divide-y divide-gray-200 border-collapse m-0">
          {!hideHeader && (
            <thead className={clsx(
              "z-20 bg-gray-50 shadow-[0_1px_0_0_#e5e7eb]",
              scrollBehavior === "inside" && "sticky top-0"
            )}>
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
            {isLoading ? (
              <tr>
                <td colSpan={enableCheckbox ? columns.length + 1 : columns.length} className="text-center py-8">
                  <div className="flex justify-center items-center text-gray-500">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-primary"
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
                <td colSpan={enableCheckbox ? columns.length + 1 : columns.length} className="text-center py-8">
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
        <div className={clsx(
          "flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white border-t border-gray-200 gap-4",
          scrollBehavior === "inside" && "sticky bottom-0 z-20 shadow-[0_-1px_0_0_#e5e7eb]"
        )}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 whitespace-nowrap font-semibold">Rows per page:</span>
              <div className="relative" ref={pageSizeRef}>
                <button
                  type="button"
                  onClick={() => setIsPageSizeOpen(!isPageSizeOpen)}
                  className="flex items-center justify-between gap-2 min-w-[70px] bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl px-3 py-1.5 cursor-pointer transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <span>{table.getState().pagination.pageSize}</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isPageSizeOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isPageSizeOpen && (
                  <div className="absolute bottom-full mb-1.5 left-0 z-30 min-w-[70px] bg-white border border-gray-200 rounded-xl shadow-lg py-1 overflow-hidden">
                    {PAGE_OPTIONS.map((size) => {
                      const isSelected = table.getState().pagination.pageSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => {
                            table.setPageSize(size);
                            setIsPageSizeOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 text-sm transition-colors duration-150 ${
                            isSelected
                              ? "bg-primary text-white font-medium"
                              : "text-gray-700 hover:bg-primary-300 hover:text-white"
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="hidden lg:block text-sm text-gray-500 font-semibold">
              Total {typeof totalCount === "number" ? totalCount : data.length} items
            </div>
          </div>

          <nav className="flex items-center gap-2" aria-label="Pagination">
            {showPaginationControls && (
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className={clsx(
                  "flex items-center justify-center rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                  paginationSize === "sm" && "w-8 h-8",
                  paginationSize === "md" && "w-10 h-10",
                  paginationSize === "lg" && "w-12 h-12",
                  "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            <div className="flex items-center gap-1">
              {pages.map((pageNum, idx) => {
                const isActive = pageNum === currentPage;
                const isEllipsis = pageNum === "...";

                if (isEllipsis) {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
                      className={clsx(
                        "flex items-center justify-center text-gray-400",
                        paginationSize === "sm" && "w-8 h-8 text-xs",
                        paginationSize === "md" && "w-10 h-10 text-sm",
                        paginationSize === "lg" && "w-12 h-12 text-base"
                      )}
                    >
                      ...
                    </span>
                  );
                }

                const colorMap = {
                  primary: {
                    solid: "bg-primary text-white shadow-lg shadow-primary/30",
                    bordered: "border-2 border-primary text-primary bg-transparent",
                    flat: "bg-primary/10 text-primary",
                    light: "text-primary hover:bg-primary/10",
                  },
                  secondary: {
                    solid: "bg-secondary text-white shadow-lg shadow-secondary/30",
                    bordered: "border-2 border-secondary text-secondary bg-transparent",
                    flat: "bg-secondary/10 text-secondary",
                    light: "text-secondary hover:bg-secondary/10",
                  },
                  success: {
                    solid: "bg-success text-white shadow-lg shadow-success/30",
                    bordered: "border-2 border-success text-success bg-transparent",
                    flat: "bg-success/10 text-success",
                    light: "text-success hover:bg-success/10",
                  },
                  warning: {
                    solid: "bg-warning text-white shadow-lg shadow-warning/30",
                    bordered: "border-2 border-warning text-warning bg-transparent",
                    flat: "bg-warning/10 text-warning",
                    light: "text-warning hover:bg-warning/10",
                  },
                  danger: {
                    solid: "bg-danger text-white shadow-lg shadow-danger/30",
                    bordered: "border-2 border-danger text-danger bg-transparent",
                    flat: "bg-danger/10 text-danger",
                    light: "text-danger hover:bg-danger/10",
                  },
                  default: {
                    solid: "bg-gray-600 text-white shadow-lg shadow-gray-600/30",
                    bordered: "border-2 border-gray-600 text-gray-600 bg-transparent",
                    flat: "bg-gray-100 text-gray-700",
                    light: "text-gray-600 hover:bg-gray-50",
                  },
                };

                return (
                  <button
                    key={idx}
                    onClick={() => table.setPageIndex((pageNum as number) - 1)}
                    className={clsx(
                      "flex items-center justify-center font-medium rounded-xl transition-all",
                      paginationSize === "sm" && "w-8 h-8 text-xs",
                      paginationSize === "md" && "w-10 h-10 text-sm",
                      paginationSize === "lg" && "w-12 h-12 text-base",
                      
                      // Active State
                      isActive ? colorMap[paginationColor as keyof typeof colorMap][paginationVariant as keyof (typeof colorMap)['primary']] : [
                        "text-gray-600 hover:bg-gray-100",
                      ]
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {showPaginationControls && (
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className={clsx(
                  "flex items-center justify-center rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                  paginationSize === "sm" && "w-8 h-8",
                  paginationSize === "md" && "w-10 h-10",
                  paginationSize === "lg" && "w-12 h-12",
                  "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}

export { CustomTable };
