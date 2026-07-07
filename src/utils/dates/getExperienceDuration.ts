function plural(value: number, unit: string) {
  return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

export function getExperienceDuration(startDate: string, endDate?: string): string {
  const [startYear, startMonth] = startDate.split("-").map(Number);

  const end = endDate?.trim() || new Date().toISOString().slice(0, 7);
  const [endYear, endMonth] = end.split("-").map(Number);

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  if (totalMonths < 12) {
    return plural(totalMonths, "month");
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [plural(years, "year")];

  if (months > 0) {
    parts.push(plural(months, "month"));
  }

  return parts.join(" ");
}
