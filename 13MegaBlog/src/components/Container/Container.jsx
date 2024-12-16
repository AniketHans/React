export default function Container({ children }) {
  //This accepts properties as children. This component is like a box. We define the styling properties in it.
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}
