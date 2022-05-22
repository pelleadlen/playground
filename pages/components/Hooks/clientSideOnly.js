export default function ClientSideOnly(props) {
  if (typeof window === "undefined") {
    return null;
  }
  return props.children;
}
