import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

interface DateRangePickerProps {
  onRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
  placeholder?: string;
}

function CalendarIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drp-calendar-icon"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClearIcon({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      className="drp-clear-btn"
      onClick={onClick}
      aria-label="Clear selected dates"
      tabIndex={0}
      type="button"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="8" fill="#CBD5E1" />
        <path
          d="M5.2 5.2L10.8 10.8M10.8 5.2L5.2 10.8"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

const monthOptions = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" },
];

const yearOptions = Array.from({ length: 40 }, (_, index) => {
  const year = new Date().getFullYear() - 20 + index;
  return { value: year, label: String(year) };
});

function stripTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDate(a: Date | null, b: Date | null): boolean {
  return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDisplayRange(start: Date | null, end: Date | null): string {
  if (!start && !end) return "";
  if (start && !end) return formatDate(start);
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export default function DateRangePicker({
  onRangeChange,
  placeholder = "Select Date Range",
}: DateRangePickerProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const hasValue = !!(startDate || endDate);
  const displayValue = formatDisplayRange(startDate, endDate);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateChange = (
    dates: Date | [Date | null, Date | null] | null
  ) => {
    if (!dates) {
      setStartDate(null);
      setEndDate(null);
      onRangeChange?.(null, null);
      return;
    }

    const [start, end] = Array.isArray(dates) ? dates : [dates, null];
    const cleanStart = start ? stripTime(start) : null;
    const cleanEnd = end ? stripTime(end) : null;

    setStartDate(cleanStart);
    setEndDate(cleanEnd);
    onRangeChange?.(cleanStart, cleanEnd);

    if (cleanStart && cleanEnd) {
      setTimeout(() => setIsOpen(false), 80);
    }
  };

  const renderHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    changeMonth,
    changeYear,
  }: any) => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const selectStyles = {
      control: (base: any) => ({
        ...base,
        minHeight: 32,
        height: 32,
        borderRadius: 12,
        borderColor: "#d1d5db",
        backgroundColor: "#ffffff",
        boxShadow: "none",
      }),
      valueContainer: (base: any) => ({
        ...base,
        padding: "0 10px",
        height: 32,
      }),
      indicatorsContainer: (base: any) => ({
        ...base,
        paddingRight: 8,
      }),
      singleValue: (base: any) => ({
        ...base,
        lineHeight: "32px",
      }),
      dropdownIndicator: (base: any) => ({
        ...base,
        padding: 4,
      }),
      menu: (base: any) => ({
        ...base,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
      }),
      menuPortal: (base: any) => ({
        ...base,
        zIndex: 10020,
      }),
      menuList: (base: any) => ({
        ...base,
        padding: 0,
        maxHeight: 160,
      }),
      option: (base: any, state: any) => ({
        ...base,
        padding: "6px 10px",
        minHeight: 26,
        backgroundColor: state.isFocused ? "#eff6ff" : "#fff",
        color: "#111827",
      }),
    };

    return (
      <div className="drp-header flex flex-col items-center gap-3 px-3 pb-3">
        <div className="flex items-center justify-between w-full">
          <button
            type="button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-600 disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="text-sm font-semibold text-slate-900">{date.toLocaleString("en-US", { month: "long" })} {currentYear}</div>
          <button
            type="button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-600 disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 w-full">
          <div className="w-28">
            <Select
              value={monthOptions[currentMonth]}
              options={monthOptions}
              onChange={(option) => changeMonth((option as any).value)}
              isSearchable={false}
              menuPlacement="auto"
              menuPosition="fixed"
              menuPortalTarget={typeof document !== "undefined" ? document.body : undefined}
              menuShouldScrollIntoView={false}
              classNamePrefix="drp-select"
              styles={selectStyles}
            />
          </div>
          <div className="w-24">
            <Select
              value={{ value: currentYear, label: String(currentYear) }}
              options={yearOptions}
              onChange={(option) => changeYear((option as any).value)}
              isSearchable={false}
              menuPlacement="auto"
              menuPosition="fixed"
              menuPortalTarget={typeof document !== "undefined" ? document.body : undefined}
              menuShouldScrollIntoView={false}
              classNamePrefix="drp-select"
              styles={selectStyles}
            />
          </div>
        </div>
      </div>
    );
  };

  const getDayClass = (date: Date) => {
    const cleanDate = stripTime(date);
    if (isSameDate(cleanDate, startDate)) return "drp-day--range-start";
    if (isSameDate(cleanDate, endDate)) return "drp-day--range-end";
    if (startDate && endDate && cleanDate > startDate && cleanDate < endDate)
      return "drp-day--in-range";
    return "";
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartDate(null);
    setEndDate(null);
    onRangeChange?.(null, null);
  };

  const handleInputClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div className="drp-root" ref={wrapperRef}>
      {/* ── Input trigger ── */}
      <div
        className={[
          "drp-input-wrap",
          isOpen ? "drp-input-wrap--open" : "",
          hasValue ? "drp-input-wrap--filled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={handleInputClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleInputClick()}
        aria-label="Select date range"
        aria-expanded={isOpen}
      >
        {!displayValue ? (
          <span className="drp-placeholder">{placeholder}</span>
        ) : (
          <span className="drp-value">{displayValue}</span>
        )}

        {/* Conditional icon — never both */}
        <div className="drp-input-icon">
          {hasValue ? <ClearIcon onClick={handleClear} /> : <CalendarIcon />}
        </div>
      </div>

      {/* ── Calendar dropdown ── */}
      {isOpen && (
        <div className="drp-calendar-wrap">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            selectsRange
            shouldCloseOnSelect={false}
            inline
            calendarClassName="drp-calendar"
            dayClassName={getDayClass}
            renderCustomHeader={renderHeader}
          />
        </div>
      )}
    </div>
  );
}