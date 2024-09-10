export type salaryProps = {
  max: number;
  min: number;
};
export function salary(props: salaryProps) {
  const total = props.max + props.min;
  const avg = total / 2;

  return avg;
}
