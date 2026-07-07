const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function formatYearMonth(date: string): string {
  const [year, month] = date.split("-").map(Number);

  // Use UTC to avoid timezone issues
  return monthFormatter.format(new Date(Date.UTC(year, month - 1)));
}

export function getExperiencePeriod(
  startDate: string,
  endDate?: string
): string {
  const start = formatYearMonth(startDate);
  const end = endDate?.trim() ? formatYearMonth(endDate) : "Present";

  return `${start} - ${end}`;
}
